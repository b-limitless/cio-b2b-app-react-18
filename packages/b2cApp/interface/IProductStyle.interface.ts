import { MouseEventHandler, RefObject } from 'react';

import { TBase } from 'slices/accentSlice';
import { IState } from 'slices/styleSlice';

export interface IAccents {
  setShowAccentFebricModel: Function;
  showAccentFebricModel: boolean;
  setActiveAccent?: Function;
}

export interface ItemInterface {
  code: string;
  id: string;
  title: string;
  
  onClickHanlder: MouseEventHandler<HTMLLabelElement>;
  iconClass: string;
  name:string;
  showColorPlateOne:boolean;
  ref:RefObject<HTMLInputElement>;
  onColorClickHandler: Function;
}
export type TOnClickEvent = 'accent' | 'style' | 'febric';

export interface IStyles {
  collarAccent: TBase;
  cuffAccent: TBase;
  // modelStyles: IState
}

export interface ProductStylesInterface extends IAccents {
  label: string;
  childrens: any[];
  code: string;
  type: TOnClickEvent;
  setActiveAccent?: Function;
  collarAccent?: TBase;
  cuffAccent?: TBase;
}
