import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchCustomerShipping } from 'actions/fetchCustomerShipping.action';

export interface IShipping {
  firstName: string | null;
  lastName: string | null;
  addressLine1: string | null;
  addressLine2?: string | null; // Optional
  city: string | null;
  state: string | null;
  postalCode: string | null;
  country: string | null;
  phoneNumber: string | null;
  countryCode: string | null;
  email: string | null;
}

export interface IShippingState {
  data: IShipping;
  errors: IShipping;
  fetching:boolean;
  error:null | string | undefined;
}

export interface IPayloadShipping {
  key: keyof IShipping;
  value: any;
}

export const initialState: IShippingState = {
  data: {
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: null,
    state: '',
    postalCode: '',
    country: 'ae',
    phoneNumber: '',
    countryCode: '971',
    city: '',
    email: '',
  },
  errors: {
    firstName: null,
    lastName: null,
    addressLine1: null,
    addressLine2: null,
    state: null,
    postalCode: null,
    country: null,
    phoneNumber: null,
    countryCode: null,
    city: null,
    email: null,
  },
  fetching:false,
  error:null
};

const shippingSlice = createSlice({
  initialState,
  name: 'shipping',
  reducers: {
    updateShippingAction: (state: IShippingState, action: PayloadAction<IPayloadShipping>) => {
      const { key, value } = action.payload;
      // return { ...state, [key]: value };
      return {
        ...state,
        data: {
          ...state.data,
          [key]: value,
        },
      };
    },
    updateShippingErrorAction: (state: IShippingState, action: PayloadAction<IPayloadShipping>) => {
      const { key, value } = action.payload;
      return {
        ...state,
        errors: {
          ...state.errors,
          [key]: value,
        },
      };
    },
    updateShippingWholeError: (state: IShippingState, action: PayloadAction<IShipping>) => {
      const { payload } = action;
      return {
        ...state,
        errors: {
          ...payload,
        },
      };
    },
    updatePartiallyAction: (state: IShippingState, action: PayloadAction<Partial<IShipping>>) => {
      const { payload } = action;

      return {
        ...state,
        data: {
          ...state.data,
          ...payload,
        },
      };
    },
    updateShippingToInitialState:() => {
      return initialState;
    }
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomerShipping.fulfilled, (state, action) => {
      return {
        ...state,
        fetching: false,
        data: action.payload
      }
    }),
    builder.addCase(fetchCustomerShipping.pending, (state, action) => {
      state.fetching = true;
    }), 
    builder.addCase(fetchCustomerShipping.rejected, (state, action) => {
      state.fetching = false;
      state.error = action.error.message
    })

  }
});

export const {
  updateShippingAction,
  updateShippingErrorAction,
  updateShippingWholeError,
  updatePartiallyAction,
  updateShippingToInitialState
} = shippingSlice.actions;
export default shippingSlice.reducer;
