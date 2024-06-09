import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { default as MUISelect } from '@mui/material/Select';
import * as React from 'react';
import { style } from "styles/style";

import { FormHelperText } from '@mui/material';

export interface SelectInterface {
    options: any[];
    value: string | number;
    label: string;
    onChange: any;
    id?: string;
    [x: string]: any;
}


const Select: React.FC<SelectInterface> = ({ options, label, value, onChange, id, ...rest }: SelectInterface) => {
    return (

        <FormControl sx={
            { ...style, minWidth: 140, width: '100%' }

        }
            error={rest.error}
        >
            <InputLabel id={id}>{label}</InputLabel>
            <MUISelect
                labelId={id}
                id={id}
                value={value}
                label={label}
                onChange={onChange}
                {...rest}
            >
                {options.map((option: any, i: number) => <MenuItem key={i} value={option.code}>{option.name}</MenuItem>)}
            </MUISelect>
            {rest.error && <FormHelperText sx={{ color: "#d32f2f" }}>Please select {label.toLowerCase()}</FormHelperText>}
        </FormControl>

    );
}


export default Select;
