import React, { Suspense } from 'react'
import { storeID } from 'config/user'
import Header from 'components/Header/Header'
import Loader from 'components/Loader'

const Cart = React.lazy(() => import('./CartMain'))

export default function CartHardCodedUserId() {
  return (
    <Suspense fallback={<Loader />}>
      <Cart userId={''} usedFrom='cart'>
        <Header userId={''} />
      </Cart>
    </Suspense>

  )
}
