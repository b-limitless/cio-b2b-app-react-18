import { configureStore } from "@reduxjs/toolkit";
import auth from "../reducers/authSlice";
import febrics from "../reducers/productSlice";
import users from "../reducers/userSlice";
import orders from "../reducers/orderSlice";
import notifications from "../reducers/notficiationSlice";
import menu from "../reducers/menuSlices";
import shouldFetch from "../reducers/shoudFetchSlice";

export const Store = configureStore({
  reducer: {
    auth,
    febrics,
    users,
    orders,
    notifications,
    menu,
    shouldFetch,
  },
});



export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;


