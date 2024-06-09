import React from 'react';
import styles from './payment.module.scss';
import Image from 'next/image';
import { PaymentOptions, PaymentOptionsTypes } from 'types';
import { Button } from 'components/Button';
import ErrorText from 'components/Help/ErrorText';
import { useDispatch, useSelector } from 'react-redux';
import { updatePaymentType } from 'slices/paymentSlice';
import { RootState } from 'store';


interface PaymentOptionsInterface {
    nextStageHandler:Function;
    error?:string | null;
}

export default function Options({error, nextStageHandler }: PaymentOptionsInterface) {
    
    const dispatch = useDispatch();
    const {type} = useSelector((state:RootState) => state.payment);

    return (
        <div className={styles.payment__container}>
            <div className={styles.title}>
                <p className={styles.select}>
                    Select payment method
                </p>
                {error && <ErrorText text={error} style={{margin: '1rem 0 0 0 '}}/>}
            </div>
            <div className={styles.options}>
                <div className={styles.option} onClick={() => dispatch(updatePaymentType(PaymentOptions.paypal))}>
                    <Image src={'/icon/paypal.svg'} width={24} height={28.31} alt='paypal'></Image>
                    <span className={styles.title}>Paypal</span>

                    {type === PaymentOptions.paypal && <Image src={'/icon/green-checked.svg'} width={24} height={24} alt='paypal'></Image>}

                </div>

                <div style={{pointerEvents: 'none', opacity:0.6}} className={styles.option} onClick={() => dispatch(updatePaymentType(PaymentOptions.creditCard))}>
                    <Image src={'/icon/credit-card.svg'} width={24} height={28.31} alt='credit-card'></Image>
                    <span className={styles.title}>credit card</span>

                    {type === PaymentOptions.creditCard && <Image src={'/icon/green-checked.svg'} width={24} height={24} alt='credit card'></Image>}
                </div>
            </div>

            <Button variant='primary' type='square' onClick={() => nextStageHandler()}>
                Next
            </Button>
        </div>
    )
}
