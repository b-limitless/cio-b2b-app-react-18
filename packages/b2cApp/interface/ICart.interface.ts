import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { IAccentGlobal } from 'slices/accentSlice';
import { ECartStatus, ICartItem } from 'slices/cartSlice';
import { TFebric } from 'slices/febricSlice';
import { IModelAction } from 'slices/modelSlice';

export enum tSnapShotUploadingStates {
  Upload = 'upload',
  Uploaded = 'uploaded',
  Uploading = 'uploading',
  Error = 'error',
  Ideal = 'ideal',
}

export interface IScreenShortCartItem {
  cartData: Partial<Omit<ICartItem, 'model' | 'accent'>> & {
    model: IModelAction ; // both of them will be updated
    accent:IAccentGlobal;
    originalImageUrl?: string;
    thumbnailImageUrl?: string;
    deliveryTime?: string;
    febric: TFebric
    status?:ECartStatus
  };
}

export interface ICaptureModelScreenShot extends IScreenShortCartItem {
  takeScreenShot: tSnapShotUploadingStates;
  setTakeScreenShot: Function;
  dispatch: Dispatch<AnyAction>;
  index:number | null;
  cart: ICartItem[]
  // setSnapShotUploadState: Function;
}
