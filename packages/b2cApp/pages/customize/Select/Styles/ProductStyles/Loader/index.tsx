'use client';
import { Skeleton } from '@mui/material';
import styles from '../../styles.module.scss';
import Items from './Items';
export interface LoaderProduct   {
    childrens: any[];
  }
export default function ProductStyles({  childrens,  }: LoaderProduct) {
    return (
        <div className={styles.row}>
            <div className={styles.title}>
                <Skeleton variant='text' height={18} width={40}/>
            </div>
            <div className={styles.items}>
                {childrens && childrens.map((children: any, i: number) => <Items key={i}/>)}
                { }
            </div>
        </div>
    )
}
