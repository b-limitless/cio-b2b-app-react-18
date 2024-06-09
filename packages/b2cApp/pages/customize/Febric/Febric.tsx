import Image from 'next/image';
import React from 'react';
import styles from './febric.module.scss';
import { FebricAttrs } from 'slices/febricsSlice';

interface FebricInterface {
    setShowFebricDetailsModel: Function;
    febric: FebricAttrs,
    // febricImageURI: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    [x:string]:any; 
    index:number;
    
}

export default function Febric({ setShowFebricDetailsModel, onClick, index, febric}: FebricInterface) {
    return (
        <>
            <div className={styles.febric} onClick={(e:any) => onClick(e)}>
                <div className={styles.img}>
                    <Image alt='' src={febric?.thumbnailImageUrl} width={140} height={103} className={styles.febric_thumb} ></Image>

                    <Image src={'/icon/search.svg'} className={styles.search__icon} width={14} height={14} alt='search' onClick={(e:any) => {
                        e.stopPropagation();
                        setShowFebricDetailsModel(febric.id)
                    }}></Image>

                    {/* <span className={styles.feature}>
                        NEW
                    </span> */}
                </div>
                <div className={styles.short__description}>
                    <div className={styles.col}>
                        <div className={styles.name}>
                            {febric?.title}
                        </div>
                        <div className={styles.type}>
                            <span className={styles.fade}>
                                {febric?.material} -
                            </span>
                            <div className={styles.bold}>
                                 {febric?.weave}
                            </div>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.price}>
                            ${febric?.price}
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
