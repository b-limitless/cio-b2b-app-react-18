import Loader from 'components/Loader'

import FormTemplate from 'pages/order/template/form'
import React from 'react'


export const extraStyles = {
  display:'grid',
  height: 'calc(100vh - (225px + 1rem))',
  placeItems: 'center'
}


export default function Paypal() {
  return (
    <FormTemplate extraStyles={extraStyles}>
      <Loader message='Please wait connecting with paypal...'/>
    </FormTemplate>
  )
}
