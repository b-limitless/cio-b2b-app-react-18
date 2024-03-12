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
    updateMenuSettings: (state: IMenu, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    },
  },
});

export const { updateMenuSettings } = menuSlice.actions;
export default menuSlice.reducer;
