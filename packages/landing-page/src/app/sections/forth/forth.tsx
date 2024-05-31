import React, { useRef } from 'react'
import styles from './forth.module.scss';
import Image from 'next/image';
import useAnimateContent from '@/hooks/useAnimateContent';
export default function Forth() {
  const refOne = useRef(null);
  const refTwo = useRef(null);


  const animations = ['slide-in-down-to-up 1s forwards', 'slide-in-up-to-down 1s forwards'];


  useAnimateContent({ refs: [refOne, refTwo], animations });

  return (
    <section className={styles.section__4}>
      <div className={styles.col} ref={refTwo}>
        <h2>Effortless Texture Management with TailorTech Dashboard</h2>
        <p>Introduce the dashboard feature that allows businesses to manage textures for their products effectively.</p>
        <p>Highlight the benefits of this feature, such as centralized control, easy organization, and seamless integration with the customization process.</p>
      </div>
      <div className={styles.col} ref={refOne}>
        <Image layout='responsive' src='/svg/forth-section-banner.svg' width={808} height={574} alt='forth section' />
      </div>
    </section>

  )
}
