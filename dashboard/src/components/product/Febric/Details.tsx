// Improvement when deleting the febric asking client for confirmation can be 
// Improvement in user experience because its deleted forever 
import React, { useEffect, useState } from 'react';
import { Button, camelCaseToNormal } from '@pasal/cio-component-library';
import { useIsFetching, useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pngCDNAssetsURIs, svgCDNAssets } from '../../../config/assets';
import { queryKeys } from '../../../config/queryKeys';
import { removeUnderScore } from '../../../functions/removeUnderScore';
import { deleteFebricAction, updateFebric } from '../../../reducers/productSlice';
import FebricDetailsSkeleton from './FebricDetailsSkleton';
import styles from './details.module.scss';
import { deleteFebric as deleteFebricAPI } from '../../../apis-requests/febric/delete';

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
export default function Details({ showModel, setShowModel }: IDetails) {
    const queryClient = useQueryClient();
    const febricDetails: any = queryClient.getQueryData([queryKeys.fetchFebricDetails, showModel]);
    const isFebricDetailLoading = useIsFetching({ queryKey: [queryKeys.fetchFebricDetails] });
    const [deleteFebric, setDeleteFebric] = useState<string | null>(null)

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

                return <div className={styles.detail}>
                    <span className={styles.label}>{camelCaseToNormal(key)}</span>
                    <span className={styles.value}>{febricDetails[key]}</span>
                </div>
            }

            return null;
        });

    }

    const deleteFebricHandler = () => {
        setDeleteFebric(febricDetails.id);
    }

    const updateFebricHandler = () => {
        dispatch(updateFebric(febricDetails?.id));
        navigate('/products/febric/add');
    }

    
    const { data, isLoading, error } = useQuery(
        {
            queryKey: [queryKeys.fetchFebricDetails, deleteFebric], // Include showModel in the query key
            queryFn: () => {
                if (deleteFebric) {

                    return deleteFebricAPI(deleteFebric);
                } else {
                    return null;
                }
            },

        }
    );


    useEffect(() => {
        if (data && !isLoading && !error) {
            dispatch(deleteFebricAction(deleteFebric ?? ''));
            setDeleteFebric(null);
            setShowModel(null);
        }
    }, [data, isLoading, error])

    return (

        <>
            {!isFebricDetailLoading && <div className={styles.container}>
                <div className={styles.productDetails}>
                    <h2>Product Details</h2>
                    <div className={styles.details}>
                        {/* <div className={styles.detail}>
                            <span className={styles.label}>User ID:</span>
                            <span className={styles.value}>65d3277dd1365d5ecd4882e9</span>
                        </div>
                        <div className={styles.detail}>
                            <span className={styles.label}>Title:</span>
                            <span className={styles.value}>Mr</span>
                        </div>
                        <div className={styles.detail}>
                            <span className={styles.label}>Price:</span>
                            <span className={styles.value}>$329.73</span>
                        </div>
                        <div className={styles.detail}>
                            <span className={styles.label}>Delivery Time:</span>
                            <span className={styles.value}>1-2 business days</span>
                        </div>
                        <div className={styles.detail}>
                            <span className={styles.label}>Excellence:</span>
                            <span className={styles.value}>Medium</span>
                        </div> */}
                        <GetAttributes />
                        <div className={styles.detail}>
                            <span className={styles.label}>Image:</span>
                            <a href={febricDetails?.originalImageUrl} target='_blank'><span className={styles.value}>View</span></a>
                        </div>
                        <div className={styles.detail}>
                            <span className={styles.label}>Compositions:</span>
                            <div className={styles.composition}>
                                <GetComposition />


                                {/* <div className={styles.compositionItem}>
                                    <span>Polyester</span>
                                    <span>57%</span>
                                </div>
                                <div className={styles.compositionItem}>
                                    <span>Wool</span>
                                    <span>24%</span>
                                </div>
                                <div className={styles.compositionItem}>
                                    <span>Wool</span>
                                    <span>2%</span>
                                </div>
                                <div className={styles.compositionItem}>
                                    <span>Silk</span>
                                    <span>11%</span>
                                </div>
                                <div className={styles.compositionItem}>
                                    <span>Other</span>
                                    <span>17%</span>
                                </div> */}

                            </div>
                        </div>

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