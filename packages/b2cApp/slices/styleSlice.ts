import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EStyles } from 'config/models';
import { RowType } from './modelSlice';

export interface IStyle {
  label: string;
  code: EStyles;
  childrens: RowType[];
}

export interface IState {
  loading: boolean;
  error: null | string;
  data: IStyle[];
}

const initialState: IState = {
  loading: false,
  error: null,
  data: [],
};

const storeSlice = createSlice({
  name: 'styles',
  initialState,
  reducers: {
    updateStyles: (state: IState, action: PayloadAction<IStyle[]>) => {
      return { ...state, data: action.payload.reverse() };
    },
    loadingStyles: (state: IState, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
    stylesNetworkError: (state: IState, action: PayloadAction<null | string>) => {
      return { ...state, error: action.payload };
    },
  },
});

export const { updateStyles, loadingStyles, stylesNetworkError } = storeSlice.actions;
export default storeSlice.reducer;
