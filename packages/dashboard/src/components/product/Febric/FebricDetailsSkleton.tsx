import React from 'react';
import styles from './details.module.scss';
import { Skeleton } from '@mui/material';
const countData = new Array(8).fill(0);
export default function FebricDetailsSkeleton() {
    return (
        <div className={styles.container}>
            <div className={styles.productDetails}>
                <Skeleton variant='text' width={200} height={36} />
                <div className={styles.details}>
                    {countData.map((item, i) => <div key={i} className={styles.detail}>
                        <Skeleton variant='text' width={100} height={18} />
                        <Skeleton variant='text' width={100} height={18} />
                    </div>)}
                    <div className={styles.detail}>
                        <Skeleton variant='text' width={100} height={18} />
                        <div className={styles.composition}>
                            {countData.map((item, i) => <div key={i} className={styles.compositionItem}>
                                <Skeleton variant='text' width={100} height={18} />
                                <Skeleton variant='text' width={100} height={18} />
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}