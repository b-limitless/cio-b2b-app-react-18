 /**
 * This stage need to check if there is index is not null then simply update the cart with specific index
 * Other wise simply add new item to the cart Line 53 
 * **/
import { useThree } from '@react-three/fiber';
import { APIS } from 'config/apis';
import { dataURLtoBlob } from 'functions/dataURLtoBlob';
import { ICaptureModelScreenShot, tSnapShotUploadingStates } from 'interface/ICart.interface';
import { useEffect } from 'react';
import { addToCart, updateCartDataByIndex } from 'slices/cartSlice';
import { updateCartIndexAction } from 'slices/updateCartIndex';
import { request } from 'utils/request';




const CaptureModelScreenShot = ({dispatch, takeScreenShot, setTakeScreenShot, cartData, index, cart }: ICaptureModelScreenShot) => {

    const { gl, scene, camera } = useThree();

    useEffect(() => {
        const runTakeScreenShot = async () => {
            const canvasElement = gl.domElement;
            canvasElement.style.display = 'none';  
            gl.setSize(140, 173);
            gl.render(scene, camera);
            const screenShot = gl.domElement.toDataURL(); 
            

            const boblFile = dataURLtoBlob(screenShot);

            if (!boblFile) return;

            const snapShotFile = new File([boblFile], 'shot.png', { type: 'image/png' })

            const formData = new FormData();

            formData.append('image', snapShotFile);

            try {
                setTakeScreenShot(tSnapShotUploadingStates.Uploading);
                APIS.upload, formData
                const response = await request({
                    url: APIS.upload, 
                    body: formData, 
                    method:'post'
                });
                const { originalImageUrl, thumbnailImageUrl }  = response || {};

                if (originalImageUrl) {
                    const screenCDNURIs = { originalImageUrl, thumbnailImageUrl };
                    const data = { ...screenCDNURIs, ...cartData };
                    if(index !== null) {
                        // Send the request to the server to update the cart
                        const {id, ...body} = data;
                        try {
                            await request({url: `${APIS.cart}/${cart[index].id}`, body: {...body, status: cart[index].status}, method:'put'})
                        } catch(err) {
                            console.error(`Unable to update the cart ${err}`);
                        }
                        
                        dispatch(updateCartDataByIndex({index, item:data as any}));
                        dispatch(updateCartIndexAction(null));
                    }

                    if(index === null) {
                        try {
                            
                            const newCart = await request({
                                url: APIS.cart,
                                method: 'post', 
                                body: {...data, status:'open'}
                            });

                            const {id} = newCart;
                           
                            dispatch(addToCart({...data, id} as any));
                            
                        } catch(err) {
                            console.error(`Could not add item to the server ${err}`)
                        }
                    }
                    
                    setTakeScreenShot(tSnapShotUploadingStates.Uploaded);

                }
                
            } catch (err: any) {
                console.error(err);
            }
            

        }
        if (takeScreenShot === tSnapShotUploadingStates.Upload) {
            runTakeScreenShot();
        }
    }, [takeScreenShot, camera, gl, scene, setTakeScreenShot, cartData, dispatch, index, cart])

    return null;
}

export default CaptureModelScreenShot;