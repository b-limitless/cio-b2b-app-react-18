import React from 'react';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { IInputWithTooltip } from './input.interface';
import { style } from './style';



const InputWithTooltip = ({ label, toltipText, toltip, ...rest }: IInputWithTooltip) => {
    return (
        <TextField
        sx={style}
            {...rest}
            label={label}
            InputProps={{
                endAdornment: (
                    <Tooltip
                    sx={{fontFamily: 'Poppins'}}
                        title={
                            <span>
                                {toltipText}
                            </span>
                        }
                        arrow
                    >
                        <IconButton size="small">
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                ),
            }}
        />
    );
};

export default InputWithTooltip;