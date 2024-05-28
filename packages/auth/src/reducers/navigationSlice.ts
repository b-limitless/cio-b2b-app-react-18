import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IMenu {
  useNavigationFromShell: any;
}

const initialState: IMenu = {
  useNavigationFromShell: {},
};

const menuSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    updateNavigation: (state: IMenu, action: PayloadAction<any>) => {
      return { ...state, useNavigationFromShell:action.payload};
    },
  },
});

export const { updateNavigation } = menuSlice.actions;
export default menuSlice.reducer;
