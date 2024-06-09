import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { defaultFebric } from 'config/default';
import { febricSample } from 'sample/febric';

export type TBaseFebric = typeof febricSample;
export type TFebric = Partial<TBaseFebric>;

const initialState: TFebric = {
  // characters: ['Soft'],
  // compositions: [
  //   {
  //     component: 'Other',
  //     percentage: 91,
  //   },
  //   {
  //     component: 'Polyester',
  //     percentage: 24,
  //   },
  //   {
  //     component: 'Other',
  //     percentage: 96,
  //   },
  //   {
  //     component: 'Wool',
  //     percentage: 61,
  //   },
  //   {
  //     component: 'Polyester',
  //     percentage: 52,
  //   },
  //   {
  //     component: 'Cotton',
  //     percentage: 24,
  //   },
  //   {
  //     component: 'Wool',
  //     percentage: 76,
  //   },
  // ],
  // userId: '65d3277dd1365d5ecd4882e9',
  // title: 'Ms',
  // price: 587.22,
  // deliveryTime: '3-5 business days',
  // excellence: 'Low',
  // warmth: 'Medium',
  // weight: 'Medium',
  // season: 'summer',
  // threadStyle: 'Patterned',
  // brightness: 'Dim',
  // superShiny: true,
  // material: 'other',
  // tone: 'Warm',
  // opacity: 'Transparent',
  // waterproof: 'false',
  // stretchyText: 'Medium Stretch',
  // stretchy: 'false',
  // type: 'Metal',
  // febricTypes: 'Wool',
  // threadTypes: 'Textured',
  // threadCounts: '300 TC',
  // thumbnailImageUrl: defaultFebric,
  // originalImageUrl: defaultFebric,
  // id: '660705d4306c62ecc81f896b',
};

const febricSlice = createSlice({
  name: 'febric',
  initialState,
  reducers: {
    updateFebric: (state: TFebric, action: PayloadAction<TFebric>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFebric } = febricSlice.actions;
export default febricSlice.reducer;
