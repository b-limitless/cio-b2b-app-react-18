import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import styles from '../febric.module.scss'; // Adjust yourStyles with the actual module or inline styles

export default function FebricLoader() {
    return (
        <>
            <div className={styles.febric}>
                <div className={styles.img}>
                    <Skeleton variant="rectangular" width={140} height={103} />

                    <Skeleton variant="circular" width={14} height={14} className={styles.search__icon} />

                    <span className={styles.feature}>
                        <Skeleton width={30} />
                    </span>
                </div>
                <div className={styles.short__description}>
                    <div className={styles.col}>
                        <div className={styles.name}>
                            <Skeleton width={100} />
                        </div>
                        <div className={styles.type}>
                            <span className={styles.fade}>
                                <Skeleton width={60} />
                            </span>
                            <div className={styles.bold}>
                                <Skeleton width={80} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
