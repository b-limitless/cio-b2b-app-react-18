'use client';
import { FormControlLabel, Radio } from '@mui/material';
import { colors } from 'config/colors';

import React from 'react'

interface IRadio {
    label: any;
    [x: string]: any;
}
export default function RadioButton({ label, ...rest }: IRadio) {
    return (
        <FormControlLabel 
         control={<Radio sx={{color: colors.black , '&.Mui-checked': { color: colors.black } }}/>} 
         label={label} {...rest} 
         sx={{fontFamily: 'Poppins'}}
         />
    );
}
