import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchCustomerMeasurementShirt } from 'actions/fetchCustomerMeasurementShirt.action';
import { IMeasurementHeight } from 'interface/IMeasurementBase';
import { IPantMeasurement } from 'interface/IPantMeasurement';
import { IShirtMeasurement } from 'interface/IShirtMeasurement';

const state: IShirtMeasurement | IPantMeasurement = {
  firstName: '',
  lastName: '',
  height: null,
  inch: null,
  sleevLength: null,
  shoulderWidth: null,
  chestAround: null,
  stomach: null,
  bicepAround: null,
  torsoLength: null,
  hips: null,
  wrist: null,
  weight: null,
  age: null,
  unite: 'feet',
  neck: null,
};

const stateError: IShirtMeasurement | IPantMeasurement = {
  firstName: null,
  lastName: null,
  height: null,
  inch: null,
  sleevLength: null,
  shoulderWidth: null,
  chestAround: null,
  stomach: null,
  bicepAround: null,
  torsoLength: null,
  hips: null,
  wrist: null,
  weight: null,
  age: null,
  unite: null,
  neck: null,
};

interface IMeasurement {
  data: IShirtMeasurement | IPantMeasurement;
  errors: IShirtMeasurement | IPantMeasurement;
  fetchedFromAPI: boolean;
  fetching: boolean;
  error:null | string | undefined;
}
export interface IPayloadMeasurment {
  key: keyof IShirtMeasurement | keyof IPantMeasurement;
  value: any;
}

const initialState: IMeasurement = {
  data: state,
  errors: stateError,
  fetchedFromAPI: false,
  fetching: false,
  error:null
};

interface IUpdateHeight {
  key: keyof IMeasurementHeight;
  value: number | null;
}

const measurementSlice = createSlice({
  name: 'measurement',
  initialState,
  reducers: {
    updateMeasurementAction: (state: IMeasurement, action: PayloadAction<IPayloadMeasurment>) => {
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
    updateMeasurementErrorAction: (
      state: IMeasurement,
      action: PayloadAction<IPayloadMeasurment>
    ) => {
      const { key, value } = action.payload;
      return {
        ...state,
        errors: {
          ...state.errors,
          [key]: value,
        },
      };
    },
    updateErrors: (
      state: IMeasurement,
      action: PayloadAction<IShirtMeasurement | IPantMeasurement>
    ) => {
      const { payload } = action;
      return {
        ...state,
        errors: {
          ...payload,
        },
      };
    },
    updateFetchedFromAPIAction: (state: IMeasurement, action: PayloadAction<boolean>) => {
      return { ...state, fetchedFromAPI: action.payload };
    },

    updateMeasurementPartialPropsAction: (
      state: IMeasurement,
      action: PayloadAction<IShirtMeasurement | IPantMeasurement>
    ) => {
      return { ...state, data: action.payload };
    },
    updateErrorsPartial: (
      state: IMeasurement,
      action: PayloadAction<IShirtMeasurement | IPantMeasurement>
    ) => {
      return {
        ...state,
        errors: action.payload,
      };
    },
    fetchingUserShirtMeasurementAction: (state: IMeasurement, action: PayloadAction<boolean>) => {
      return {
        ...state,
        fetching: action.payload,
      };
    },
    updateMeasurementToInitialState:() => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomerMeasurementShirt.fulfilled, (state, action) => {
      return {
        ...state,
        fetching: false,
        data: action.payload
      }
    }),
    builder.addCase(fetchCustomerMeasurementShirt.pending, (state, action) => {
      return {
        ...state,
        loading: action.payload
      }
    }), 
    builder.addCase(fetchCustomerMeasurementShirt.rejected, (state, action) => {
      state.fetching = false;
      state.error = action.error.message
    })

  }
});

export const {
  fetchingUserShirtMeasurementAction,
  updateErrorsPartial,
  updateMeasurementPartialPropsAction,
  updateMeasurementAction,
  updateMeasurementErrorAction,
  updateErrors,
  updateMeasurementToInitialState
} = measurementSlice.actions;

export default measurementSlice.reducer;
