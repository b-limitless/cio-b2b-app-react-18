import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PaymentOptionsTypes } from 'types';


export interface IPayment {
  type: PaymentOptionsTypes | null;
  error: null | string;
}

const initialState: IPayment = {
  type: null,
  error: null
};

const storeSlice = createSlice({
  name: 'modelType',
  initialState,
  reducers: {
    updatePaymentType: (state: IPayment, action: PayloadAction<null | PaymentOptionsTypes>) => {
      return { ...state, type: action.payload };
    },
    updatePaymentError: (state: IPayment, action: PayloadAction<null | string>) => {
        return { ...state, error: action.payload };
    },
  },
});

export const {updatePaymentType, updatePaymentError} = storeSlice.actions;
export default storeSlice.reducer;