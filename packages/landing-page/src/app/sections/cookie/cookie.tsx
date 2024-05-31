import React from 'react';
import styles from  './cookie.module.scss';
import Image from 'next/image';
import Buttons from '@/components/buttons';
import { EButtonVariant } from '@/components/buttons/Button';

export default function Cookie() {
  return (
    <div className={styles.cookies}>
        
            <div className={styles.col}>
                <Image src='/svg/cookie.svg' width={214} height={290} alt=''/>
            </div>
            <div className={styles.col}>
                <h2>We use cookies</h2>
                <p>
                We want to ensure that we give you the best experience on our website. you can choose not to allow some types of cookies at any point.
                </p>
                <p>We respect your privacy, here’s how.</p>

                <div className={styles.buttons}>
                    <Buttons variant={EButtonVariant.Primary} text='Accept'/>
                    <Buttons variant={EButtonVariant.Third} text='Decline'/>
                </div>


            </div>
        
    </div>
  )
}
