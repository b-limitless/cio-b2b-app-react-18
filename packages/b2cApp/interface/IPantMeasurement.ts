import { IMeasurementBase } from "./IMeasurementBase";

export interface IPantMeasurement extends IMeasurementBase{
    legLength:number | null;
    paintsWaist: number | null;
    raise: number | null;
    hips:number | null;
    thigs:number | null;
    
}