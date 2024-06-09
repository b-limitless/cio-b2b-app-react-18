import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModelAction, RowType } from './modelSlice';
import { TMode } from './modelTypeSlice';
import { TAccent } from './accentSlice';
import { TFebric } from './febricSlice';

export enum ECartStatus {
  open = "open",
  pendingPayment = "pendingPayment",
  completed = "completed",
}


export type TCartBase = {
  model: IModelAction;
  accent: TAccent;
  modelType: TMode;
  febric: TFebric
}

export type TCheckIfItemIsSameToUpdateCart = TCartBase & {
  index: number | null;
}

export type ICartItem = TCartBase & {
  subTotal: number;
  qty: number;
  discount?: number;
  availability: String;
  id: number;
  originalImageUrl?: string;
  deliveryTime?: string | null;
  season?:string;
  status?:ECartStatus;
  
};

export type TQuantityAction = 'add' | 'remove';

export interface IUpdateBase {
  index: number;
  id:number;
}
export interface IUpdateQuantity extends IUpdateBase {
  qty: number;
  addOrRemove: TQuantityAction;
  previousQty: number
}

export interface IUpdateCartByIndex {
  index:number;
  item: ICartItem;
}


export type ICart = ICartItem[];

const initialState: ICart = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: ICart, action: PayloadAction<ICartItem>) => {
      const payload = action.payload;
      return [...state, payload];
    },
    updateQuantity(state: ICart, action: PayloadAction<IUpdateQuantity>) {
      const { qty, addOrRemove,  index,id } = action.payload;

      const newState: ICart = JSON.parse(JSON.stringify(state));
      const updatedItem = newState[index];
    
      if (addOrRemove === 'add') {
        updatedItem.qty += qty;
      }

      if (addOrRemove === 'remove') {
        updatedItem.qty -= qty;
      }

      if(updatedItem.qty === 0) {
        newState.splice(index, 1);
      }

      if(updatedItem.qty > 0) {
        newState[index] = updatedItem;
      }
      return newState;
    },
    duplicateItem(state: ICart, action: PayloadAction<IUpdateBase>) {
       const {index} = action.payload;
       const deepCopyItem = JSON.parse(JSON.stringify(state[index]));
       return [...state, deepCopyItem]; 

    },
    deleteItemAction(state: ICart, action:PayloadAction<IUpdateBase>) {
      const {index: productId} = action.payload;
      
      return [...state.filter((cart) => cart.id !== productId)];

    }, 
    updateCartDataByIndex(state: ICart, action:PayloadAction<IUpdateCartByIndex>) {
      const {item, index} = action.payload;
      const carts = JSON.parse(JSON.stringify(state));
      carts[index] = item;
      return [...carts];
    }, 
    addAllItemsToTheCart: (state: ICart, action: PayloadAction<ICartItem[]>) => {
      const payload = action.payload;
      return  [...payload];
    },
  },
});

export const {addAllItemsToTheCart, addToCart, updateQuantity, duplicateItem, deleteItemAction, updateCartDataByIndex } = cartSlice.actions;
export default cartSlice.reducer;
