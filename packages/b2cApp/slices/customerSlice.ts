import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ICurrentCustomer {
  token: any;
}

const initialState: ICurrentCustomer = {
  token: null,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCurrentCustomer: (state: ICurrentCustomer, action: PayloadAction<string | null>) => {
      return { ...state, token: action.payload };
    },
  },
});

export const { setCurrentCustomer } = customerSlice.actions;
export default customerSlice.reducer;

