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
        <div className='group-nav'>
          <div className='row navigate'>
            <span className='ico-back'>
              <span className='icon'>
                <BackLeftIcon />
              </span>
              <div className='back'>Back</div>
            </span>
            <span className='steps-info'>
              <span className='step'>STEP 01/03</span>
              <span className='info'>Personal Info.</span>
            </span>
          </div>
        </div>
        
      

        <VerifyFeature navigateFromCell={navigateFromCell}/>
      </div>
    </Template>
  )
}
