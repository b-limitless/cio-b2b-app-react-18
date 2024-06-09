export type IMeasurementUnite = 'feet' | 'cm' | null;

export type IMeasurementHeight = {
  //unite: IMeasurementUnite;
  feet: number | null;
  inch: number | null;
};

export interface IMeasurementBase {
  firstName: string | null;
  lastName: string | null;
  height: number | null;
  inch: number | null;
  weight: number | null;
  age:number | null;
  unite: IMeasurementUnite;
 
}

