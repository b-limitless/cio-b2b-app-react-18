import React from 'react';
import styles from './first.section.module.scss';
import Button, { EButtonVariant } from '@/components/buttons/Button';
import Image from 'next/image';
import { authDomain } from '@/config/urls';


export default function First() {
    return (
        <section className={styles.main__section}>
            <div className={styles.contents}>

                <h1 className={styles.welcome}>
                    Welcome to ensemble crafts! We empower businesses to create unique.
                </h1>
                <p className={styles.description}>
                    We offers a comprehensive solution for businesses seeking to streamline their customization process. Our platform is designed to simplify every step, from uploading product designs to managing customer orders.
                </p>

                <div className={styles.actions}>
                    <a href={authDomain.signup} target='_blank'>
                        <Button variant={EButtonVariant.Primary} text='Start trial' />
                    </a>

                    <Button variant={EButtonVariant.Third} text='Learn more' />
                </div>

            </div>
            <div className={styles.banners}>
                <Image layout='responsive' src='/svg/banner.svg' width={732} height={536} alt='' />
            </div>
        </section>
    )
}
