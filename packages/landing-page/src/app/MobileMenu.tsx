import React from 'react'
import styles from './mobile-menu.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface IMobileMenu {
    showMobileMenu: boolean;
    setShowMobileMenu: Function;
}
export default function MobileMenu({ setShowMobileMenu, showMobileMenu }: IMobileMenu) {
    return (
        <div className={`${styles.mobile__menu} ${showMobileMenu ? styles.show : styles.hide}`}>

            <div className={styles.row}>
                <label htmlFor="humburge-menu">
                    <span className={styles.circel} onClick={() => setShowMobileMenu(false)}>
                        <Image src='/svg/cross.svg' width={7.5} height={7.5} alt='' />
                    </span>
                </label>
            </div>

            <div className={styles.items}>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link href={'/'}>About Us</Link>
                    </li>

                    <li>
                        <input hidden type="checkbox" name="" id="mobile-product-mobile" className={styles.sub__menu_checkbox} />

                        <label className={styles.label} htmlFor='mobile-product-mobile'>
                            <span className={styles.link}>
                                <span>Product</span>
                                <Image src='/svg/arrow-right.svg' width={'20'} height={'20'} alt='arrow right' />
                            </span>
                        </label>

                        <ul>
                            <li>
                                <Link href={'/'}>Shirt</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Pant</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Suit</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
