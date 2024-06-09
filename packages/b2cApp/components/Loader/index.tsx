import { CircularProgress } from '@mui/material'
import { colors } from 'config/colors';
import React from 'react';

const style: any = {
    display: 'flex',
    alignItems: 'center',
    columnGap: '1rem',
    height:'100%', 
    fontFamily:'Poppins, san-sarif'

}

interface ILoader {
    message?:string;
}
export default function Loader({message}: ILoader) {
    return (
        <div style={style}>
            <CircularProgress style={{ color: colors.primary, fontFamily: 'Poppins, san-sarif' }} color={'info'} />{ message ? message :'Please wait....'}</div>
    )
}
