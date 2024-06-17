/**
 *   Attention required
     Load all component lazy so that build First Load JS can be smaller 
 * This component will basically take the information which is store in the redux store
 * along with different infomration such as carts items, userAndShirtMeasurement authenticated token
 * For now we do not have authenticated system for this app since we are under process of developing
 * This component is classified in different parts
 * 
 * 1. Measurement
 * 2. Shipping
 * 3. Payment Options 
 * 4. Order completed
 * 
 * 1. Measurement
 *    Will colleted the information about the userAndShirtMeasurement measurement check the interface
 * 2. Shipping
 *    Will contain information about the shipping details and billing information
 * 3. Payment
 *    Payment options we are integration for now paypal because intially it is avaialable in wide range of country
 *    Creadit cart payment system would need to discuss more further
 * 4. Finally order completed screen
 * 
 * State Management
 * Using local state management in this component because we are not using this information in any other router except this
 * Perhaps this is the last component in this userAndShirtMeasurement purchasing journey therefore we already have other information from cart, customized route
 * Which is stored in redux store and we can access then in this component if needed
 * **/
import Header from 'components/Header/Header';
import { measurementNavigation } from 'config/product';
import { camelCaseToNormal } from 'functions/camelCaseToNormal';
import { isThereAnyError } from 'functions/isThereAnyError';
import { nextStage } from 'functions/nextStage';
import { IMeasurementBase } from 'interface/IMeasurementBase';
import { IPantMeasurement } from 'interface/IPantMeasurement';
import { IShirtMeasurement } from 'interface/IShirtMeasurement';
import { shippingModel } from 'model/shipping';
import { userAndShirtMeasurement } from 'model/user';

import useIsCustomerAuthenticated from 'hooks/useIsCustomerAuthenticated';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingUserShirtMeasurementAction, updateErrors, updateMeasurementAction, updateMeasurementErrorAction } from 'slices/measurmentSlice';
import { IShipping, updatePartiallyAction, updateShippingAction, updateShippingErrorAction, updateShippingWholeError } from 'slices/shippingSlice';
import { RootState } from 'store';
import { OrderProcess, combinedTypes } from 'types/enums';
import OrderCompleted from './Completed';
import Measurement from './Measurement';
import Payment from './Payment';
import Shipping from './Shipping';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { fetchCustomerMeasurementShirt } from 'actions/fetchCustomerMeasurementShirt.action';
import { fetchCustomerShipping } from 'actions/fetchCustomerShipping.action';
import { APIS, customer, shipping as shippingAPI } from 'config/apis';
import { useEffect, useState } from 'react';
import { updatePaymentError } from 'slices/paymentSlice';
import { request } from 'utils/request';
import Review from './Review';
import { ERoute } from 'config/route';
import useDispatchStoreId from 'hooks/useDispatchStoreId';
import useGetStoreId from 'hooks/useGetStoreId';

