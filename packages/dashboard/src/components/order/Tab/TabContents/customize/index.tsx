import React from 'react';
import { camelCaseToNormal } from "@pasal/cio-component-library";
import { useIsFetching, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchRestOrderDetails } from '../../../../../apis-requests/order/restOrderDetails';
import ArrowDown from '../../../../../assets/svg/arrow-down.svg';
import { queryKeys } from '../../../../../config/queryKeys';
import OrderDetailSkeleton from './OrderDetailsSkleton';
import styles from "./customize.module.scss";
import orderStyles from './order-details.module.scss';

type Props = {
    showModel: string | null;
}

enum EMeasurementType {
    shirtMeasurement = 'shirtMeasurement',
    pantMeasurement = 'pantMeasurement'
}

enum EModelType {
    shirt = 'shirt',
    pant = 'pant',
    suit = 'suit'
}

export default function Customize({ showModel }: Props) {
    const [shouldFetchMeasurement, setShouldFetchMeasurement] = useState(false);
    const [shouldFetchShipping, setShouldFetchShippng] = useState(false);

    const queryClient = useQueryClient();

    const orderDetails: any = queryClient.getQueryData([queryKeys.fetchOrderDetails, showModel]);

    const isFethingOrderDetails = useIsFetching({ queryKey: [queryKeys.fetchOrderDetails] });

    const keyToFetch = orderDetails?.modelType === EModelType.shirt ? EMeasurementType.shirtMeasurement : '';

    const { data: userMeasurement, isLoading: isLoadingMeasurement, error: measurementError } = useQuery(
        {
            queryKey: [queryKeys.fetchMeasurement, shouldFetchMeasurement],
            queryFn: () => {
                if (shouldFetchMeasurement) {
                    return fetchRestOrderDetails(EMeasurementType.shirtMeasurement, orderDetails.cartId);

                }
                if (!shouldFetchMeasurement) {
                    return Promise.resolve(null);
                }
            }
        });


    const { data: userShipping, isLoading: isLoadingShipping, error: shippingError } = useQuery(
        {
            queryKey: [queryKeys.fetchShipping, shouldFetchShipping],
            queryFn: () => {
                if (shouldFetchShipping) {
                    return fetchRestOrderDetails('shippingAddress', orderDetails.cartId);

                }
                if (!shouldFetchShipping) {
                    return Promise.resolve(null);
                }
            }
        });

    const { shippingAddress } = userShipping || { shippingAddress: null };


    const getStyleKeys = () => {
        if (orderDetails) {
            const { model } = orderDetails;
            const keys = Object.keys(model);
            return keys;
        }
        return [];

    }

    const getAccentKeys = () => {
        if (orderDetails) {
            const { accent } = orderDetails;
            const keys = Object.keys(accent);
            return keys;
        }

        return [];

    }

    const getMeasurement = () => {

        if (measurementError) {
            return measurementError.toString();
        }
        if (isLoadingMeasurement) {
            return 'Please wait...'
        }
        if (userMeasurement) {
            let keys: any = Object.keys(userMeasurement[keyToFetch]);

            const excludeKeys = ['createdAt', 'updatedAt', 'customerId', 'id'];
            keys = keys.filter((key: string) => !excludeKeys.includes(key));

            return keys.map((key: string, i: number) => <div key={`measurement-${i}`} className={orderStyles.row}>
                <label>{camelCaseToNormal(key)}</label>
                <span>{userMeasurement?.[keyToFetch]?.[key]}</span>
            </div>)
        }

        return [];


    }

    const showMeTexture = (url: string) => {
        window.open(url, '_blank', 'noopener norefereer')
    }

    return (
        <>
            {!isFethingOrderDetails && orderDetails && <div className={styles.customize}>
                <div className={orderStyles.product__section}>
                    <h3>Style</h3>
                    <ul id="more__details">
                        {getStyleKeys().map((key, i) => <li key={`model-${i}`}>
                            <span className={`shirt-icon ${orderDetails?.model[key].iconClass}`}></span>
                            <span className={orderStyles.label}>
                                {orderDetails?.model[key]?.label}
                            </span>
                        </li>)}
                    </ul>
                </div>
                <div className={orderStyles.product__section}>
                    <h3>Accent</h3>
                    <ul id="accent-details">
                        {getAccentKeys().map((key, i) => <li key={`model-${i}`}>
                            <span className={orderStyles.group} onClick={() => showMeTexture(orderDetails?.accent[key]?.febric)}>
                                <span className={`shirt-icon ${orderDetails?.accent[key]?.iconClass}`}></span>
                                <span className={orderStyles.key}>{camelCaseToNormal(key).slice(0, 13)}</span>
                                <span className={orderStyles.label}>
                                    {orderDetails?.accent[key]?.label}
                                </span>
                            </span>
                        </li>)}
                    </ul>
                </div>
                <div className={orderStyles.product__section}>
                    <h3 className={orderStyles.undersqure}>
                        <span>
                            <a href={orderDetails?.febric?.originalImageUrl} target='_blank'>Fabric</a>
                        </span></h3>
                </div>
                <div className={orderStyles.product__section}>
                    <h3 className={orderStyles.undersqure}>
                        <span>
                            <a href={orderDetails?.originalImageUrl} target='_blank'>Custimzed Image</a>
                        </span>
                    </h3>
                </div>


                <div className={orderStyles.product__section}>
                    <input className={orderStyles.tab__checkbox} type="checkbox" name="" id="customer" hidden />
                    <h3 className={orderStyles.undersqure}>
                        <label className={orderStyles.label} htmlFor='customer' onClick={() => setShouldFetchMeasurement(true)}>
                            <span>
                                Measurement
                            </span>
                            <span className={orderStyles.tab__icon}>
                                <ArrowDown />
                            </span>
                        </label>
                    </h3>
                    <div className={orderStyles.tab__slidedown}>
                        <div className={orderStyles.content}>
                            {getMeasurement()}
                        </div>
                    </div>
                </div>


                <div className={orderStyles.product__section}>
                    <input className={orderStyles.tab__checkbox} type="checkbox" name="" id="shipping" hidden />
                    <h3 className={orderStyles.undersqure}>
                        <label className={orderStyles.label} htmlFor='shipping' onClick={() => setShouldFetchShippng(true)}>
                            <span>
                                Shipping
                            </span>
                            <span className={orderStyles.tab__icon}>
                                <ArrowDown />
                            </span>
                        </label>
                    </h3>
                    <div className={orderStyles.tab__slidedown}>
                        <div className={orderStyles.content}>
                            {isLoadingShipping && <div>Please wait...</div>}
                            {!isLoadingShipping && <div className={orderStyles.row}>
                                <div className={orderStyles.sub_row}>
                                    <div className={orderStyles.col}>
                                        {shippingAddress?.firstName} {shippingAddress?.lastName}
                                    </div>
                                    <div className={orderStyles.col}>
                                        <span className={orderStyles.phone_number}>
                                            {shippingAddress?.countryCode} {shippingAddress?.phoneNumber}
                                        </span>
                                    </div>
                                </div>
                                <div className={orderStyles.sub_row}>
                                    <div className={orderStyles.col}>
                                        <span className={orderStyles.shpping_address}>
                                            {shippingAddress?.addressLine1} {shippingAddress?.addressLine2} {shippingAddress?.city} {shippingAddress?.state} {shippingAddress?.country} {shippingAddress?.postalCode}
                                        </span>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>}
            {isFethingOrderDetails === 1 && <OrderDetailSkeleton />}
        </>

    )
}