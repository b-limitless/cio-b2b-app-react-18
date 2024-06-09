/**
 * 
 * If you want to add color, circle UI then please add type to color or text
 * Below is the example
 * {
    name: 'COLORS',
    code: 'colors',
    type: 'color',
    childrens: febricColor ,
  },
*/

import { EFebricFilter } from 'slices/febricsSlice';
import { febricSeasons, materialType, weaveTypes } from './febric';

export const filterData = [
  {
    name: 'SEASON',
    code: EFebricFilter.season,
    type: 'text',
    childrens: febricSeasons ,
  },
  {
    name: 'Weave',
    code: EFebricFilter.weave,
    type: 'text',
    childrens: weaveTypes ,
  },
  {
    name: 'Material',
    code: EFebricFilter.material,
    type: 'text',
    childrens: materialType ,
  },
];
