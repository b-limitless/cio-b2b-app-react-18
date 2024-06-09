import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EProductType, EStyles } from 'config/models';
import { RowType } from './modelSlice';

export interface IAccents {
  label: string;
  code: EStyles;
  childrens: RowType[];
}

export interface IState {
  loading: boolean;
  error: null | string;
  productType: EProductType,
  data: IAccents[];
}

const initialState: IState = {
  loading: false,
  error: null,
  data: [],
  productType:EProductType.shirt
};

const accentsSlice = createSlice({
  name: 'accents',
  initialState,
  reducers: {
    updateAccents: (state: IState, action: PayloadAction<IAccents[]>) => {
      return { ...state, data: action.payload };
    },
    loadingAccents: (state: IState, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
    aceentsNetworkError: (state: IState, action: PayloadAction<null | string>) => {
      return { ...state, error: action.payload };
    },
  },
});

export const { updateAccents, loadingAccents, aceentsNetworkError } = accentsSlice.actions;
export default accentsSlice.reducer;
