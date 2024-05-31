/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from './sixth.module.scss';
import Image from 'next/image';
import Buttons from '@/components/buttons';
import { EButtonVariant } from '@/components/buttons/Button';
export default function Sixth() {
  return (
    <section className={styles.section__6}>
         <div className={styles.col}>
                    <h2>
                        Seamless Integration with Exceptional Customer Support
                    </h2>
                    <p>
                        Dedicated integration support team available to assist businesses every step of the way.
                    </p>
                    <p>
                        Personalized guidance tailored to each business's unique integration needs and requirements.
                    </p>
                    <p>
                        Ongoing support and assistance post-integration to address any questions or concerns that may arise.
                    </p>

                    <Buttons variant={EButtonVariant.Primary} text='Start trial'/>
                </div>
                <div className={styles.col}>
                    <Image layout='responsive' src='/svg/sixth-section-banner.svg' width={655} height={655} alt='' />

                </div>
               
            </section>
  )
}
