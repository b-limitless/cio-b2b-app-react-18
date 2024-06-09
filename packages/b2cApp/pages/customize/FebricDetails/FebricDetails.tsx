import React from 'react';
import styles from './febric-details-v1.module.scss';
import { svgCDNAssets } from 'config/assets';
import Image from 'next/image';
import { camelCaseToNormal } from 'functions/camelCaseToNormal';
import { FebricAttrs } from 'slices/febricsSlice';

const excludeKeys = ['userId', 'id', 'version', 'thumbnailImageUrl', 'originalImageUrl']

type TObjectType = {
    [x: string]: string | number;
}

type TObjectTypeV1 = {
    [x: string]: TObjectType[]
}

enum EValue {
    array = 'array',
    object = 'object',
    primitive = 'primitive'
}

function checkType(value: any) {
    const firstElement = value?.[0];

    if (Array.isArray(value) && firstElement !== null && typeof firstElement !== 'object') {
        return EValue.array;
    } else if (Array.isArray(value) && typeof value[0] === 'object' && value !== null) {
        return EValue.object;
    } else {
        return EValue.primitive;
    }
}

interface IFebricDetailsV1 {
    febric: FebricAttrs | null;
    setShowFebricDetailsModel: Function;
}

export default function FebricDetailsV1({ setShowFebricDetailsModel, febric }: IFebricDetailsV1) {

    const GetPrimitiveValueType = () => {
        const primitiveValues: React.ReactNode[] = [];
        if (febric) {
            (Object.entries(febric) as [keyof FebricAttrs, any][]).map(([key, value]) => {

                if (checkType(febric[key]) === EValue.primitive && excludeKeys.indexOf(key) === -1) {

                    primitiveValues.push(<p key={key}><strong className={styles.capitalize}>{camelCaseToNormal(key)}:</strong> {value}</p>)
                }
            });
        }
        return primitiveValues;
    }

    const filterObjectAndArrayTypeValues = () => {
        const arrayTypeValue: { [x: string]: string[] } = {};
        const objectTypeValue: TObjectTypeV1 = {};
        if (febric) {
            (Object.entries(febric) as [keyof FebricAttrs, any][]).map(([key, value]) => {

                if (checkType(value) === EValue.array && excludeKeys.indexOf(key) === -1) {

                    arrayTypeValue[key] = value
                }

                if (checkType(value) === EValue.object && excludeKeys.indexOf(key) === -1) {

                    objectTypeValue[key] = value
                }

            });
        }


        return { arrayTypeValue, objectTypeValue };
    }

    const GetArrayTypeValueInComponent = () => {
        const getArrayTypeInComponent: React.ReactNode[] = [];
        const { arrayTypeValue } = filterObjectAndArrayTypeValues();

        (Object.entries(arrayTypeValue) as [keyof FebricAttrs, any][]).map(([key, value]) => {

            getArrayTypeInComponent.push(<React.Fragment key={key}><div className={styles.detail}><h2 className={styles.h2_key}>{key}</h2>
                <ul >{value.map((val: any) => <li key={`${key}-${val}`}>{val}</li>)}</ul>
            </div></React.Fragment>)

        });

        return getArrayTypeInComponent;

    }

    const renderKeyValuePairs = (item: TObjectType) => (
        
        <>
            {Object.entries(item).map(([, subVal], k) => (
                <React.Fragment key={k}>
                  
                    {k === 0 ? <strong>{subVal}</strong> : subVal}

                    {k === 0 && <strong>:</strong>}{typeof subVal !== 'number' ?' ': ''}
                    {typeof subVal === 'number' && '%'}
                </React.Fragment>
            ))}
        </>
    );

    const renderObjectTypeValues = (objectTypeValue: any) => (
        <>
            {(Object.entries(objectTypeValue) as [keyof FebricAttrs, any][]).map(([key, value]) => (
                <div className={styles.detail} key={key}>
                    <h2 className={styles.h2_key}>{key}</h2>

                    <ul>

                        {value.map((item: any, j: number) => (
                            <li key={`sub-list-${j}`}>{renderKeyValuePairs(item)}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );

    const GetObjectTypeValues = () => {
        const { objectTypeValue } = filterObjectAndArrayTypeValues();
        return renderObjectTypeValues(objectTypeValue);
    }

    return (

        <div className={styles.fabric_container}>
            <Image onClick={() => setShowFebricDetailsModel(null)} className={styles.closeImg} src={`${svgCDNAssets.crossIcon}`} alt='' width={18} height={18} />

            <div className={styles.row}>
                <div className={styles.image}>
                    <Image fill={true} className={styles.fabric_image} src={febric?.originalImageUrl ?? ''} alt="Fabric Thumbnail" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.details}>
                    <div className={styles.detail}>
                        <h2>Fabric Details</h2>
                        <GetPrimitiveValueType />
                    </div>
                    <GetArrayTypeValueInComponent />
                    <GetObjectTypeValues />
                </div>

            </div>

        </div>
    )
}
