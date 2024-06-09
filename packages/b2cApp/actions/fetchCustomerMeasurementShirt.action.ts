import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIS } from 'config/apis';
import { request } from 'utils/request';


export const fetchCustomerMeasurementShirt = createAsyncThunk(
  'users/fetchMeasurement',
  async () => {
        const response = await request({
      url: APIS.shirt.measurement,
      method: 'get',
    });
    const {customerId, ...rest} = response;
    
    return {...customerId, ...rest};
  },
)