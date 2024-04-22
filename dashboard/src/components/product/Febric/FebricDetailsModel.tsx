import SideModel from '../../dashboard/SideModel';
import React from 'react';
import FebricDetails from './FebricDetails';
import Details from './Details';
import { febricType } from '../../../../reducers/productSlice';
import { FebricModelType } from './types/febrics';



type Props = {
    showModel: null | string;
    setShowModel: Function;
    
};

type febricModel = Props  & FebricModelType;


export default function FebricDetailsModel({showModel, setShowModel, showFebricImageModel, setShowFebricImageModel}: febricModel) {
  return (
    <SideModel showModel={showModel} setShowModel={setShowModel}>
        <Details 
        showFebricImageModel={showFebricImageModel}
        setShowFebricImageModel={setShowFebricImageModel}
        />
    </SideModel>
  )
}
