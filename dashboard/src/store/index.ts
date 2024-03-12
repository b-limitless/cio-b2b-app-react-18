import { configureStore } from '@reduxjs/toolkit';
import auth from '../reducers/authSlice';
import product from '../reducers/productSlice';
import users from '../reducers/userSlice';
import orders from '../reducers/orderSlice';
import notifications from '../reducers/notficiationSlice';
import menu from '../reducers/menuSlices';

export const Store = configureStore({
    reducer: {
        auth, 
        product, 
        users,
        orders,
        notifications, 
        menu
    }
});

export type RootState = ReturnType <typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;