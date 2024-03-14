import { configureStore } from "@reduxjs/toolkit";
import shellAuth from "../reducers/authSlice";

export const Store = configureStore({
  reducer: {
    shellAuth,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
