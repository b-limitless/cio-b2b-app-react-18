import React from 'react';
import styles from './seventh.module.scss';
import Image from 'next/image';

export default function Seventh() {
    return (
        <section className={styles.section__7}>
            <div className={styles.col}>
                <Image layout='responsive' src='/svg/seventh-section-banner.svg' width={900} height={670} alt='' />
            </div>
            <div className={styles.col}>
                <h2>
                    Streamlined Customer Journey
                </h2>
                <p>

                </p>
                <ul>
                    <li>

                        <Image src='/svg/arrow.svg' width={16} height={16} alt='' />
                        <span>
                            Effortless Order Completion:  Seamless and intuitive platform Guided process from selection to checkout

                        </span>
                    </li>

                    <li>

                        <Image src='/svg/arrow.svg' width={16} height={16} alt='' />
                        <span>
                            Customization Made Easy: Customize measurements Select fabric textures Choose design options with confidence
                        </span>
                    </li>

                    <li>

                        <Image src='/svg/arrow.svg' width={16} height={16} alt='' />
                        <span>
                            Accuracy and Precision: Platform ensures accuracy Precision guaranteed at every step
                        </span>
                    </li>

                   


                </ul>

            </div>
        </section>
    )
}
