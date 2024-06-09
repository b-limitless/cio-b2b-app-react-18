import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { colors } from '../../config/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import ErrorText from 'components/Help/ErrorText';


export default function Checbox(props: any) {
    return (
        <>
        <Checkbox
            {...props}
            sx={{
                // padding: '0px',
                color: colors.primary,
                '&.Mui-checked': {
                    color: colors.primary,
                },
            }}
        />
        

        </>
        
    );
}

export const CheckboxWithLabel = (props: any) => {
    return <FormControlLabel
        control={<Checbox {...props} />} label={props.label} />
}

