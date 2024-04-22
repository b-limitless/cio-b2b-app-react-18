import React, { useState } from 'react';
import { pngCDNAssetsURIs, svgCDNAssets } from '../../../config/assets';
import Star from '../../common/Rating';
import styles from './details.module.scss';
import { febricType } from '../../../../reducers/productSlice';
import { characters } from '../../../config/febric';
import { removeUnderScore } from '../../../functions/removeUnderScore';
import { FebricModelType } from './types/febrics';
import { useIsFetching, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../../config/queryKeys';
import FebricDetailsSkeleton from './FebricDetailsSkleton';
import { Button, camelCaseToNormal } from '@pasal/cio-component-library';
import { useDispatch } from 'react-redux';
import { updateFebric } from '../../../reducers/productSlice';
import { Router, useNavigate } from 'react-router-dom';

// Exclude the file which do not required to show in the details
// Because they exists in table and some of them already shown
const skipFields = ['version', 'userId', 'id', 'characters', 'superShiny', 'compositions', 'thumbnailImageUrl', 'originalImageUrl']


const elementStyles = {
    backgroundImage: `url('${pngCDNAssetsURIs.febric1}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

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

// const febric = {
//     "characters": [
//         "Stretchy_Elastic"
//     ],
//     "compositions": [
//         {
//             "name": "Cotton",
//             "code": "cotton",
//             "persantage": "100"
//         }, 
//         {
//             "name": "Cotton",
//             "code": "cotton",
//             "persantage": "100"
//         }, 
//         {
//             "name": "Cotton",
//             "code": "cotton",
//             "persantage": "100"
//         }
//     ],
//     "userId": "6625144e6b72786eb40ac4b2",
//     "deliveryTime": "10",
//     "excellence": "1",
//     "warmth": "Thermal_Conductivity",
//     "weight": "1",
//     "threadStyle": "twisted",
//     "brightness": "reflectance",
//     "superShiny": true,
//     "tone": "medium",
//     "opacity": "25",
//     "waterproof": "not_waterproof",
//     "stretchyText": "Stretchy fabric",
//     "stretchy": "non-stretchy",
//     "type": "shirt",
//     "febricTypes": "cotton",
//     "threadTypes": "polyester",
//     "threadCounts": "400-600",
//     "thumbnailImageUrl": "https://res.cloudinary.com/dun5p8e5d/image/upload/v1713706346/thumbnails/ABC/emkas9hhscmuutwjtf6m.jpg",
//     "originalImageUrl": "https://res.cloudinary.com/dun5p8e5d/image/upload/v1713706342/images/ABC/htbuxrlyi2tawmv1i9ee.jpg",
//     "createdAt": "2024-04-21T13:32:35.060Z",
//     "updatedAt": "2024-04-21T13:32:35.060Z",
//     "version": 0,
//     "id": "662515736b72786eb40ac509"
// };

interface IDetails {
    showModel: string | null;
}
export default function Details({ showModel }: IDetails) {
    const queryClient = useQueryClient();
    const febricDetails: any = queryClient.getQueryData([queryKeys.fetchFebricDetails, showModel]);
    const isFebricDetailLoading = useIsFetching({ queryKey: [queryKeys.fetchFebricDetails] });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log('febricDetails', febricDetails);

    const GetComposition = () => {
        return !isFebricDetailLoading &&  febricDetails?.compositions.map((composition: any, i: number) =>
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
    
    const deleteFebric =  () => {

    }

    const updateFebricHandler = () => {
        dispatch(updateFebric(febricDetails?.id));
        navigate('/products/febric/add');
    }

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
                                <GetComposition/>

                                
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
                        <Button variant = 'primary' text= 'Delete'></Button>
                        <Button variant='light' text='Update' onClick={() => updateFebricHandler()}></Button>
                     </div>
                </div>
            </div>}
            {!!isFebricDetailLoading && <FebricDetailsSkeleton />}
        </>



    )
}