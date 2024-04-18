import React from 'react';
import { camelCaseToNormal } from "@pasal/cio-component-library";
import { useIsFetching, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchRestOrderDetails } from '../../../../../apis-requests/order/restOrderDetails';
import ArrowDown from '../../../../../assets/svg/arrow-down.svg';
import { queryKeys } from '../../../../../config/queryKeys';
import OrderDetailSkeleton from './OrderDetailsSkleton';
import styles from "./customize.module.scss";
import './order-details.scss';
type Props = {
    showModel: string | null;
}

const measurement: any = {
    verified: false,
    firstName: 'Bharat',
    lastName: 'Sure',
    height: 170,
    inch: 1,
    weight: 75,
    age: 35,
    unite: 'feet',
    email: 'bharatrose11@gmail.com',
    createdAt: '2024-04-10T15:09:51.887Z',
    updatedAt: '2024-04-10T15:09:51.887Z',
    id: '65cb626b1129f065cc5e8d17',
    sleevLength: 12,
    shoulderWidth: 12,
    chestAround: 12,
    stomach: 12,
    bicepAround: 12,
    torsoLength: 12,
    hips: 1233,
    wrist: 12,
    neck: 12
};

export default function Customize({ showModel }: Props) {
    const [shouldFetchMeasurement, setShouldFetchMeasurement] = useState(false);
    const [shouldFetchShipping, setShouldFetchShippng] = useState(false);

    const queryClient = useQueryClient();

    const orderDetails: any = queryClient.getQueryData([queryKeys.fetchOrderDetails, showModel]);

    const isFethingOrderDetails = useIsFetching({ queryKey: [queryKeys.fetchOrderDetails] });

    // Scale your model type base on this
    const keyToFetch = orderDetails?.modelType === 'shirt' ? 'shirtMeasurement' : '';

    const { data: userMeasurement, isLoading: isLoadingMeasurement, error: measurementError } = useQuery(
        {
            queryKey: [queryKeys.fetchMeasurement, shouldFetchMeasurement],
            queryFn: () => {
                if (shouldFetchMeasurement) {
                    return fetchRestOrderDetails('shirtMeasurement', orderDetails.cartId);

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
            return measurement.toString();
        }
        if (isLoadingMeasurement) {
            return 'Please wait...'
        }
        if (userMeasurement) {
            let keys: any = Object.keys(userMeasurement[keyToFetch]);

            const excludeKeys = ['createdAt', 'updatedAt', 'customerId', 'id'];
            keys = keys.filter((key: string) => !excludeKeys.includes(key));

            return keys.map((key: string, i: number) => <div key={`measurement-${i}`} className="row">
                <label>{camelCaseToNormal(key)}</label>
                <span>{measurement[key]}</span>
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
                <div className="product__section">
                    <h3>Style</h3>
                    <ul id="more__details">
                        {getStyleKeys().map((key, i) => <li key={`model-${i}`}>
                            <span className={`shirt-icon ${orderDetails?.model[key].iconClass}`}></span>
                            <span className="label">
                                {orderDetails?.model[key]?.label}
                            </span>
                        </li>)}
                    </ul>
                </div>
                <div className="product__section">
                    <h3>Accent</h3>
                    <ul id="accent-details">
                        {getAccentKeys().map((key, i) => <li key={`model-${i}`}>
                            <span className='group' onClick={() => showMeTexture(orderDetails?.accent[key]?.febric)}>
                                <span className={`shirt-icon ${orderDetails?.accent[key]?.iconClass}`}></span>
                                <span className='key'>{camelCaseToNormal(key).slice(0, 13)}</span>
                                <span className="label">
                                    {orderDetails?.accent[key]?.label}
                                </span>
                            </span>
                        </li>)}
                    </ul>
                </div>
                <div className="product__section">
                    <h3 className="undersqure">
                        <span>
                            <a href={orderDetails?.febric?.originalImageUrl} target='_blank'>Fabric</a>
                        </span></h3>
                </div>
                <div className="product__section">
                    <h3 className="undersqure">
                        <span>
                            <a href={orderDetails?.originalImageUrl} target='_blank'>Custimzed Image</a>
                        </span>
                    </h3>
                </div>
                <div className="product__section">
                    <input className="tab__checkbox" type="checkbox" name="" id="customer" hidden />
                    <h3 className="undersqure">
                        <label className='label' htmlFor='customer' onClick={() => setShouldFetchMeasurement(true)}>
                            <span>
                                Measurement
                            </span>
                            <span className='tab__icon'>
                                <ArrowDown />
                            </span>
                        </label>
                    </h3>
                    <div className='tab__slidedown'>
                        <div className="content">
                            {getMeasurement()}
                        </div>
                    </div>
                </div>
                <div className="product__section">
                    <input className="tab__checkbox" type="checkbox" name="" id="shipping" hidden />
                    <h3 className="undersqure">
                        <label className='label' htmlFor='shipping' onClick={() => setShouldFetchShippng(true)}>
                            <span>
                                Shipping
                            </span>
                            <span className='tab__icon'>
                                <ArrowDown />
                            </span>
                        </label>
                    </h3>
                    <div className='tab__slidedown'>
                        <div className="content">
                            {isLoadingShipping && <div>Please wait...</div>}
                            {!isLoadingShipping && <div className="row">
                                <div className="sub_row">
                                    <div className="col">
                                        {shippingAddress?.firstName} {shippingAddress?.lastName}
                                    </div>
                                    <div className="col">
                                        <span className="phone_number">
                                            {shippingAddress?.countryCode} {shippingAddress?.phoneNumber}
                                        </span>
                                    </div>
                                </div>
                                <div className="sub_row">
                                    <div className="col">
                                        <span className="shpping_address">
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