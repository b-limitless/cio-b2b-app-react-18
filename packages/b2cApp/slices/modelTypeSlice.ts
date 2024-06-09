import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TMode = 'shirt' | 'pant' | 'suit';

export enum EProduct {
  shirt='shirt', 
  pant='pant', 
  suit='suit'
}

export interface IModeType {
  modelType: EProduct;
}

const initialState: IModeType = {
  modelType: EProduct.shirt,
};

const modelTypeSlice = createSlice({
  name: 'modelType',
  initialState,
  reducers: {
    updaetModelType: (state: IModeType, action: PayloadAction<EProduct>) => {
      return { ...state, modelType: action.payload };
    },
  },
});

export const {updaetModelType} = modelTypeSlice.actions;
export default modelTypeSlice.reducer;