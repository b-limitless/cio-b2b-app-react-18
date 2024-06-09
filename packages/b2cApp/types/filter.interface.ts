export interface FebricBase {
  name: string;
  code: string;
}
export interface ColorInterface extends FebricBase {
  i: number;
}

export interface FilterItemInterface extends FebricBase {
  childrens: any[];
  type: string;
  updateFebricFiltersHandler:Function;
}
