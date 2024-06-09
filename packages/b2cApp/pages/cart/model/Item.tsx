import React from 'react';
import styles from './model.module.scss';
interface IRow {
    title: string;
    value: string;
}

const Item = ({ title, value }: IRow) => {
    return <div className={styles.item}>
        <span className={styles.title}>
            {title}
        </span>

        <span className={styles.value}>
            {value}
        </span>
    </div>;
}

export default Item;