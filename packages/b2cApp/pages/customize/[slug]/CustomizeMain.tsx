
'use client';

if (process.env.NODE_ENV === 'development') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

/**
 * Issue: When filtering for one case reporducing in this way
 *   * Just scroll to the bottom of febric sidebar and it will load more data 
 *   * Click to the filter and then it will send 2 request to server for fetching data 
 *   * Issue is page is updated to 0 when its clicked to filter button so that we have new data 
 *   * Due to main priority moving to another feature and will be fixed in next stage
 *   
 *   Line 263 explanation 
 *    When user loading all data then stop this process
      Even user reaches to the end of the scroll bar
      page + 1 * limit === affectedRows then stop
 * **/
import { Canvas } from '@react-three/fiber';
import { Button } from 'components/Button';
import Header from 'components/Header/Header';
import { defaultFebric } from 'config/default';
import { productNavigation } from 'config/product';
import { removeTimestamp } from 'functions/removeTimeStamp';
import useFetchFebrics from 'hooks/useFetchFebric';
import { tSnapShotUploadingStates } from 'interface/ICart.interface';
import { useRouter } from 'next/router';

import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {TBase, UpdateAccentAction, updateAccent, updateAllAccent, updateAllAccentTexture, updateAllAccentTextureProps } from 'slices/accentSlice';
import { TCheckIfItemIsSameToUpdateCart } from 'slices/cartSlice';
import { TFebric, updateFebric } from 'slices/febricSlice';
import { RootState } from 'store';
import { selectionProcess } from 'types/enums';

import Loader from 'components/Loader';
import { ERoute } from 'config/route';
import { isScrolledToBottom } from 'functions/scrollToBottom';
import Shirt3DModel from 'pages/customize/3DModel/Shirt';
import { EFebricFilter, updaeFebricsPage, updatFebricFilter } from 'slices/febricsSlice';
import { styleOne } from 'styles/styles';
import styles from '../customize.module.scss';
import CaptureModelScreenShot from './CaptureModelScreenShot';
import useDispatchStoreId from 'hooks/useDispatchStoreId';
import useFetchDefaultStyle from 'hooks/useFetchDefaultStyle';
import { EAccent } from 'config/models';
import {useQuery} from '@tanstack/react-query'; 
import { EModel, fetchDataAction } from 'slices/shouldFetch';
import { fetchDefaultFebric } from 'apis/fetch-default-febric';
import { updateDefaultFebric } from 'slices/defaultFebricSlice';
import { queryKeys } from 'config/queryKeys';
import useGetStoreId from 'hooks/useGetStoreId';

const FebricDetails = React.lazy(() => import('../FebricDetails'));
const Febrics = React.lazy(() => import('../Select/Febrics'));
const AccentFebricModel = React.lazy(() => import('pages/customize/Febric/AccentFebricModel'));
const Filter = React.lazy(() => import('../Febric/Filter'));
const Styles = React.lazy(() => import('../Select/Styles'));
const Accents = React.lazy(() => import('../Select/Accents'));

