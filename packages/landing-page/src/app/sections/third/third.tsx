import React, { useRef } from 'react';
import styles from './third.module.scss';
import useAnimateContent from '@/hooks/useAnimateContent';

export default function Third() {


    const refOne = useRef(null);
    const refTwo = useRef(null);

    const animations = ['slide-in-down-to-up 1s forwards', 'slide-in-up-to-down 1s forwards'];

    useAnimateContent({ refs: [refOne, refTwo], animations });

    return (
        <section className={styles.section__3}>
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    <h3>How its helps the customers</h3>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.items} ref={refOne}>

                            <div className={styles.item}>
                                <div className={styles.title}>
                                    Tailored Experience
                                </div>
                                <div className={styles.value}>
                                    Customers can tailor products to their specific preferences, ensuring a personalized and unique experience.
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title}>
                                    Quality Assurance
                                </div>
                                <div className={styles.value}>
                                    By providing detailed information about each customization option, including fabric types and design details, customers can make informed decisions and trust in the quality of the final product.                            </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title}>
                                    Increased Engagement
                                </div>
                                <div className={styles.value}>
                                    Provides customers with the freedom to choose from a variety of options, such as fabric textures, collar styles, cuff designs, etc., allowing them to create a                            </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title}>
                                    Customization Freedom
                                </div>
                                <div className={styles.value}>
                                    Provides customers with the freedom to choose from a variety of options, such as fabric textures, collar styles, cuff designs, etc., allowing them to create a product that reflects their individual style.
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title}>
                                    Enhanced Satisfaction
                                </div>
                                <div className={styles.value}>
                                    Customized products often lead to higher satisfaction levels as customers receive items tailored specifically to their preferences and needs.

                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title}>
                                    Visual Representation
                                </div>
                                <div className={styles.value}>
                                    Real-time visualization allows customers to see how their customizations will look before making a purchase, reducing the risk of dissatisfaction and increasing confidence in their choices.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
