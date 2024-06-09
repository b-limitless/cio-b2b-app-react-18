import { IShippingState } from "slices/shippingSlice";
import { OrderProcessType } from "types/enums";

export interface Base {
  nextStageHandler: Function;
}

export interface OrderCommonInterface extends Base {
  setMeasurementJourney: Function;
  measurementJourney: OrderProcessType;
  error?: null | string;
  userId?:string | string[]
  
}

export interface IMeasurementForm extends OrderCommonInterface {
  onChangeHandler?:Function;
  onMouseLeaveEventHandler: Function;
  fetching:boolean;
  
}

export interface IShippingFrom extends IMeasurementForm {
  shipping: IShippingState
  handleOptionChange:Function;
  selectedCountry:string;
  fetching: boolean;
}
