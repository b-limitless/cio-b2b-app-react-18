import { IMeasurementBase } from "./IMeasurementBase";

export interface IShirtMeasurement extends IMeasurementBase {
  sleevLength: number | null;
  shoulderWidth: number | null;
  chestAround: number | null;
  stomach: number | null;
  bicepAround: number | null;
  torsoLength: number | null;
  hips: number | null;
  wrist: number | null;
  neck: number | null;
  // Add more properties as needed
}



