import React from 'react';
import styles from '../cart.module.scss';
import Radio from 'components/Radio/Radio';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { PaymentOptions } from 'types';

const stylePayment: any =
    { display: 'flex', alignItems: 'center' }

const stylePaymentBase = { ...stylePayment, columnGap: '8px' };
const paymentStyle1 = { fontFamily: 'Poppins', fontSize: '14px' }


export default function Payment() {
    const { type } = useSelector((state: RootState) => state.payment)
    return (
        <div className={styles.payment}>
            <div className={styles.row}>
                <div className={styles.title}>Payment Methods</div>
            </div>
            <div className={styles.row}>
                <div className={styles.payment_item}>
                    <Radio
                        disabled={true}
                        name='payment'
                        label={
                            <span style={stylePaymentBase}><span style={stylePayment}><Image src={'/icon/card.svg'} width={20} height={20} alt='' /></span>
                                <span style={paymentStyle1}>Cardit / Debit Card</span></span>}></Radio>
                </div>
                <div className={styles.payment_item}>
                    <Radio
                        checked={type === PaymentOptions.paypal}
                        name='payment'
                        label={
                            <span style={stylePaymentBase}><span style={stylePayment}><Image src={'/icon/paypal-p.svg'} width={20} height={20} alt='' /></span>
                                <span style={paymentStyle1}>Paypal</span></span>}></Radio>
                </div>
            </div>
        </div>
    )
}
