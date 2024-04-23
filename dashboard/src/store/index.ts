import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "../reducers/authSlice";
import febrics from "../reducers/productSlice";
import users from "../reducers/userSlice";
import orders from "../reducers/orderSlice";
import notifications from "../reducers/notficiationSlice";
import menu from "../reducers/menuSlices";
import shouldFetch from "../reducers/shoudFetchSlice";

// export const Store = configureStore({
//   reducer: {
//     auth,
//     febrics,
//     users,
//     orders,
//     notifications,
//     menu,
//     shouldFetch,
//   },
// });

const rootReducer = combineReducers({
    auth,
    febrics,
    users,
    orders,
    notifications,
    menu,
    shouldFetch,
  
});

const initialState = rootReducer(undefined, {} as any);

const resettableReducer = (state:any, action:any) => {
  if (action.type === 'auth/logout') {
    state = initialState;
  }
  return rootReducer(state, action);
};


// Create store
export const Store = configureStore({
  reducer: resettableReducer,
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

