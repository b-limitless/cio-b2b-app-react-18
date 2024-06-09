import Loader from 'components/Loader';
import { storeID } from 'config/user';
import { useRouter } from 'next/router'
import React, { Suspense } from 'react'
const Main = React.lazy(() => import('./Main'));

export default function Signup() {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <Suspense fallback={<Loader />}>
      <Main userId={storeID} />
    </Suspense>
  )
}
