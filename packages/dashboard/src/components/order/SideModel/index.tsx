import { SideModel } from '@pasal/cio-component-library';
import React from 'react';
import OrderTabs from '../Tab';

export interface OrderSideModel {
  showModel: string | null;
  setShowModel: Function;
}

export default function OrderSideModel({ showModel, setShowModel }: OrderSideModel) {

  return (
    <SideModel
      showModel={!!showModel}
      setShowModel={setShowModel}
    >
      <OrderTabs showModel={showModel}/>
    </SideModel>
  )
}