interface ICustomizeMain {
    userId: string | string[]
}
export default function CustomizeMain({ userId }: ICustomizeMain) {
    const router = useRouter();
    const [showFilterModel, setShowFilterModel] = useState(false);
    const [showFebricDetailsModel, setShowFebricDetailsModel] = useState<string | null>(null);
    const [designJourney, setDesignJourney] = useState<selectionProcess>(selectionProcess.febrics);
    const [showAccentFebricModel, setShowAccentFebricModel] = useState<boolean>(false);
    const [activeAccent, setActiveAccent] = useState<EAccent>(EAccent.Collar);

    const model = useSelector((state: RootState) => state.model);
    const { collar, cuff, chestpocket } = model.data;
    const { code: chestPocket } = chestpocket;
    const febric = useSelector((state: RootState) => state.febric);
    const accent = useSelector((state: RootState) => state.accent);

    const febrics = useSelector((state: RootState) => state.febrics);
    const { data: { filters, page, limit, affectedRows }, loading } = febrics;
    const { modelType } = useSelector((state: RootState) => state.modelType);
    const { index } = useSelector((state: RootState) => state.cartIndexToupdate);
    const cart = useSelector((state: RootState) => state.cart);

    const {loading: loadingStyles} = model;
    
    const storeId = useGetStoreId();

    const {
        buttonColors: { texture: buttonsColorTexture },
        collar: collarAccent,
        buttonWholeAndStitch: { febric: buttonWholesFebric }, 
        frontPlacket: {febric: frontPacketTexture}
    } = accent;
    const { cuff: cuffAccent } = accent;
    const [takeScreenShot, setTakeScreenShot] = useState<tSnapShotUploadingStates>(tSnapShotUploadingStates.Ideal);


    const { originalImageUrl } = febric;
    const dispatch = useDispatch();


    const checkIfItemIsSameToUpdateCart = (params: TCheckIfItemIsSameToUpdateCart) => {
        const { index, ...rest } = params;
        if (index === null) return false;
       
        const { model, accent, febric, modelType } = cart[index];
        const previousCartData = JSON.stringify({ model, accent, modelType, febric });
        return removeTimestamp(previousCartData) === removeTimestamp(JSON.stringify(rest));
    }

    const nextStepHandler = () => {
        /**
         * There will be two condition user came from modify part -> 
         * 1. Adding same item to the cart
         * 2. Adding modify version of item
         * 
         * Below is explaination for the modify version of item
         * In this state we need to check if user trying to add new item to the cart
         * Or user simply came from the cart modify path where they are tryting to modify the cart
         * If user trying to modify the cart then cartIndexToupdate:{index: number | null}
         * Null if user is adding new item to the cart
         * or there will be index
         * If you find any index there which is not null then simply get the the index
         * Use action to dispatch updateCartDataByIndex({index: number, item:CartItem})
         * If update finllay update the state cartIndexToupdate to null
         * 
         * **/
        const {data:style} = model;
        if (designJourney === selectionProcess.accents) {
            if (checkIfItemIsSameToUpdateCart({ index, model:style, accent, modelType, febric })) {
                router.push(ERoute.cart);
                return;
            }

            setTakeScreenShot(tSnapShotUploadingStates.Upload);
            return;
        }
        // First get the index of selected step 
        const findIndex = Object.keys(selectionProcess).indexOf(designJourney);
        // Add one to that index 
        const getNextValue = Object.values(selectionProcess)[findIndex + 1];
        setDesignJourney(getNextValue);
    }


    const updateFebricHandler = (event: React.MouseEvent<HTMLButtonElement>, params: TFebric) => {
        event.stopPropagation();
        const payload = params;
        dispatch(updateFebric(payload));

        if (collarAccent.updatedFrom === 'febrics') {
            const payloadC: any = {
                ...collarAccent,
                febric: payload.originalImageUrl ?? defaultFebric,
            }
            dispatch(updateAccent({ key: 'collar', payload: payloadC }));
        }

        if (cuffAccent.updatedFrom === 'febrics') {
            const newState = { ...cuffAccent, febric: payload.originalImageUrl ?? defaultFebric }
            dispatch(updateAccent({ key: 'cuff', payload: newState as TBase }));
        }
    }

    const updateAccentHandler = (event: React.MouseEvent<HTMLButtonElement>, params: UpdateAccentAction) => {
        event.stopPropagation();

        
        const { payload } = params;
        const { meshName, type, code, label, textureFromAllAccent} = activeAccent === 'collar' ? collarAccent : cuffAccent;
        
        // label, activeAccent label === [all, innerFebric], activeAccent=collar,cuff 
        payload.meshName = meshName;
        payload.type = type;
        payload.updatedFrom = 'accents';
        payload.code = code;
        payload.label = label;
        payload.textureFromAllAccent = textureFromAllAccent;
        
        
        const {febric} = payload;
        
        dispatch(updateAccent({ key: activeAccent, payload }));
        
        if([EAccent.Collar, EAccent.Cuff].includes(activeAccent) && label === 'all') {
            dispatch(updateAllAccentTextureProps({key: activeAccent, payload: {textureFromAllAccent: febric }}))
        }
        
    }

    const computePrice = useMemo(() => {
        if (febric.price) {
            return febric.price + collarAccent?.price + cuffAccent?.price;
        }

        return 0;

    }, [febric.price, collarAccent.price, cuffAccent.price]);


    const updateFebricFiltersHandler = (key: EFebricFilter, value: string) => {
        const container = document.getElementById('febrics-scroll-container');
        if (container) {
            container.scrollTop = 0;
        }

        dispatch(updaeFebricsPage(0));
        dispatch(updatFebricFilter({ key, value }));
    }


    useEffect(() => {
        if (takeScreenShot === tSnapShotUploadingStates.Uploaded) {
            router.push(`${ERoute.cart}`);
        }
    }, [takeScreenShot, router, userId]);

    useEffect(() => {
        const container = document.getElementById('febrics-scroll-container');

        function handleScroll() {
            if (isScrolledToBottom(container)) {
                if (((page + 1) * limit) <= affectedRows && !loading) {
                    dispatch(updaeFebricsPage(page ? page + 1 : 1))
                }
            }
        }

        container?.addEventListener('scroll', handleScroll);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        }

    }, [page, dispatch, affectedRows, limit, loading]);

    const getClass = useMemo(() => {
        return designJourney === selectionProcess.febrics ? styles.febrics :
            designJourney === selectionProcess.styles ? styles.styles :
                designJourney === selectionProcess.accents ? styles.styles :
                    'default';
    }, [designJourney]);

    const loadingStyleMemo = useMemo(() => {
        if(loadingStyles) return true;
        return false;
    }, [loadingStyles])

    const getFebicDetailsForModel:any = useMemo(() => {
        if(showFebricDetailsModel) {
            return febrics.data.febrics.filter((febric) => febric.id === showFebricDetailsModel)[0];
        }
        return febric;
        
    }, [showFebricDetailsModel, febrics.data.febrics, febric]);


    const {defaultFebric: shouldFetchDefaultFebric} = useSelector((state:RootState) => state.shouldFetch);
    
    const defaultFebric = useSelector((state:RootState) => state.defaultFebric);
    
    const {data, isLoading, error} = useQuery(
           {
            queryKey:[queryKeys.fetchDefaultFebric, userId], 
            queryFn: () => fetchDefaultFebric(userId.toString()),
            enabled: shouldFetchDefaultFebric
        });

    useEffect(() => {
        if(data && !isLoading && !error) {
            dispatch(fetchDataAction({key: EModel.defaultFebric, value: false}));
            dispatch(updateDefaultFebric(data));

            const {originalImageUrl} = data;
            
            dispatch(updateAllAccentTexture({key: EAccent.Collar, payload: {febric: originalImageUrl, textureFromAllAccent: originalImageUrl}}));
            dispatch(updateAllAccentTexture({key: EAccent.Cuff, payload: {febric: originalImageUrl, textureFromAllAccent: originalImageUrl}}));
            dispatch(updateFebric(data));
        }
    }, [data, isLoading, error, dispatch]);

    useDispatchStoreId();
    useFetchDefaultStyle();


    useFetchFebrics({ userId: storeId, filters: JSON.stringify(filters), page });
    useEffect(() => {
        if (showFilterModel) {
            document.body.style.overflow = 'hidden';
        }

        if (!showFilterModel) {
            document.body.style.overflow = 'auto';
        }

    }, [showFilterModel]);

    return (
        <>
            <Suspense fallback={<Loader message='Loading febric details....'/>}>
                {showFebricDetailsModel  && <FebricDetails
                    setShowFebricDetailsModel={setShowFebricDetailsModel}
                    showFebricDetailsModel={showFebricDetailsModel}
                    febric={getFebicDetailsForModel}
                />
                }
            </Suspense>

            <Suspense fallback={<Loader message='Loading filters...'/>}>
                <Filter
                    setShowFilterModel={setShowFilterModel}
                    showFilterModel={showFilterModel}
                    updateFebricFiltersHandler={updateFebricFiltersHandler}
                />

            </Suspense>

            <Suspense fallback={<Loader message='Loading accents....'/>}>
                <AccentFebricModel
                    setShowFilterModel={setShowAccentFebricModel}
                    showFilterModel={showAccentFebricModel}
                    onClickHandler={updateAccentHandler}
                    accentFebrics={febrics.data.febrics}
                />
            </Suspense>


            <div className={styles.container}>
                <Header
                    navigations={productNavigation}
                    designJourney={designJourney}
                    setDesignJourney={setDesignJourney}
                    showNavigation
                    userId={storeId ?? ''}
                />
                <main className={`${styles.main__content} ${getClass}`}>
                    <div className={styles.filter}>
                        <div className={styles.title}>Select {designJourney}</div>


                        {designJourney === selectionProcess.febrics &&
                            <Suspense fallback={<Loader message='Loading febrics...'/>}>
                                <Febrics
                                    setShowFilterModel={setShowFilterModel}
                                    setShowFebricDetailsModel={setShowFebricDetailsModel}
                                    onClickHandler={updateFebricHandler}
                                    febrics={febrics}
                                />
                            </Suspense>
                        }

                        {designJourney === selectionProcess.styles &&
                            <Suspense fallback={<Loader message='Loading styles...'/>}>
                                <Styles
                                    collarAccent={collarAccent}
                                    cuffAccent={cuffAccent}
                                    // modelStyles={modelStyles}

                                />
                            </Suspense>
                        }

                        {designJourney === selectionProcess.accents &&
                            <Suspense fallback={<Loader message='Loading accents...'/>}>
                                <Accents
                                    setShowAccentFebricModel={setShowAccentFebricModel}
                                    showAccentFebricModel={showAccentFebricModel}
                                    setActiveAccent={setActiveAccent}
                                />
                            </Suspense>
                        }

                    </div>
                    {loadingStyleMemo && <Loader message='Please wait, loading styles...'/>}
                    
                    {!loadingStyleMemo && defaultFebric?.originalImageUrl && <div className={styles.model}>
                            <Canvas>
                            <Shirt3DModel
                                    collar={collar}
                                    cuff={cuff}
                                    febricURI={originalImageUrl ?? defaultFebric?.originalImageUrl}
                                    collarAccent={collarAccent}
                                    cuffAccent={cuffAccent}
                                    chestPocket={chestPocket}
                                    buttonWholesFebric={buttonWholesFebric}
                                    buttonsColorTexture={buttonsColorTexture ?? ''}
                                    frontPacketTexture={frontPacketTexture}
                                />

                                <CaptureModelScreenShot
                                    dispatch={dispatch}
                                    takeScreenShot={takeScreenShot}
                                    setTakeScreenShot={setTakeScreenShot}
                                    index={index}
                                    cartData={
                                        {
                                            model:model.data,
                                            accent,
                                            modelType,
                                            subTotal: computePrice,
                                            qty: 1,
                                            discount: 0,
                                            availability: '',
                                            id: cart.length + 1,
                                            deliveryTime: '3 weeks',
                                            febric,

                                        }
                                    }
                                    cart={cart}

                                />
                            </Canvas>
                        

                    </div>}
                    
                    <div className={styles.infomration}>
                        <div className={styles.row}>
                            <div className={styles.name}>
                                { }
                            </div>
                            <div className={styles.price}>
                                ${computePrice.toFixed(2)}
                            </div>
                            <div className={styles.feature}>
                                {febric.title}
                            </div>
                            <div className={styles.type}>
                                {febric.material}
                            </div>
                            <div className={styles.ref}>
                                ref: Mayfield
                            </div>
                            <div className={styles.detail__action}
                            onClick={() => setShowFebricDetailsModel(febric.id ?? null)}
                            >
                                FebricDetails
                            </div>
                        </div>
                        <div className={styles.row}>
                            <Button variant='primary' type='square' onClick={() => takeScreenShot === tSnapShotUploadingStates.Uploading ? null : nextStepHandler()}>
                                <span style={styleOne}>{takeScreenShot === tSnapShotUploadingStates.Uploading ? 'Please wait...' : 'Next'}</span>
                            </Button>
                            {/* <div className={styles.receives__when}>
                                RECEIVE IN 3 WEEKS
                            </div> */}
                            {/* <div className={styles.icons}>
                                <Image src='/icon/heart.svg' width={24} height={20} alt='heart' />
                                <Image src='/icon/share.svg' width={24} height={20} alt='share' />
                            </div> */}
                        </div>
                    </div>

                </main>
            </div>
        </>

    )
}
