import React from 'react';
import Image from 'next/image';
import styles from './eight.module.scss';

export default function Eight() {
    return (
        <section className={styles.section__8}>
            <div className={styles.options}>
                <div className={styles.row}>
                    <h2>Secure Payment Options</h2>
                    <p>At ensemble crafts, we offer a variety of secure payment methods to ensure a hassle-free checkout experience for businesses.</p>

                </div>

                <div className={styles.row}>
                    <div className={styles.payments}>
                        <Image layout='responsive' src={'/svg/ssl.svg'} width={92} height={92} alt='' />
                        <Image layout='responsive' src={'/svg/paypal.svg'} width={92} height={92} alt='' />
                        <Image layout='responsive' src={'/svg/visa.svg'} width={92} height={92} alt='' />
                        <Image layout='responsive' src={'/svg/mastercard.svg'} width={92} height={92} alt='' />
                    </div>
                </div>

            </div>
        </section>
    )
}
