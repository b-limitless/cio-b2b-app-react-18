import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const febricModel = {
  title: "New Title",
  warmth: "Thermal_Conductivity",
  characters: ["Anti-Microbial", "Stain-Resistant"],
  price: "4",
  deliveryTime: "340",
  excellence: 1,
  weight: "34",
  febricSeasons: "spring",
  febricTypes: "denim",
  threadTypes: "polyester",
  brightness: "luminance",
  superShiny: false,
  threadCounts: "400-600",
  opacity: 50,
  waterproof: "water_resistant",
  originalImageUrl:
    "https://res.cloudinary.com/dun5p8e5d/image/upload/v1697459039/images/ABC/deg0wohwxdurzst5t2tz.jpg",
  thumbnailImageUrl:
    "https://res.cloudinary.com/dun5p8e5d/image/upload/v1697459042/thumbnails/ABC/oflbmyrgxxnmn2vyz620.jpg",
  compositions: [{ name: "Denim", code: "denim", persantage: "100" }],
  threadStyle: "none",
  tone: "blue",
  stretchy: true,
  stretchyText: "Stretchy fabric",
  type: "shirt",
  isDefault: false
  
 
};

export type febricType = typeof febricModel & {id?: string, action?:any};

export interface ProductInterface {
  febrics: febricType[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  update: string | null
  affectedRows: number;
  filters: any //{[x:string]:string[]};
}

export const initialState: ProductInterface = {
  febrics: [],
  loading: false,
  error: null,
  page: 0,
  limit: 20,
  update: null, 
  affectedRows: 0, 
  filters: { febricSeasons: [], brightness: [] }
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchedFebrics: (
      state: ProductInterface,
      action: PayloadAction<ProductInterface>
    ) => {
      return {
        ...state, 
        ...action.payload
      };
    },
    paginateFebric: (
      state: ProductInterface,
      action: PayloadAction<number>
    ) => {
      return {
        ...state,
        page: action.payload,
      };
    },
  
    addFebric: (state: ProductInterface, action: PayloadAction<febricType>) => {
      return {
        ...state,
        febrics: [...state.febrics, action.payload],
      };
    },

    deleteFebricAction: (state: ProductInterface, action: PayloadAction<string>) => {
      return {
        ...state,
        febrics: [...state.febrics].filter((febric) => febric.id !== action.payload),
        affectedRows: state.affectedRows - 1
      };
    },
    updateFebric: (state: ProductInterface, action: PayloadAction<string | null>) => {
      return {
        ...state, 
        update: action.payload
      }
    }, 
    affectedRowAction: (state: ProductInterface, action: PayloadAction<number>) => {
      return {
        ...state, 
        affectedRows: action.payload
      }
    }, 
    filterFebric: (state: ProductInterface, action: PayloadAction<{[x:string]:string[]}>) => {
      return {
        ...state, 
        filters:action.payload
      }
    }, 
    updateFebricIsDefault : (state: ProductInterface, action: PayloadAction<string>) => {
      return {
        ...state, 
        febrics: [...state.febrics].filter((febric) => {
           if(febric.id === action.payload) {
            febric.isDefault = true
           }

           return febric;
        })
      }
    }

  },
});

export const {
  fetchedFebrics,
  paginateFebric,
  addFebric,
  updateFebric, 
  affectedRowAction, 
  filterFebric, 
  deleteFebricAction, 
  updateFebricIsDefault
} = productSlice.actions;

export const productActions = productSlice.actions;

export default productSlice.reducer;
