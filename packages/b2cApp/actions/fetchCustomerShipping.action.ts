import { createAsyncThunk } from '@reduxjs/toolkit';
import { shipping } from 'config/apis';
import { initialState } from 'slices/shippingSlice';
import { request } from 'utils/request';


export const fetchCustomerShipping = createAsyncThunk(
  'users/fetchShipping',
  async () => {
        const response = await request({
      url: shipping,
      method: 'get',
    });

    
    return response ? response : initialState.data;
  },
)