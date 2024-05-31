import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import Buttons from '@/components/buttons';
import { EButtonVariant } from '@/components/buttons/Button';

{/* <div className={styles.col + 'get__help'}>
<h3>Company</h3>
<ul>
    <li>About</li>
    <li>News</li>
    <li>Careers</li>
    <li>Legal</li>
</ul>
</div> */}

{/* <Buttons variant={EButtonVariant.Primary} text='Write Us' /> */ }

export default function Footer() {
    const getYear = () => {

        const date = new Date();

        return date.getFullYear();
    }
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.col}>
                    <div className={styles.logo}>
                        <Image src='/svg/logo.svg' width={250} height={74} alt=''></Image>
                        <p>
                            EnsembleCrafts.com revolutionizes the customization process for both B2B and B2C markets, offering a seamless platform for businesses to create unique, tailored products.
                        </p>
                        <div className={styles.social__icons}>
                            <span>
                                <Image src='/svg/twitter.svg' width={25.52} height={25.52} alt=''></Image>

                            </span>
                            <span>
                                <Image src='/svg/linkedin.svg' width={25.52} height={25.52} alt=''></Image>

                            </span>
                            <span>
                                <Image src='/svg/google.svg' width={25.52} height={25.52} alt=''></Image>
                            </span>
                            <span>
                                <Image src='/svg/pintrest.svg' width={25.52} height={25.52} alt=''></Image>
                            </span>

                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.item}>
                        <h3>Get Help</h3>
                        <ul>
                            <li>Order status</li>
                            <li>Privacy Policy</li>
                            <li>Contact Us</li>
                        </ul>



                    </div>
                </div>

                <div className={styles.col}>
                    <div className={styles.item}>
                        <h3>Company</h3>
                        <ul>
                            <li>About</li>
                            <li>News</li>
                            <li>Careers</li>
                            <li>Legal</li>
                        </ul>
                    </div>

                </div>

                <div className={styles.col}>
                    <div className={styles.item + ' ' + styles.get__in}>
                        <h3>Get In Touch</h3>
                        <ul>
                            <li>Sunday-Saturday</li>
                            <li>
                                <span>08:00 AM – 04:00 PM</span>

                            </li>

                            <li>
                                <Image src={'/svg/phone.svg'} width={20} height={20} alt='phone'></Image>
                                <span>+1 246-345-0695</span>

                            </li>
                            <li>

                                <Image src={'/svg/email.svg'} width={20} height={20} alt='phone'></Image>

                                <span>support@ensemblecrafts.com</span>

                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

            <section className={styles.last__section}>
                <span> Copyright © {getYear().toString()} Ensembl Crafts  ALL Right Reserved</span>
            </section>
        </>
    )
}
