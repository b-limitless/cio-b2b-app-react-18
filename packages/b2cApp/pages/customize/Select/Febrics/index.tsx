import Image from 'next/image';
import Febric from 'pages/customize/Febric/Febric';
import FebricLoader from 'pages/customize/Febric/loaders/FebricLoader';
import FilterFebricLoader from 'pages/customize/Febric/loaders/FilterFebricLoader';
import React from 'react';
import { TFebric } from 'slices/febricSlice';
import { IFebrics } from 'slices/febricsSlice';
import styles from './febric.module.scss';

interface FebricInterface {
  setShowFilterModel: Function;
  setShowFebricDetailsModel: Function;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>, febric: TFebric) => void;
  febrics: IFebrics
}
const countArray = new Array(20).fill(0);


export default function Febrics({ setShowFilterModel, setShowFebricDetailsModel, onClickHandler, febrics }: FebricInterface) {
  
  return (
    <>
      <div className={styles.action}>
        {febrics?.loading && <FilterFebricLoader/>}

        {/* 135px height 21 */}
        {!febrics?.loading && <>
          <Image src='/icon/filter.svg' width={14} 
           height={10} 
           alt='filter' 
           onClick={() => setShowFilterModel(true)}></Image>
          <div className={styles.text}>
            <span className={styles.febric}>
              FILTERS
            </span>
            <span className={styles.count}>
              ({febrics?.data?.febrics?.length} Febrics)
            </span>

          </div>
        </>}


      </div>

      <div className={styles.febrics} id='febrics-scroll-container'>
        <>
          {febrics?.data?.febrics?.map((febric, i) => <Febric
            febric={febric}
            // febricImageURI={febric.originalImageUrl}
            key={'febri-item-custom' + i}
            index={i}
            setShowFebricDetailsModel={setShowFebricDetailsModel}
            onClick={(event: any) => onClickHandler(event,
              {
                id: febric.id,
                model: febric.originalImageUrl,
                price: febric.price,
                title: febric.title,
                originalImageUrl: febric.originalImageUrl,
                material: febric.material,
                tone: febric.tone,
                febricTypes: febric.febricTypes,
                userId: febric?.userId

              })}
          />)}

          {febrics?.loading && countArray.map((_, i) => <FebricLoader
            key={`febric-loader-${i}`}
          />)}

        </>

      </div>
    </>
  )
}
