/**
 * Improvement when deleting the febric asking client for confirmation can be 
 * Improvement in user experience because its deleted forever 
 * For example if i open the febric detail model and go outside of the browser then again its fetch 
 * the febric details, its should not fetch becaue we already have data on the memory store - Please improvide that part as well
 * 
 * **///
import React, { useEffect, useState } from 'react';
import { Button, camelCaseToNormal } from '@pasal/cio-component-library';
import { useIsFetching, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {svgCDNAssets } from '../../../config/assets';
import { queryKeys } from '../../../config/queryKeys';
import { removeUnderScore } from '../../../functions/removeUnderScore';
import { deleteFebricAction, updateFebric, updateFebricIsDefault } from '../../../reducers/productSlice';
import { updateFebric as updateFebricAPI } from '../../../apis-requests/febric/updateFebric';
import FebricDetailsSkeleton from './FebricDetailsSkleton';
import styles from './details.module.scss';
import { deleteFebric as deleteFebricAPI } from '../../../apis-requests/febric/delete';
import TransitionsSnackbar from '../../common/SnackBar';

const skipFields = ['version', 'userId', 'id', 'characters', 'superShiny', 'compositions', 'thumbnailImageUrl', 'originalImageUrl']


type ItemDetail = {
    title: string;
    value: string | number;
}

export const ItemDetail = ({ title, value }: ItemDetail) => {
    return <div className={styles.item}>
        <div className={styles.title__icon}>
            <span className={styles.icon}>
                <img src={svgCDNAssets.primiumIcon} width={20} height={20} alt='Primium' />
            </span>
            <span className={styles.title}>
                {title} : {value}
            </span>
        </div>
        {/* <div className={styles.description}>
            For the highest quality, we have our premium fabrics. Here you will only find the best of the best.
        </div> */}
    </div>;
}

interface IDetails {
    showModel: string | null;
    setShowModel: Function;
}


interface IConfimrModel {
    confirmHandler: Function;
    cancelHandler: Function;
    deleting: boolean;
}
const SideModelConfirmation = ({confirmHandler, cancelHandler, deleting}: IConfimrModel) => {
    return <div className={styles.confirmation}>
        <div className={styles.row}>
            Are you sure to delete this item
        </div>
        <div className={styles.row}>
            <span onClick={() => cancelHandler()}>Cancel</span>
            <span onClick={() => deleting ? null : confirmHandler()}> {deleting ? 'Please wait..' : 'Confirm'}</span>
        </div>
    </div>
}
export default function Details({ showModel, setShowModel }: IDetails) {
    const queryClient = useQueryClient();
    const febricDetails: any = queryClient.getQueryData([queryKeys.fetchFebricDetails, showModel]);
    const isFebricDetailLoading = useIsFetching({ queryKey: [queryKeys.fetchFebricDetails] });
    const [deleteFebric, setDeleteFebric] = useState<string | null>(null);
    const [showDeleteModel, setShowDeleteModel] = useState(false);
    const [showSnackbar, setShowSnackBar] = useState(false); 
    const [defaultFebricUpdated, setDefaultFebricUpdated] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const GetComposition = () => {
        return !isFebricDetailLoading && febricDetails?.compositions.map((composition: any, i: number) =>
            <div className={styles.compositionItem}>
                <span>{composition?.name}</span>
                <span>{composition?.persantage}%</span>
            </div>
        )
    }

    const getCharacters = () => {
        return febricDetails?.characters.map((character: any, i: number) =>
            <span key={`character-${i}`} className={styles.item}>{removeUnderScore(character)}</span>)
    }

    const GetAttributes = () => {
        return !isFebricDetailLoading && febricDetails && Object.keys(febricDetails).map((key: any) => {
            if (skipFields.indexOf(key) == -1) {

                const getValue = () => {
                    if(typeof febricDetails[key] === 'boolean') {
                        return febricDetails[key] ? 'Yes' : 'No';
                    }
                    return febricDetails[key];
                }
                

                return <div className={styles.detail}>
                    <span className={styles.label}>{camelCaseToNormal(key)}</span>
                    <span className={styles.value}>{getValue()}</span>
                </div>
            }

            return null;
        });

    }

    const deleteFebricHandler = () => {
        setShowDeleteModel(true);
    }

    const updateFebricHandler = () => {
        dispatch(updateFebric(febricDetails?.id));
        navigate('/products/febric/add');
    }


    const { data, isLoading, error } = useQuery(
        {
            queryKey: [queryKeys.deleteFebric, deleteFebric], // Include showModel in the query key
            queryFn: () => {
                if (deleteFebric) {
                    return deleteFebricAPI(deleteFebric);
                } else {
                    return null;
                }
            },

        }
    );

    const {mutate, error:makeDefaultError, data: makeDefaultData} = useMutation({mutationFn: () => updateFebricAPI(febricDetails?.id, {isDefault:true})})


   

    const confirmHandler = () => {
        setDeleteFebric(febricDetails.id);
    }

    const cancelHandler = () => {
        setShowDeleteModel(false);
    }

    // const  openSnackBar = () => {
    //     setShowDeleteModel(true); 
    // }

    const handleCloseAlert = () => {
        setShowSnackBar(false); 
    }

    const makeFebricDefault = () => {
        mutate();
    }

    const handleCloseAlertDefaultFebric = () => {
        setDefaultFebricUpdated(false);
    }

    useEffect(() => {
        if (data && !isLoading && !error) {
            dispatch(deleteFebricAction(deleteFebric ?? ''));
            setDeleteFebric(null);
            setShowModel(null);
            setShowDeleteModel(false);
            setShowSnackBar(true);

        }
    }, [data, isLoading, error]);



    useEffect(() => {
        if(makeDefaultData && !makeDefaultError) {
            // dispatch(updateFebricIsDefault(febricDetails.id));
            setDefaultFebricUpdated(true);
        }
    }, [makeDefaultData, makeDefaultError]);


    return (
        <>
        <TransitionsSnackbar
        open={defaultFebricUpdated}
        handleCloseAlert={handleCloseAlertDefaultFebric}
        severity='success'
        message={'Febric has been set to default'}
      />

        <TransitionsSnackbar
        open={showSnackbar}
        handleCloseAlert={handleCloseAlert}
        severity='success'
        message={'Deleted successfully'}
      />
            {!isFebricDetailLoading && <div className={styles.container}>
                <div className={styles.productDetails}>
                    {showDeleteModel && <SideModelConfirmation
                    cancelHandler={cancelHandler}
                    confirmHandler={confirmHandler}
                    deleting={isLoading}
                    />}

                    <h2>Product Details</h2>
                    <div className={styles.details}>
                        <GetAttributes />
                        <div className={styles.detail}>
                            <span className={styles.label}>Image:</span>
                            <a href={febricDetails?.originalImageUrl} target='_blank'><span className={styles.value}>View</span></a>
                        </div>
                        <div className={styles.detail}>
                            <span className={styles.label}>Compositions:</span>
                            <div className={styles.composition}>
                                <GetComposition />
                            </div>
                        </div>
                        {!febricDetails?.isDefault && <div className={styles.defaultMake} onClick={makeFebricDefault}>
                            Make it default
                        </div>}
                        

                    </div>

                    <div className={styles.actions}>
                        <Button variant='primary' text='Delete' onClick={() => deleteFebricHandler()}></Button>
                        <Button variant='light' text='Update' onClick={() => updateFebricHandler()}></Button>
                    </div>
                </div>
            </div>}
            {!!isFebricDetailLoading && <FebricDetailsSkeleton />}
        </>

    )
}