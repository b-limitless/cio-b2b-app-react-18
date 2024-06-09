import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ThreadColor {
    id: string; 
    title: string; 
    febric: string; 
    price: number;
}

export interface ButtonColor extends ThreadColor {
    texture: string;
}

const initialState: ButtonColor[] = [
    {
        id: '1',
        title: 'blue',
        texture: `/img/buttons/texture/blue.png`,
        price: 0,
        febric: `/img/buttons/icon/blue.png`
    }, 
    {
        id: '2',
        title: 'Black',
        texture: `/img/buttons/texture/black.png`,
        price: 0,
        febric: `/img/buttons/icon/black.png`
    }, 
    {
        id: '3',
        title: 'red',
        texture: `/img/buttons/texture/red.png`,
        price: 0,
        febric: `/img/buttons/icon/red.png`
    }, 
    {
        id: '4',
        title: 'Brown',
        texture: `/img/buttons/texture/brown.png`,
        price: 0,
        febric: `/img/buttons/icon/brown.png`
    }, 
    {
        id: '5',
        title: 'Brown',
        texture: `/img/buttons/texture/md-blue.png`,
        price: 0,
        febric: `/img/buttons/icon/md-blue.png`
    },
    {
        id: '6',
        title: 'Brown',
        texture: `/img/buttons/texture/light-blue.png`,
        price: 0,
        febric: `/img/buttons/icon/light-blue.png`
    }, 
    {
        id: '7',
        title: 'Brown',
        texture: `/img/buttons/texture/pink.png`,
        price: 0,
        febric: `/img/buttons/icon/pink.png`
    }
];


const buttonColorsSlice = createSlice({
    name:'buttonColors', 
    initialState, 
    reducers: {
        addbuttonColors: (state: ButtonColor[], action:PayloadAction<ButtonColor[]>) => {
            return [...state, ...action.payload];
        }   
    }
});

export const {addbuttonColors} = buttonColorsSlice.actions;
export default buttonColorsSlice.reducer;
