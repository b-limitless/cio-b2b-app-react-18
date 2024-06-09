/**
 * 
 * Using Draco compression for your 3D models can indeed improve performance in terms of 
 * loading times and memory usage. Draco is a compression library developed by Google 
 * that reduces the size of 3D geometry and animation data without significantly 
 * compromising visual quality. By using Draco compression, you can decrease 
 * the file size of your 3D models, leading to faster loading times, 
 * reduced bandwidth usage, and better overall performance, especially 
 * for web-based applications.
*/
'use client';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { defaultCollarModel, defaultCuffModel, defaultFebric } from 'config/default';
import { EAccentAttrs, ECollars, ECuffs, modelsURL } from 'config/models';
import dynamic from 'next/dynamic';
import { ReactNode, useEffect, useMemo, useRef } from 'react';
import { TBase } from 'slices/accentSlice';
import { EChestPocket, RowType } from 'slices/modelSlice';
import * as THREE from 'three';
import { Group, MeshPhongMaterial, Object3DEventMap, TextureLoader } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';




const modelScale = 8;
const modelYPostion = -10.2;

interface BaseModel {
  collar: RowType;
}

export enum EModel {
  Shirt = 'shirt',
  Pocket = 'pocket',
  Cuff = 'cuff',
  Collar = 'collar',
  ThreadWholes = 'threadWholes',
  Buttons = 'buttons',
  FrontPlacket = 'frontPlacket'

}



interface ShirtModelInterface extends BaseModel {
  febricURI: string;
  collarAccent: TBase;
  cuffAccent: TBase;
  cuff: RowType;
  chestPocket: any
  buttonWholesFebric: string;
  buttonsColorTexture: string;
  frontPacketTexture: string;
}

interface AddTextureModel {
  textureURL: string;
  children: ReactNode
  meshName: string[];
  fullBody: boolean;
  modelType?: EModel
  shouldRun?: boolean;

}


interface IAddModelToScene {
  name: string;
  modelURI: string;
}


const Shirt3DModel = ({
  buttonsColorTexture,
  buttonWholesFebric,
  collar,
  cuff,
  febricURI,
  collarAccent,
  cuffAccent,
  chestPocket,
  frontPacketTexture
}: ShirtModelInterface) => {


  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={.1} color={0xffffff} />
      <directionalLight position={[-5, -5, -5]} intensity={.1} color={0xffffff} />
      <pointLight position={[100, 100, 100]} />
      <hemisphereLight color={0xffffff} intensity={0.3} position={[100, 50, 0]} />
      <directionalLight castShadow={true} />
      <mesh receiveShadow castShadow />

      <perspectiveCamera
        fov={15}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={100}
        position={[10, 0, 5]}
      />

      <OrbitControls
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
        enableDamping={true}
        enablePan={false}
        dampingFactor={0.2}
        autoRotate={false}
        autoRotateSpeed={1}
      />

      {/* When there is stand up collar is selected then we do not need to show collar 
        Because based colar which is attached to the shirt is itself is stand colar 
     */}
      <AddTextureToModel textureURL={buttonWholesFebric} meshName={collar.buttonWholeMeshNames ?? []} fullBody={false} modelType={EModel.ThreadWholes}>
        <AddTextureToModel textureURL={buttonsColorTexture} meshName={collar.buttonsMeshNames ?? []} fullBody={false} modelType={EModel.Buttons}>
          {/* <AddTextureToModel textureURL={collarAccent.febric ?? defaultFebric} meshName={collarAccent.meshName ?? []} fullBody={collarAccent?.meshName?.length === 0} modelType={EModel.Collar}>
          </AddTextureToModel> */}
          <AddTextureToModel
            textureURL={collarAccent.textureFromAllAccent ?? defaultFebric}
            meshName={collarAccent?.label === EAccentAttrs.InnerFebric ? ['Collar_Node'] : []}
            fullBody={false}
            modelType={EModel.Collar}
          // shouldRun={collarAccent?.meshName && collarAccent?.meshName?.length > 0}
          >
            <AddTextureToModel textureURL={collarAccent.febric ?? defaultFebric} meshName={collarAccent.meshName ?? []} fullBody={collarAccent?.meshName?.length === 0} modelType={EModel.Collar}>
              <AddModelToScene name='collar' modelURI={collar.modelURL ?? defaultCollarModel} />
            </AddTextureToModel>

          </AddTextureToModel>




        </AddTextureToModel>
      </AddTextureToModel>

      <AddTextureToModel textureURL={buttonWholesFebric} meshName={cuff.buttonWholeMeshNames ?? []} fullBody={false} modelType={EModel.ThreadWholes}>
        <AddTextureToModel textureURL={buttonsColorTexture} meshName={cuff.buttonsMeshNames ?? []} fullBody={false} modelType={EModel.Buttons}>
          <AddTextureToModel textureURL={cuffAccent.febric ?? defaultFebric} meshName={cuffAccent.meshName ?? []} fullBody={cuffAccent?.meshName?.length === 0} modelType={EModel.Cuff}>

            <AddTextureToModel
              textureURL={cuffAccent.textureFromAllAccent ?? defaultFebric}
              meshName={cuffAccent?.label === EAccentAttrs.InnerFebric ? ['right_upper', 'left_upper'] : []}
              fullBody={false}
              modelType={EModel.Cuff}
              shouldRun={cuffAccent?.meshName && cuffAccent?.meshName?.length > 0}
            >
              <AddModelToScene name='cuff' modelURI={cuff.modelURL ?? defaultCuffModel} />
            </AddTextureToModel>

          </AddTextureToModel>
        </AddTextureToModel>
      </AddTextureToModel>




      <AddTextureToModel textureURL={buttonsColorTexture} meshName={[]} fullBody={true} modelType={EModel.Buttons}>
        <AddModelToScene name='buttons' modelURI={modelsURL.buttons} />
      </AddTextureToModel>


      <AddTextureToModel textureURL={buttonWholesFebric} meshName={[]} modelType={EModel.ThreadWholes} fullBody>
        <AddModelToScene name='buttonsWholes' modelURI={modelsURL.buttonsWholes} />
      </AddTextureToModel>

      <AddTextureToModel textureURL={!frontPacketTexture ? febricURI : frontPacketTexture} meshName={[]} modelType={EModel.FrontPlacket} fullBody>
        <AddModelToScene name='frontPlacket' modelURI={modelsURL.frontPlacket} />
      </AddTextureToModel>



      {chestPocket === EChestPocket.StandardPocket && <AddTextureToModel textureURL={febricURI} meshName={[]} fullBody={true} modelType={EModel.Pocket}>
        <AddModelToScene name='pocket' modelURI={modelsURL.pocket} />
      </AddTextureToModel>}

      {cuff.code !== ECuffs.DoubleSqure && <AddTextureToModel textureURL={febricURI} meshName={[]} fullBody={true} modelType={EModel.Shirt}>
        <AddModelToScene name='sleev' modelURI={modelsURL.sleev} />
      </AddTextureToModel>}


      <AddTextureToModel textureURL={febricURI} meshName={[]} fullBody={true} modelType={EModel.Shirt}>
        <Model />
      </AddTextureToModel>
    </>

  );
};


