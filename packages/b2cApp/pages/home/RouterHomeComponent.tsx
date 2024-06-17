'use client';
import { Button } from 'components/Button';
import Header from 'components/Header/Header';
import { storeID } from 'config/user';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { EProduct, updaetModelType } from 'slices/modelTypeSlice';
import { updateStoreIdAction } from 'slices/storeSlice';
import styles from './home.module.scss';
interface IRouterHomeComponent {
    userId:string | string[];
}
function RouterHomeComponent({userId}:IRouterHomeComponent) {
    const dispatch = useDispatch();
    const actionButtonHandler = () => {
        dispatch(updaetModelType(EProduct.shirt));
        dispatch(updateStoreIdAction(storeID));
    }

    return (
        <>
            <div className={styles.page__container}>
                <Header showNavigation userId={userId}/>
                <div className={styles.mid__content}>
                    <div className={styles.col}>
                        <div className={styles.contents}>
                            <div className={styles.heading}>
                                <div className={styles.normal}>
                                    Made to Measure
                                </div>
                                <div className={styles.bold}>
                                    that fit you perfectly
                                </div>
                            </div>
                            <div className={styles.description}>
                                Shirts that fit you perfectly. Choose a custom dress shirt designed by you. Make a statement with a made to measure shirt perfect for any occasions, whether it {'\\'} s business or casual we will tailor the perfect men s dress shirt for you. Buy the best custom dress shirt online.
                            </div>
                            <Link href={`/customize/shirt`}>
                                <Button variant='primary' type='round' onClick={actionButtonHandler}>
                                    <span>Design shirt</span>
                                    <span>
                                        <Image width={7} height={12} src="/icon/arrow-right-bold.svg" alt="" />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <Image src="/img/man.png" alt="" width={300} height={816.5} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default dynamic(() => Promise.resolve(RouterHomeComponent), { ssr: false });
