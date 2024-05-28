import React from 'react';
import SideModel from '../../dashboard/SideModel';
import Details from './Details';
import { FebricModelType } from './types/febrics';



type Props = {
    showModel: null | string;
    setShowModel: Function;
    
};

type febricModel = Props  & FebricModelType;


export default function FebricDetailsModel({showModel, setShowModel}: febricModel) {
  return (
    <SideModel showModel={showModel} setShowModel={setShowModel}>
        <Details 
        showModel={showModel}
        setShowModel={setShowModel}
        />
         <div>
        </div>
    </SideModel>
  )
}
