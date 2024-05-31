import React, { useRef } from 'react';
import styles from './fifth.module.scss';
import Image from 'next/image';
import useAnimateContent from '@/hooks/useAnimateContent';

export default function Fifth() {

    const refOne = useRef(null);
    const refTwo = useRef(null);

    const animations = ['zoom-zero-to-intial 1s forwards', 'zoom-large-to-intial 1s forwards'];

    useAnimateContent({ refs: [refOne, refTwo], animations });

    


    return (
        <section className={styles.section__5}>
            <div className={styles.col} ref={refOne}>
                <Image className={styles.img} layout='responsive' src='/svg/fifth-section-banner.svg' width={852} height={512} alt='' />
            </div>
            <div className={styles.col} ref={refTwo}>
                <h2>
                    Effortless Order Completion
                </h2>
                <p>With ensemble crafts, placing orders for custom products is easier than ever. Our intuitive platform guides you through the entire process, from selecting products to completing your order.</p>
                <p>Customize measurements, select fabric textures, and choose design options with confidence, knowing that our platform ensures accuracy and precision at every step.</p>
            </div>
        </section>
    )
}