interface IOrder {
    userId: string | string[]
}
export default function Order({ userId }: IOrder) {
    const [measurementJourney, setMeasurementJourney] = useState<OrderProcess>(OrderProcess.measurement);
    const measurement = useSelector((state: RootState) => state.measurment);
    const shipping = useSelector((state: RootState) => state.shipping);
    const payment = useSelector((state: RootState) => state.payment);
    const { type: selectedPaymentType, error: paymentError } = payment;
    const storeId = useGetStoreId();

    const { token } = useSelector((state: RootState) => state.currentCustomer);

    const { fetching: fetchingMeasurement } = measurement;
    const { fetching: fetchingShipping } = shipping;

    const [selectedCountry, setSelectedCountry] = useState<any>({
        code: 'AE',
        label: 'United Arab Emirates',
        phone: '971',
    });

    // const shipping = useSelector((state: RootState) => state.);

    const [, setShouldMoveToNextStep] = useState<boolean>(false);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const updateMeasurement = async (body: any) => {
        try {
            await request({
                url: APIS.shirt.measurement,
                method: 'post',
                body
            });
        } catch (err) {
            console.log(`Could not update the user shirt measurement ${err}`);
        }
    }

    const updateUserProfile = async (body: any) => {
        try {
            await request({
                url: customer,
                method: 'put',
                body
            });
        } catch (err) {
            console.log(`Could not update the user profile ${err}`);
        }
    }

    const updateUserShipping = async (body: IShipping) => {
        try {
            await request({
                url: shippingAPI,
                method: 'post',
                body
            });
        } catch (err) {
            console.log(`Could not update the user profile ${err}`);
        }
    }

    const nextStageHandler = async () => {

        // Need to validate the form if all of them are filled then only move to the next step
        if (measurementJourney === OrderProcess.measurement) {
            // Make sure that the form is filled
            const measurementError: any = {};

            for (const field of Object.keys(userAndShirtMeasurement) as Array<keyof (IShirtMeasurement | IPantMeasurement)>) {
                if (measurement.data.unite === 'cm' && field === 'inch') continue;

                if (!userAndShirtMeasurement[field].test(measurement.data[field] as (any)) || !measurement.data[field]) {
                    measurementError[field] = `${camelCaseToNormal(field)} is required`
                } else {
                    measurementError[field] = null;
                }

            }
            dispatch(updateErrors(measurementError));
            if (!isThereAnyError(measurementError)) {
                nextStage(OrderProcess, measurementJourney, setMeasurementJourney);
                // In this tage make a request to update the user measurment and user profile details
                await updateMeasurement(measurement.data);
                await updateUserProfile(measurement.data);
                setShouldMoveToNextStep(true);
            }


        }

        // If the process is under shipping stage
        if (measurementJourney === OrderProcess.shipping) {
            // Make sure that the form is filled
            const measurementError: any = {};

            for (const field of Object.keys(shippingModel) as Array<keyof (IShipping)>) {

                // @ts-ignore
                if (!shippingModel[field].test(shipping?.data?.[field]) || !shipping?.data?.[field]) {
                    measurementError[field] = `${camelCaseToNormal(field)} is required`
                } else {
                    measurementError[field] = null;
                }

            }
            dispatch(updateShippingWholeError(measurementError));

            if (!isThereAnyError(measurementError)) {
                updateUserShipping(shipping.data);
                nextStage(OrderProcess, measurementJourney, setMeasurementJourney);
                setShouldMoveToNextStep(true);
            }

        }

        if (measurementJourney === OrderProcess.payment_options) {
            if (!selectedPaymentType) {
                dispatch(updatePaymentError('Please select payment method'));
                return;
            }
            if (selectedPaymentType) {
                dispatch(updatePaymentError(null));
                nextStage(OrderProcess, measurementJourney, setMeasurementJourney);
            }

        }

    }

    const measurementOnChangeHandler = (e: any) => {
        const { name, value } = e.target;
        dispatch(updateMeasurementAction({ key: name, value }))

    }

    const onMouseLeaveEventHandlerMeasurement = (name: keyof IMeasurementBase, value: string) => {

        if (!userAndShirtMeasurement[name]?.test(value) || !value) {

            dispatch(updateMeasurementErrorAction({ key: name, value: `${camelCaseToNormal(name, true)} is required` }));
        } else {
            console.log(`${name} ${value} is valid`)
            dispatch(updateMeasurementErrorAction({ key: name, value: null }));
        }
    }

    const onMouseLeaveEventHandlerShipping = (name: keyof IShipping, value: string) => {
        if (!shippingModel[name]?.test(value)) {
 
            dispatch(updateShippingErrorAction({ key: name, value: `${camelCaseToNormal(name, true)} is required` }));
        } else {
            console.log(`${name} is good ${value}`)
            dispatch(updateShippingErrorAction({ key: name, value: null }));
        }
    }

    const onChangeHandlerShipping = (e: any) => {
        const { name, value } = e.target;
        dispatch(updateShippingAction({ key: name, value }))
    }


    const handleOptionChange = (event: any, value: any) => {
        setSelectedCountry(value);
        dispatch(updatePartiallyAction({ countryCode: value?.phone, country: value.label }));
    };

    // Check that if customer is authenticated
    useIsCustomerAuthenticated({
        pathname: `${ERoute.signin}`,
        query: { from: ERoute.order },
    });

    useEffect(() => {
        dispatch(fetchingUserShirtMeasurementAction(true)); 
        dispatch(fetchCustomerMeasurementShirt());
    }, [dispatch]);

    useEffect(() => {
        if (measurementJourney === OrderProcess.shipping) {
            dispatch(fetchCustomerShipping());
        }
    }, [measurementJourney, dispatch]);

    useDispatchStoreId();

  
    
    return (
        <>{token && <>
            <Header navigations={measurementNavigation}
                designJourney={measurementJourney}
                setDesignJourney={setMeasurementJourney}
                showNavigation
                userId={userId}
            />
            {measurementJourney === OrderProcess.measurement &&
                <Measurement
                    measurementJourney={measurementJourney}
                    setMeasurementJourney={setMeasurementJourney}
                    nextStageHandler={nextStageHandler}
                    onChangeHandler={measurementOnChangeHandler}
                    onMouseLeaveEventHandler={onMouseLeaveEventHandlerMeasurement}
                    fetching={fetchingMeasurement}

                />}
            {measurementJourney === OrderProcess.shipping &&
                <Shipping
                    measurementJourney={measurementJourney}
                    setMeasurementJourney={setMeasurementJourney}
                    nextStageHandler={nextStageHandler}
                    shipping={shipping}
                    onMouseLeaveEventHandler={onMouseLeaveEventHandlerShipping}
                    onChangeHandler={onChangeHandlerShipping}
                    handleOptionChange={handleOptionChange}
                    selectedCountry={selectedCountry}
                    fetching={fetchingShipping}

                />}
            {measurementJourney === OrderProcess.payment_options && <Payment
                measurementJourney={measurementJourney}
                setMeasurementJourney={setMeasurementJourney}
                nextStageHandler={nextStageHandler}
                error={paymentError}
            />}

            {measurementJourney === OrderProcess.review && <Review
                measurementJourney={measurementJourney}
                setMeasurementJourney={setMeasurementJourney}
                nextStageHandler={nextStageHandler}
                userId={userId ?? storeId}
                
            />
            }
            {[OrderProcess.order_completed, OrderProcess.order_canceled].includes(measurementJourney) && 
             <OrderCompleted 
              measurementJourney={measurementJourney} 
              setMeasurementJourney={setMeasurementJourney} 
              nextStageHandler={nextStageHandler} />}

        </>}</>
    )
}

