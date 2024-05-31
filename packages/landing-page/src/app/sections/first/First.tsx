import React from 'react';
import styles from './first.section.module.scss';
import Button, { EButtonVariant } from '@/components/buttons/Button';
import Image from 'next/image';


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
                    <Button variant={EButtonVariant.Primary} text='Start trial' />
                    <Button variant={EButtonVariant.Third} text='Learn more' />
                </div>

            </div>
            <div className={styles.banners}>
                <Image  layout='responsive' src='/svg/banner.svg' width={732} height={536} alt=''/>
              
              
                {/* <Image src='/svg/shirt.svg' width={402} height={536} alt='' className={styles.shirt}/>
                <Image src='/svg/collars.svg' width={175} height={135} alt='' className={styles.collars + ' ' + styles.abs}/>
                <Image src='/svg/collars.svg' width={153} height={122} alt='' className={styles.cuffs + ' ' + styles.abs}/>
                <Image src='/svg/checkpost.svg' width={149} height={85} alt=''  className={styles.chestpocket + ' ' + styles.abs}/>
                <Image src='/svg/contrasted-collar.svg' width={179} height={92} alt='' className={styles.contrasted__collar + ' ' + styles.abs}/>
                <Image src='/svg/contrasted-cuff.svg' width={175} height={93} alt='' className={styles.contrasted__cuff + ' ' + styles.abs}/>
                <Image src='/svg/buttons-colors.svg' width={131.36} height={85} alt='' className={styles.contrasted__colors + ' ' + styles.abs}/>
                
                {/* <Image src='/svg/contrasted-button-whole.svg' width={131.36} height={85} alt='' className={styles.button__wholes + ' ' + styles.abs}/> */} 

            </div>
        </section>
    )
}
