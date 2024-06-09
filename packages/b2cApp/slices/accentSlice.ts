// Basically it will store the different part of
// Model which is febric customizable
// For example in accent we have collor defualt, all, inner
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { defaultFebric } from 'config/default';
import { EAccentChildrens, EAccentFrontPacket, EDefault } from 'config/models';
import { defaultPrices } from 'config/default';

export type TCollarAccent = 'default' | 'all' | 'innerFebric'; // can extends for cuff as well
export type TModelNavigation = 'febrics' | 'styles' | 'accents';

export type TBase = {
  id: number | string;
  meshName?: string[];
  febric: string;
  updatedFrom?: TModelNavigation;
  price: number;
  code?: string;
  label?: string;
  season?: string;
  type?: TCollarAccent;
  texture?: string;
  title?: string;
  iconClass?: string;
  textureFromAllAccent?: string;
};

export interface IAccentGlobal {
  collar: TBase;
  cuff: TBase;
  buttonWholeAndStitch: TBase;
  buttonColors: TBase;
  frontPlacket: TBase;
}

export const accentProperties: IAccentGlobal = {
  collar: {
    id: 12,
    // Iterate through the mesh name and apply the selected febric to that mesh
    meshName: ['Collar_Node', 'Collar_Stand_Node'], //   'because it can be combining all or inner',
    febric: defaultFebric,
    updatedFrom: 'febrics',
    iconClass: 'icon-62',
    price: defaultPrices.collar,
    textureFromAllAccent: defaultFebric,
  },

  cuff: {
    id: 12,
    // Iterate through the mesh name and apply the selected febric to that mesh
    meshName: [], //'because it can be combining all or inner',
    febric: defaultFebric,
    updatedFrom: 'febrics',
    price: defaultPrices.cuff,
    iconClass: 'icon-77',
    textureFromAllAccent: defaultFebric,
  },
  buttonWholeAndStitch: {
    id: 1,
    febric: '',
    price: defaultPrices.cuff,
    iconClass: 'icon-55',
  },
  buttonColors: {
    id: '2',
    title: 'Black',
    texture: `/img/buttons/texture/black.png`,
    price: 0,
    febric: `/img/buttons/icon/black.png`,
    iconClass: 'icon-53',
  },
  frontPlacket: {
    id: '2',
    title: 'Black',
    texture: `/img/buttons/texture/black.png`,
    price: 0,
    febric: `/img/buttons/icon/black.png`,
    iconClass: 'icon-52',
  },
};

type ModelType = typeof accentProperties;
type ModelKeys = keyof ModelType;

export interface UpdateAccentAction {
  key: ModelKeys;
  payload: TBase;
}

export interface UpdateAccentActionType {
  key: ModelKeys;
  payload: {
    type: TBase['type'];
    meshName: TBase['meshName'];
    label: string;
    code: string;
  };
  childCode?: EAccentChildrens | EAccentFrontPacket | EDefault;
}

export interface IUdpateAllFebricAccent {
  key: ModelKeys;
  payload: {
    textureFromAllAccent?: string;
    febric?: string;
  };
  childCode?: EAccentChildrens | EAccentFrontPacket | EDefault;
}

export type TAccent = Record<ModelKeys, TBase>; // expecting RowType

const initialState: TAccent = {
  collar: {
    id: 12,
    febric: defaultFebric,
    meshName: ['Collar_Node', 'Collar_Stand_Node'],
    updatedFrom: 'febrics',
    price: defaultPrices.collar,
    iconClass: 'icon-57',
    label: 'default',
    code: 'default',
    textureFromAllAccent: defaultFebric,
  },
  cuff: {
    id: 12,
    febric: defaultFebric,
    meshName: ['left_upper', 'right_upper', 'left_inner', 'right_inner'],
    updatedFrom: 'febrics',
    price: defaultPrices.cuff,
    iconClass: 'icon-77',
    label: 'default',
    code: 'default',
    textureFromAllAccent: defaultFebric,
  },
  buttonWholeAndStitch: {
    id: '',
    febric: '/img/button-threads/thread-black.png',
    price: defaultPrices.cuff,
    iconClass: 'icon-55',
    label: 'default',
    code: 'default',
  },
  buttonColors: {
    id: '2',
    title: 'Black',
    texture: `/img/buttons/texture/black.png`,
    price: 0,
    febric: `/img/buttons/icon/black.png`,
    iconClass: 'icon-53',
    label: 'default',
    code: 'default',
  },
  frontPlacket: {
    id: '2',
    title: 'Black',
    price: 0,
    febric: '',
    iconClass: 'icon-52',
    label: 'default',
    code: 'default',
  },
};

const accentSlice = createSlice({
  name: 'accent',
  initialState,
  reducers: {
    updateAccent: (state: IAccentGlobal, action: PayloadAction<UpdateAccentAction>) => {
      return {
        ...state,
        [action.payload.key]: action.payload.payload,
      };
    },
    updateAccentType: (state: IAccentGlobal, action: PayloadAction<UpdateAccentActionType>) => {
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          type: action.payload.payload.type,
          meshName: action.payload.payload.meshName,
          code: action.payload.payload.label,
          label: action.payload.payload.code,
        },
      };
    },
    updateAllAccent: (state: IAccentGlobal, action: PayloadAction<TAccent>) => {
      const { ...rest } = action.payload;

      return { ...state, ...rest };
    },
    updateAllAccentTextureProps: (
      state: IAccentGlobal,
      action: PayloadAction<IUdpateAllFebricAccent>
    ) => {
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          textureFromAllAccent: action.payload.payload.textureFromAllAccent,
        },
      };
    },
    updateAllAccentTexture: (
      state: IAccentGlobal,
      action: PayloadAction<IUdpateAllFebricAccent>
    ) => {
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          febric: action.payload.payload.febric,
          textureFromAllAccent: action.payload.payload.textureFromAllAccent
        },
      };
    },
  },
});

export const { updateAccent, updateAccentType, updateAllAccent, updateAllAccentTexture, updateAllAccentTextureProps } =
  accentSlice.actions;
export default accentSlice.reducer;
