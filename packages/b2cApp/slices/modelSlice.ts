/**
 * Despite we need to customize the cuff buttons whole and cuff button this can be 
 * important feature to implement all of them but leaving them for button color 
 * Working on button colors because it would be more important right now to provide
 * to customize the cuff button and whole color then whole shirt button colors
 * 
 * Come back when we implement different type of cuff model and collar model 
 * things will be more clarer in this case 
 * **/
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { defaultCollarModel, defaultCuffModel, defaultFebric } from 'config/default';

export enum EChestPocket {
  NoPocket='noPocket', 
  StandardPocket='standardPocket'
}

const modelProperties = {
  collar: {
    id: null,
    modelURL: defaultFebric,
    price: 0,
    title: '',
    
  },
  cuff: {
    id: null,
    modelURL: defaultCuffModel,
    price: 0,
    title: '',
  },
  chestpocket: {
    id: 13,
    modelURL: defaultCuffModel,
    price: 0,
    title: '',
    code: EChestPocket.NoPocket
    
  }, 
  buttons: {
    id: 13,
    modelURL: defaultCuffModel,
    price: 0,
    title: ''
  }, 
  buttonWholes: {
    id: 13,
    modelURL: defaultCuffModel,
    price: 0,
    title: '',
  }

} as const;

type ModelType = typeof modelProperties;

export type ModelKeys = keyof ModelType;

export interface UpdateModelAction {
  key: ModelKeys;
  payload: RowType;
}

export type RowType = {
  id: number | null;
  modelURL: string;
  price: number;
  title?: string;
  originalImageUrl?: string;
  code?: string;
  label?: string;
  season?: string;
  material?: string;
  tone?: string;
  febricTypes?: string;
  buttonsMeshNames?:string[], 
  buttonWholeMeshNames?:string[]
  iconClass?: string;
};

export type IModelAction = Record<ModelKeys, RowType>;

export interface IStyle {
  loading: boolean;
  data: IModelAction;
  error: null | string;
}

// For the testing keep this data here because 
// Might need to toggle between the server data and client data
// Therefore not removing them, because server data as well 
// need to be updated after more testing from the client side
const initialState: IStyle = {
  loading: false,
  error:null, 
  data: { 
    collar: {
    id: 12,
    modelURL: `${defaultCollarModel}?timestamp=${Date.now()}`,
    price: 0,
    label: 'default',
    code: 'default',
    iconClass: 'icon-62',
    buttonsMeshNames: [
      'right-top-button',
      'left-top-button'
    ],
    buttonWholeMeshNames: [
      'right-top-button-whole',
      'left-top-button-whole'
    ]
  },
  cuff: {
    id: 12,
    modelURL: `${defaultCuffModel}?timestamp=${Date.now()}`,
    price: 0,
    label: 'default',
    code: 'default',
    iconClass: 'icon-68',
    buttonsMeshNames: ['right-top-button', 'left-top-button'],
    buttonWholeMeshNames: ['right-top-button-whole', 'left-top-button-whole'],
  },
  chestpocket: {
    id: null,
    modelURL: '',
    price: 0,
    title:'', 
    iconClass: 'icon-57',
    code:EChestPocket.NoPocket
  },
  buttons: {
    id: null,
    modelURL: '',
    price: 0,
    title:'', 
  },
  buttonWholes: {
    id: null,
    modelURL: '',
    price: 0,
    title:''
  }, 
  }
  
};

const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    updateModel: (state: IStyle, action: PayloadAction<UpdateModelAction>) => {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.key]: action.payload.payload
        }
      };
    },
    updateAllProps: (state: IStyle, action: PayloadAction<IModelAction>) => {
      const { ...rest } = action.payload;
      return { ...state, ...rest };
    },

    updateModels: (state: IStyle, action: PayloadAction<IModelAction>) => {
      return {
        ...state,
        data: action.payload
      };
    },

    loadingStyles: (state: IStyle, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload};
    },
  },
});

export const { updateModel, updateAllProps, loadingStyles, updateModels } = modelSlice.actions;
export default modelSlice.reducer;
