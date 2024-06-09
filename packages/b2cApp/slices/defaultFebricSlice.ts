import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { febricSample } from 'sample/febric';

export type TBaseFebric = typeof febricSample;
export type TFebric = Partial<TBaseFebric>;

const initialState: TFebric = {
}

const defaultFebricSlice = createSlice({
  name: 'defaultFebric',
  initialState,
  reducers: {
    updateDefaultFebric: (state: TFebric, action: PayloadAction<TFebric>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateDefaultFebric } = defaultFebricSlice.actions;
export default defaultFebricSlice.reducer;
