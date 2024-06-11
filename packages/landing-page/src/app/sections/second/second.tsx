/* eslint-disable react/no-unescaped-entities */
import useAnimateContent from '@/hooks/useAnimateContent';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './second.module.scss';

// The paramaters that we can pass can be following
// from right left up and down, fadded from zero pixel to its actual height
export default function Second() {

    const refOne = useRef(null);
    const refTwo = useRef(null);

    const animations = ['slide-in-left-to-right 1s forwards', 'slide-in-right-to-left 1s forwards'];

    useAnimateContent({ refs: [refOne, refTwo], animations });
    return (
        <>
            <section className={styles.section__2}>
                <div className={styles.col} ref={refOne}>
                    <Image
                        src='/svg/first-section-banner.svg'
                        width={568}
                        height={531}
                        alt='first banner'
                        layout='responsive'
                    />
                </div>
                <div className={styles.col} ref={refTwo}>
                    <h2>Streamline Your Customization Process with ensemble crafts</h2>
                    <p>TailorTech offers a comprehensive solution for businesses seeking to streamline their customization process. Our platform is designed to simplify every step, from uploading product designs to managing customer orders. With TailorTech, you can save time, reduce costs, and deliver exceptional custom products to your customers."Text</p>
                </div>
            </section>
        </>

    )
}
