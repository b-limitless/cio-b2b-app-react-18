import React, { useState } from 'react';
import { pngCDNAssetsURIs, svgCDNAssets } from '../../../config/assets';
import Star from '../../common/Rating';
import styles from './details.module.scss';
import { febricType } from '../../../../reducers/productSlice';
import { characters } from '../../../config/febric';
import { removeUnderScore } from '../../../functions/removeUnderScore';
import { FebricModelType } from './types/febrics';

// Exclude the file which do not required to show in the details
// Because they exists in table and some of them already shown
const skipFields = ['version', 'action', 'id', 'price', 'title', 'userId', 'warmth', 'compositions', 'characters', 'waterproof', 'febricType', 'thumbnailImageUrl', 'originalImageUrl']

type Details = {
} & FebricModelType

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

export default function Details({showFebricImageModel, setShowFebricImageModel }: Details) {

    const [toogleIconChecked, setToggleIconChecked] = useState(false);

    const getComposition = () => {
        return febric?.compositions.map((composition: any, i: number) =>
            <span key={`composition-${i}`}
                className={styles.type}>{i !== 0 ? ' -' : ''} {composition.persantage}% {composition.name}
            </span>)
    }

    const getCharacters = () => {
        return febric?.characters.map((character: any, i: number) =>
            <span key={`character-${i}`} className={styles.item}>{removeUnderScore(character)}</span>)
    }

    const getAttributes = () => {
        return febric && Object.keys(febric).map((key: any) => {
            if (skipFields.indexOf(key) == -1) {
                // @ts-ignore
                return <ItemDetail title={key} value={febric[key]} />
            }

            return null;
        });

    }
    return (

        <div className={styles.container}>
            <div className={styles.productDetails}>
                <h2>Product Details</h2>
                <div className={styles.details}>
                    <div className={styles.detail}>
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
                    </div>
                    <div className={styles.detail}>
                        <span className={styles.label}>Compositions:</span>
                        <div className={styles.composition}>
                            <div className={styles.compositionItem}>
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
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}