import React from 'react'
import FormTemplate from '../template/form';
import Image from 'next/image';
import { Button } from 'components/Button';
import styles from './completed.module.scss';
import { OrderCommonInterface } from 'types/common.interface';
import Link from 'next/link';
import { OrderProcess } from 'types/enums';

export default function OrderCompleted({ measurementJourney, setMeasurementJourney, nextStageHandler }: OrderCommonInterface) {
    const getStatusString = () => {
        if(measurementJourney === OrderProcess.order_completed) {
            return 'Your order is completed';
        }

        if(measurementJourney === OrderProcess.order_canceled) {
            return 'Your order is canceled';
        }
    }

    const getStatusIcon = () => {
        if(measurementJourney === OrderProcess.order_completed) {
            return '/right-green.svg';
        }

        if(measurementJourney === OrderProcess.order_canceled) {
            return '/canceled.svg';
        }
    }
    
    return (
        <FormTemplate>
            <div className={styles.order__completed}>
                <div className={styles.group}>
                    <Image src={`/icon/${getStatusIcon()}`} width={100} height={100} alt='success'></Image>

                    <p className={styles.your__order}>
                        {getStatusString()}
                    </p>
                    <p className={styles.confirmation}>
                        You will be receiving confirmation email
                    </p>

                </div>

                <Link href='/'>
                    <Button variant='primary' type='square'>
                        explore more
                    </Button>
                </Link>



            </div>
        </FormTemplate>
    )
}
