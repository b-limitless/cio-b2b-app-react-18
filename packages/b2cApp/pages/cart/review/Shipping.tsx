import { IShipping } from 'slices/shippingSlice';
import styles from '../cart.module.scss';

interface IShippingLocal {
    data: IShipping
    setMeasurementJourney:Function | undefined;
}

export default function Shipping({data, setMeasurementJourney}: IShippingLocal) {
    return (
        <div className={styles.shipping}>
            <div className={styles.row}>
                <div className={styles.address}>Shipping Address</div>
            </div>

            <div className={styles.row}>

                <div className={styles.sub_row}>
                    <div className={styles.col}>
                        {data?.firstName} {data?.lastName}
                    </div>

                    <div className={styles.col}>
                        <span className={styles.phone_number}>
                            {data?.countryCode} {data?.phoneNumber}  
                        </span>

                    </div>
                </div>
                <div className={styles.sub_row}>
                    <div className={styles.col}>
                        <span className={styles.shpping_address}>
                        {data.addressLine1} {data.addressLine2} {data?.city} {data?.state}  {data?.country} {data?.postalCode}
                        </span>

                    </div>
                    <div className={styles.col}>
                        <span className={styles.change} onClick={() => setMeasurementJourney ? setMeasurementJourney('shipping') : null
                        }>Change</span>

                    </div>

                </div>
            </div>

        </div>
    )
}
