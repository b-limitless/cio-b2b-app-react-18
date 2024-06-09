import React, { Suspense } from 'react'
import { useRouter } from 'next/router'
import Header from 'components/Header/Header';
import Loader from 'components/Loader';

const Cart = React.lazy(() => import('./CartMain'))

export default function CartRouteBaseUserId() {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <Suspense fallback={<Loader />}>
      <Cart userId={userId ?? ''} usedFrom='cart'>
        <Header userId={userId ?? ''} />
      </Cart>
    </Suspense>

  )
}
