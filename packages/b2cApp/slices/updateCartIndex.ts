
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ICartUpdate {
    index: number | null;
}
const initialState: ICartUpdate = {
    index: null
}

const updateCartIndexSlice = createSlice({
  name: 'updateCartIndex',
  initialState,
  reducers: {
    updateCartIndexAction: (state:ICartUpdate, action: PayloadAction<number | null>) => {
       return {...state, index: action.payload}
    },
  },
});

export const { updateCartIndexAction } = updateCartIndexSlice.actions;
export default updateCartIndexSlice.reducer;