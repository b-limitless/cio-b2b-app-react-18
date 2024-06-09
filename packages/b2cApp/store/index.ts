'use client';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import accent from 'slices/accentSlice';
import cart from 'slices/cartSlice';
import currentCustomer from 'slices/customerSlice';
import febric from 'slices/febricSlice';
import febrics from 'slices/febricsSlice';
import measurment from 'slices/measurmentSlice';
import model from 'slices/modelSlice';
import modelType from 'slices/modelTypeSlice';
import shipping from 'slices/shippingSlice';
import store from 'slices/storeSlice';
import cartIndexToupdate from 'slices/updateCartIndex';
import payment from 'slices/paymentSlice';
import buttonWholeAndStitch from 'slices/buttonWholeAndStitchSlice';
import buttonColors from 'slices/buttonColors';
import styles from 'slices/styleSlice';
import accents from 'slices/accentsSlice';
import defaultFebric from 'slices/defaultFebricSlice';
import shouldFetch from 'slices/shouldFetch';

export const Store = configureStore({
    reducer: {
        model, 
        accent, 
        modelType, 
        cart, 
        cartIndexToupdate, 
        febric, 
        measurment, 
        shipping, 
        febrics, 
        store, 
        currentCustomer, 
        payment, 
        buttonWholeAndStitch, 
        buttonColors, 
        styles, 
        accents, 
        defaultFebric,
        shouldFetch
    },
    middleware: [thunk]
});



export type RootState = ReturnType <typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;