const Model = () => {
  const dracoLoader = new DRACOLoader(); // Create a DRACOLoader instance
  dracoLoader.setDecoderConfig({ type: 'js' });
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/'); // Set the path to the Draco decoder

  const { scene } = useLoader(GLTFLoader, modelsURL.shirt, (loader) => {
    loader.setDRACOLoader(dracoLoader); // Set the DRACOLoader instance for the GLTFLoader
  });

  scene.scale.set(modelScale, modelScale, modelScale);
  // Optionally adjust position or scale here
  scene.position.y = modelYPostion;
  scene.position.x = 0;

  scene.name = 'shirt-model-without-collar';

  return <primitive object={scene} />;
};


const AddModelToScene = ({ name, modelURI }: IAddModelToScene) => {

  const dracoLoader = new DRACOLoader(); // Create a DRACOLoader instance
  dracoLoader.setDecoderConfig({ type: 'js' });
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/'); // Set the path to the Draco decoder


  const { scene } = useLoader(GLTFLoader, modelURI, (loader) => {
    loader.setDRACOLoader(dracoLoader); // Set the DRACOLoader instance for the GLTFLoader
  })

  // const { scene } = useLoader(GLTFLoader, modelURI);


  const existingCollar = scene.getObjectByName(name);
  if (existingCollar) {
    scene.remove(existingCollar);
  }

  scene.scale.set(modelScale, modelScale, modelScale);
  // Optionally adjust position or scale here
  scene.position.y = modelYPostion;
  scene.position.x = 0;

  scene.name = name;

  return <primitive object={scene} />;
};


const AddTextureToModel = ({ textureURL, meshName, children, fullBody, modelType, shouldRun }: AddTextureModel) => {
  const modelRef = useRef<Group<Object3DEventMap>>(null);

  const getTexture = modelType === EModel.Shirt ? 'timestamp=1'
    : modelType === EModel.Pocket ? 'timestamp=2'
      : modelType === EModel.Cuff ? 'timestamp=3'
        : modelType === EModel.Collar ? 'timestamp=4'
          : modelType === EModel.ThreadWholes ? 'timestamp=5'

            : 'timestamp=3'

  // Load texture using userLoader 
  const texture = useLoader(TextureLoader, `${textureURL}?${getTexture}`);

  // Check the proper resolution of model 
  // On the other hand the febric need to be high resolution 
  // Febric size need to be greater then model so there is no repeating 
  // needed to add to have real experiences
  // Considere the lighting way on the model which will provide more
  // Realistic experiences for the model
  // Write code in this way [EModel.Cuff, EModel.Collar, EModel.Shirt].includes(modelType)

  if (modelType === EModel.Cuff) {
    texture.repeat.set(4, 4);
  }


  if (modelType === EModel.Pocket) {
    texture.repeat.set(2, 2);

  }

  if (modelType === EModel.Collar) {
    texture.repeat.set(5, 5)
  }

  if (modelType === EModel.FrontPlacket) {
    texture.repeat.set(4, 4)
  }

  if (modelType === EModel.Shirt) {
    texture.repeat.set(4, 4);

  }
  if (modelType === EModel.ThreadWholes) {
    texture.repeat.set(1, 1);
  }

  if (modelType === EModel.Buttons) {
    texture.repeat.set(1, 1);
  }


  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  // Define material with the loaded texture
  const material = useMemo(() => {
    return new MeshPhongMaterial({ map: texture });
  }, [texture]);



  // Set the material to the specific mesh in the model

  const setMaterial = (parent: THREE.Object3D, meshName: string[], mtl: THREE.Material, fullBody: boolean) => {

    fullBody && parent.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        o.material = mtl;
      }
    })

    !fullBody && parent.traverse((o) => {
      //&& !['MatShape_16796_Node', 'MatShape_16804_Node'].includes(o.name)
      if (o instanceof THREE.Mesh && meshName.includes(o.name)) {
        o.material = mtl;
      }
    })
  }

  useEffect(() => {
    if (modelRef.current) setMaterial(modelRef.current, meshName, material, fullBody);

  }, [texture, material, meshName, fullBody]);

  return (
    <group ref={modelRef}>
      {children}
    </group>
  );
}




export default dynamic(() => Promise.resolve(Shirt3DModel), { ssr: false });
