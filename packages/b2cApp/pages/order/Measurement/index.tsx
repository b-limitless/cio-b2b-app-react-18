'use client';
import { Button } from 'components/Button';
import Loader from 'components/Loader';
import { IShirtMeasurement } from 'interface/IShirtMeasurement';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { IMeasurementForm } from 'types/common.interface';
import styles from './measurement.module.scss';
import BaseProductMeasurementForm from './product/base';
import ProductShirt from './product/shirt';




export default function Measurement({fetching, measurementJourney, setMeasurementJourney, nextStageHandler, onChangeHandler, onMouseLeaveEventHandler }: IMeasurementForm) {
    const { data, errors } = useSelector((state: RootState) => state.measurment);

    const baseMeasurementForm = useMemo(() => {
        const { firstName, lastName, age, weight, inch, unite, height } = data;
        return { firstName, lastName, height, age, weight, inch, unite };
    }, [data]);

    const shirtMeasurementForm = useMemo(() => {
        const { firstName, lastName, age, weight, unite, height, inch, ...rest } = data;

        return { ...rest } as IShirtMeasurement;
    }, [data]);

    const errorMeasurement = useMemo(() => {
        const { firstName, lastName, age, weight, unite, height, inch, ...rest } = errors;
        return { ...rest } as IShirtMeasurement;
    }, [errors]);



    return (
        <div className={styles.measurement__container}>

            <div className={styles.measurement__form}>
                {fetching && <Loader/>}
               
               {!fetching && <>
                    <div className={styles.title}>
                        and now, let{'\''}s measure!
                    </div>
                    <p className={styles.description}>
                        We are going to create your body measurements profile. All we need is some basic information.
                    </p>
                    <div className={styles.form__group}>
                        <BaseProductMeasurementForm
                            onChangeHandler={onChangeHandler ? onChangeHandler : () => { }}
                            formData={baseMeasurementForm}
                            errors={errors}
                            onMouseLeaveEventHandler={onMouseLeaveEventHandler}
                        />
                        <ProductShirt
                            measurement={shirtMeasurementForm}
                            errors={errorMeasurement}
                            onMouseLeaveEventHandler={onMouseLeaveEventHandler}
                            onChangeHandler={onChangeHandler ? onChangeHandler : () => { }}
                        />
                    </div>

                    <div className={styles.actions}>
                        <Button variant='primary' type='square' onClick={() => nextStageHandler()}>
                            Next
                        </Button>
                    </div>
                </>} 
            </div>


            {/* <div className={styles.video__guide}>
                <Image src='/img/video.png' width={1190} height={670} alt='' />
            </div> */}
            {/* <div className={styles.time__tape}>
                <div className={styles.col}>
                    <Image src='/icon/time.svg' width={60} height={60} alt='time' />
                    <span className={styles.sub}>Are you in a hurry?</span>
                    <span className={styles.uppercase}>
                        COMPLETE YOUR ORDER
                    </span>
                    <span className={styles.rest}>
                        and take your measurements later
                    </span>
                </div>
                <div className={styles.col}>
                    <Image src='/icon/time.svg' width={60} height={60} alt='time' />
                    <span className={styles.sub}>Are you in a hurry?</span>
                    <span className={styles.uppercase}>
                        COMPLETE YOUR ORDER
                    </span>
                    <span className={styles.rest}>
                        and take your measurements later
                    </span>
                </div>
            </div> */}
        </div>
    )
}
