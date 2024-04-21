import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum EModel {
  Orders='orders',
  Febrics='febrics'
}
export interface IShouldFetchData {
  [x: string]: boolean;
}

export interface IPayload {
  key: EModel;
  value: boolean;
}
const initialState: IShouldFetchData = {
  order: true,
  febrics: true
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
