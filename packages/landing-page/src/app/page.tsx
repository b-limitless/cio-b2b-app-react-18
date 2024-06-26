'use client';

import Button from '@/components/buttons';
import { EButtonVariant } from '@/components/buttons/Button';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import styles from './header.module.scss';
import Eight from './sections/eight/eight';
import Fifth from './sections/fifth/fifth';
import First from './sections/first/First';
import Footer from './sections/footer/footer';
import Forth from './sections/forth/forth';
import Second from './sections/second/second';
import Seventh from './sections/seventh/seventh';
import Sixth from './sections/sixth/sixth';
import Third from './sections/third/third';
import { authDomain, productionBaseDomain } from '@/config/urls';

// 
function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileMenuCheckBoxChecked, setMobileMenuCheckBoxChecked] = useState(false);

  return (
    <div className={styles.container}>

      {/* <Cookie/> */}
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu} />

      <div className={styles.header__first__sec}>
        <div className={styles.wrapper}>
          <header>
            <div className={styles.logo}>
              <a href='/'>
              <Image src='/svg/logo.svg' width={'250'} height={'74'} alt='Ensemble Craft' />
              </a>
              
              <div className={styles.humburger__menu}>
                <input

                  hidden type="checkbox" name="" id="humburge-menu" className={styles.input__menu} />
                <label htmlFor="humburge-menu" className={styles.label} onClick={() => setShowMobileMenu((prevState: boolean) => !prevState)}>
                  <a className={styles.humburg + ' ' + styles.active} id='humburge-menu-a'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </label>

              </div>
            </div>
            <nav className={styles.nav}>
              <ul>
                <li>About us</li>
                <li>Pricing</li>
                <li>Contact us</li>
                <li>FAQs</li>
                <li>Services</li>
                <li className={styles.child__menu}>
                  <input
                    hidden
                    className={styles.product__menu} type='checkbox' name='product-menu' id='product-menu' />

                  <label className={styles.label} htmlFor='product-menu'>
                    <span>Products</span>
                    <span>
                      <Image src='/svg/arrow-down.svg' width={16} height={16} alt='' />
                    </span>
                  </label>

                  <span className={styles.sub__menu}>
                    <ul>
                      <li>Product one</li>
                      <li>Product two</li>
                      <li>Product three</li>
                    </ul>
                  </span>
                </li>
              </ul>
            </nav>
            <div className={styles.actions}>
              <span><a href={authDomain.signup} target='_blank'>Sign up</a></span>
              <a href={authDomain.signin} target='_blank'>
                <Button variant={EButtonVariant.Secondary} text='Sign In' />
              </a>

            </div>
          </header>
          <First />
        </div>



      </div>

      <Second />
      <Third />
      <Forth />
      <Fifth />
      <Sixth />
      <Seventh />

      <Eight />
      <Footer />

    </div>
  );
}



export default dynamic(() => Promise.resolve(Home), { ssr: false });