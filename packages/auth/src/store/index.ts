import { configureStore } from "@reduxjs/toolkit";
import navigation from "../reducers/navigationSlice";

export const Store = configureStore({
  reducer: {
    navigation,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
