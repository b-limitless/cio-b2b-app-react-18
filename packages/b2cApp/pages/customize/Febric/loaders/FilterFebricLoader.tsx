import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import styles from '../febric.module.scss'; // Adjust yourStyles with the actual module or inline styles

export default function FilterFebricLoader() {
    return (
        <>
            <div className={styles.febric} style={{display:'flex'}}>

                {/* <Skeleton width={14} height={10} className={styles.filter__icon} />  */}

                <div className={styles.text}>
                    <span className={styles.febric}>
                        <Skeleton width={80} />
                    </span>
                    {/* <span className={styles.count}>
                        <Skeleton width={100} />
                    </span> */}
                </div>
            </div>
        </>
    );
}