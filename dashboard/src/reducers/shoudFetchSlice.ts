import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IShouldFetchData {
  [x: string]: boolean;
}

export interface IPayload {
  key: string;
  value: boolean;
}
const initialState: IShouldFetchData = {
  order: true,
};

export const shouldFetchDataSlice = createSlice({
  name: "shouldFetchData",
  initialState,
  reducers: {
    fetchDataAction(state: IShouldFetchData, action: PayloadAction<IPayload>) {
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    },
  },
});

export const { fetchDataAction } = shouldFetchDataSlice.actions;
export default shouldFetchDataSlice.reducer;
