import React from 'react';
import { Message } from '@pasal/cio-component-library';
import { svgCDNAssets } from '@pasal/common-functions';
import { useNavigate } from 'react-router-dom';

type Props = {
    
}

export default function StepThree({ }: Props) {
    const history = useNavigate();
    return (
        <Message
            title='User added sucessfully'
            buttonText='List User'
            buttonVariant='secondary'
            icon={svgCDNAssets.successCheck}
            redirectLink={'/users'}
            btnOnClickEvent={() => {
                history('/users')
            }}
            
        />
    )
}