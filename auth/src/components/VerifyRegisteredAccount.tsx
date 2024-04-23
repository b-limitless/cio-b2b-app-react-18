import React from 'react';
import VerifyFeature from './features/verify.feature';
import Template from '../common/Template';
import BackLeftIcon from '../assets/svg/back-left-icon.svg';


interface IVerifyRegisteredAccount {
  navigateFromCell:Function;
}
export default function VerifyRegisteredAccount({navigateFromCell}: IVerifyRegisteredAccount) {
  
  return (
    <Template>
      <div className='right col'>
        
        <VerifyFeature navigateFromCell={navigateFromCell}/>
      </div>
    </Template>
  )
}
