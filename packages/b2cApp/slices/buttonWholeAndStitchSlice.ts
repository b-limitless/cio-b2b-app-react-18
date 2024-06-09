import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { buttonThreadBaseURI } from "config/default";

export interface ThreadColor {
    id: string; 
    title: string; 
    febric: string; 
    price: number;
}

export interface ButtonColor extends ThreadColor {
    texture: string;
}

const initialState: ThreadColor[] = [
    {
        id: '1',
        title: 'Black',
        febric: `${buttonThreadBaseURI}/thread-black.png`,
        price: 0
    },
    {
        id: '2',
        title: 'Blue',
        febric: `${buttonThreadBaseURI}/thread-blue.png`,
        price: 0
    },
    {
        id: '3',
        title: 'Brown',
        febric: `${buttonThreadBaseURI}/thread-brown.png`,
        price: 0
    },
    {
        id: '4',
        title: 'Gray',
        febric: `${buttonThreadBaseURI}/thread-gray.png`,
        price: 0
    },
    {
        id: '5',
        title: 'Green',
        febric: `${buttonThreadBaseURI}/thread-green.png`,
        price: 0
    },
    {
        id: '6',
        title: 'Red',
        febric: `${buttonThreadBaseURI}/thread-red.png`,
        price: 0
    }
];

const buttonWholeAndStitchSlice = createSlice({
    name:'buttonWholeAndStitch', 
    initialState, 
    reducers: {
        addButtonWholeAndStitch: (state: ThreadColor[], action:PayloadAction<ThreadColor[]>) => {
            return [...state, ...action.payload];
        }   
    }
});

export const {addButtonWholeAndStitch} = buttonWholeAndStitchSlice.actions;
export default buttonWholeAndStitchSlice.reducer;
