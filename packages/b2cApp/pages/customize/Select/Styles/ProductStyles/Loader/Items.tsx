import { Fragment, forwardRef } from "react";
import styles from '../../styles.module.scss';
import { Skeleton } from "@mui/material";

function Items() {
    return (<Fragment>
        <span className={`${styles.col}`}>
            <Skeleton width={60} height={60} className={styles.item}></Skeleton>
            <span className={styles.style__name}>
                <Skeleton width={40} height={15} className={styles.item}></Skeleton>
            </span>
        </span>

    </Fragment>
    )
}


export default forwardRef(Items);