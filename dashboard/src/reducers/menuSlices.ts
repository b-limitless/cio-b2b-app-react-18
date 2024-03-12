import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { menuEnum } from '../types&Enums/menu';

export enum EMenu {
    selectedMenu= 'selectedMenu',
    showSettingModel='showSettingModel',
    showProfileModel='showProfileModel',
}


export interface IMenu {
    selectedMenu: menuEnum;
    showSettingModel: boolean;
    showProfileModel: boolean;
}

const initialState:IMenu = {
    selectedMenu: menuEnum.Auth_Signin,
    showSettingModel: false,
    showProfileModel: false
}

interface payload {
    key: EMenu, 
    value: boolean | menuEnum
}

const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers: {
        updateMenuSettings: (state: IMenu, action:PayloadAction<payload>) => {
            const {key, value} = action.payload;
            return {...state, [key]: value}
        }, 
        
    }
});

export const {updateMenuSettings} = menuSlice.actions;
export default menuSlice.reducer; 