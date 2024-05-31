/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from './second.module.scss';
import { useEffect, useRef } from 'react';
import { CreateObserver } from '@/functions/observer';
import useAnimateContent from '@/hooks/useAnimateContent';



// The paramaters that we can pass can be following
// from right left up and down, fadded from zero pixel to its actual height
export default function Second() {

  const refOne = useRef(null);
  const refTwo = useRef(null);

//   useEffect(() => {
    
//     const lToRAnimation = 'slide-in-left-to-right 1s forwards';
//     const rToLAnimation = 'slide-in-right-to-left 1s forwards';

//     const observer =  CreateObserver(lToRAnimation);
//     const observer1 = CreateObserver(rToLAnimation);
   
//     if(refOne.current) {
//         observer.observe(refOne.current);
//     }

//     if(refTwo.current) {
//         observer1.observe(refTwo.current);
//     }

//     return () => {
//         if(refOne.current) {
//             observer.unobserve(refOne.current);
//         }

//         if(refTwo.current) {
//             observer1.unobserve(refTwo.current);
//         }
//     }
//   }, [])

 const animations = ['slide-in-left-to-right 1s forwards', 'slide-in-right-to-left 1s forwards']; 


     useAnimateContent({refs: [refOne, refTwo], animations});
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

// first-section-banner.svg
// forth-section.banner.svg
// fifth-section-banner.svg
// sixth-section-banner.svg
// seventh-section-banner.svg
// ssl.svg
// paypal.svg
// visa.svg
