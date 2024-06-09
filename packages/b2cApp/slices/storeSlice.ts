import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface IModeType {
  id: string | null;
}

const initialState: IModeType = {
  id: null,
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    updateStoreIdAction: (state: IModeType, action: PayloadAction<null | string>) => {
      return { ...state, id: action.payload };
    },
  },
});

export const {updateStoreIdAction} = storeSlice.actions;
export default storeSlice.reducer;