import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FebricAttrs {
  id: string | undefined;
  userId: string | undefined;
  title: string;
  price: number;
  deliveryTime: string;
  excellence: string;
  warmth: string;
  weight: string;
  season: string;
  threadStyle: string;
  brightness: string;
  superShiny: boolean;
  material: string;
  tone: string;
  threadCount: string;
  opacity: string;
  waterproof: boolean;
  stretchyText: string;
  stretchy: boolean;
  mis: string;
  type: string;
  febricTypes: string;
  febricSeasons: string;
  threadTypes: string;
  threadCounts: string;
  characters: string[];
  thumbnailImageUrl: string;
  originalImageUrl: string;
  compositions: any[];
  weave:string;
}

export enum EFebricFilter {
  season = 'season',
  material = 'material',
  weave = 'weave',
}

export interface IFebricFilter  {
  filters: { [key in EFebricFilter]: string[] };
}

export enum EPageUpdatedFrom {
  none='none',
  scroll='scroll',
  filter='filter'
}

interface IFebricGroup extends IFebricFilter{
  febrics: FebricAttrs[];
  affectedRows: number;
  limit: number;
  page: number;
}

export interface IFebrics {
  loading: boolean;
  data: IFebricGroup;
  error: string | null;
  pageUpdateFrom: EPageUpdatedFrom
}

const initialState: IFebrics = {
  loading: true,
  data: {
    febrics: [],
    affectedRows: 0,
    limit: 0,
    filters: { season: [], material: [], weave: [] },
    page: 0
  },
  error: null,
  pageUpdateFrom: EPageUpdatedFrom.none
};

const febricsSlice = createSlice({
  name: 'febrics',
  initialState,
  reducers: {
    fetchingFebricAction: (state: IFebrics, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    fetchedFebricsAction: (state: IFebrics, action: PayloadAction<IFebricGroup>) => {
      
      return {
        ...state,
        data: action.payload,
      };
    },
    fetchedErrorAction: (state: IFebrics, action: PayloadAction<string | null>) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    updatFebricFilter: (
      state: IFebrics,
      action: PayloadAction<{ key: EFebricFilter; value: string }>
    ) => {
      const { key, value } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          filters: {
            ...state.data.filters,
            [key]: state.data.filters[key].includes(value)
              ? state.data.filters[key].filter((val) => val !== value)
              : [...state.data.filters[key], value],
          },
        },
      };
    },
    updaeFebricsPage: (state:IFebrics, action: PayloadAction<number>) => {
      return {
        ...state,
        data: {
          ...state.data,
          page: action.payload
        }
      }
    }, 
    fetchMoreFebrics: (state: IFebrics, action:PayloadAction<IFebricGroup>) => {
      // Access previous state and merge this with new one
      const febrics = state.data.febrics;
      const {affectedRows, limit, filters, page} = action.payload;
      return {
        ...state,
        data: {
          febrics: [...febrics, ...action.payload.febrics],
          affectedRows, 
          limit,
          filters,
          page
        }
      }
    }, 
    updatePageUpdatedFrom:(state:IFebrics, action: PayloadAction<EPageUpdatedFrom>)=> {
      return {
        ...state, 
        pageUpdateFrom: action.payload
      }
    }
  }
});

export const {fetchMoreFebrics, fetchingFebricAction, fetchedFebricsAction, fetchedErrorAction, updatFebricFilter, updaeFebricsPage } =
  febricsSlice.actions;
export default febricsSlice.reducer;
