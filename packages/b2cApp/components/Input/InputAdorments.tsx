import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import * as React from 'react';
import { style } from "./style";
import { FormHelperText } from '@mui/material';
import { colors } from 'config/colors';
import Image from 'next/image';

export default function InputAdornments({...props}) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <FormControl sx={style} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
                <OutlinedInput
                    {...props}
                    id="outlined-adornment-password"
                    type='text'
                    startAdornment={<InputAdornment position="start">
                       {props.icon}
                    </InputAdornment>}
                />
                
                {props.error && <FormHelperText sx={{color: `${colors.red}`}}>{props.helperText}</FormHelperText>}
            </FormControl>
        </>
    );
}