import { MouseEventHandler } from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import Navigation, { navigationRow } from './Navigation';
import {combinedTypes } from 'types/enums';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { request } from 'utils/request';
import { APIS } from 'config/apis';
import {useRouter } from 'next/router';
import { ICurrentCustomer, setCurrentCustomer } from 'slices/customerSlice';
import Logo from '../../public/icon/logo.svg';


interface HeaderInterface {
    showNavigation?: boolean;
    navigations?: navigationRow[]
    designJourney?: combinedTypes;
    setDesignJourney?: Function;
    userId: string | string[]
}

interface IAuthMenu extends ICurrentCustomer {
    logOutHandler:  MouseEventHandler<HTMLLIElement>;
}

export const AuthMenu = ({logOutHandler, token}: IAuthMenu) => {
    
    return <>
        <input type="radio" name="radio-side-menu" id="clothing" className={styles.radio__side__menu} />
        <label htmlFor="clothing">
            
                <li className={styles.auth__menu}>
                    
                    Hi, {token?.firstName ?? 'Customer'}
                    <div className={styles.menu_wrapper}>
                        <div className={styles.user_menu}>
                            <ul>
                                <li>
                                    <Image src='/icon/order.svg' width={14} height={14} alt='order' />
                                    <span>My Order</span>
                                </li>
                                <li>
                                    <Image src='/icon/payment.svg' width={14} height={14} alt='order' />
                                    <span>Payment</span>
                                </li>
                                <li>

                                    <Image src='/icon/heart.svg' width={14} height={14} alt='order' />

                                    <span>Wish List</span>
                                </li>
                            </ul>
                            <ul>
                                <li onClick={logOutHandler}>
                                    <Image src='/icon/order.svg' width={14} height={14} alt='order' />
                                    <span>Logout</span>

                                </li>
                            </ul>
                        </div>
                    </div>

                </li>
          

        </label>
    </>
}
export default function Header({ userId, showNavigation, navigations, designJourney, setDesignJourney }: HeaderInterface) {

   
    const dispatch = useDispatch();
    const router = useRouter();
    const logOutHandler = async() => {
        try {
            await request({
                url:APIS.customer.signout, 
                method:'post',
                body: {}
            });
            dispatch(setCurrentCustomer(null));
            router.push(`/`);
        } catch(err) {
            throw new Error(`Could not logout customer ${err}`)
        }
    }

    const { token } = useSelector((state: RootState) => state.currentCustomer);
    return (
        <header className={styles.header}>
            <div className={styles.col}>
                <Link href={'/'}>
                <Image
                    src={'/icon/logo.svg'}
                    width={206}
                    height={80}
                    alt='logo'
                />
                {/* <Logo/> */}
                </Link>
                
            </div>
            {showNavigation && navigations && <div className={styles.col}>
                <div className={styles.nav}>
                    <Navigation data={navigations} designJourney={designJourney} setDesignJourney={setDesignJourney} />
                </div>
            </div>}

            <div className={styles.col + ' ' + styles.side__menu}>
                <div className={styles.menu}>
                    <ul>
                        {!token && <><input type="radio" name="radio-side-menu" id="clothing" className={styles.radio__side__menu} />
                            <label htmlFor="clothing">
                                <Link href={'/auth/signin'}>
                                    <li>
                                        Sign in
                                    </li>
                                </Link>

                            </label></>}

                        {token && <AuthMenu logOutHandler={logOutHandler} token={token}/>}

                        
                    </ul>
                </div>
                <div className={styles.icon}>
                    <Link href={`/cart/${userId}`}>
                        <Image
                            src={'/icon/cart.svg'}
                            width={32}
                            height={30.55}
                            alt='cart'
                        ></Image>
                    </Link>

                </div>
            </div>
        </header>
    )
}
