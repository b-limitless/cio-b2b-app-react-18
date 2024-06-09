import React, { Suspense } from 'react';
import { useRouter } from 'next/router';
import Loader from 'components/Loader';

const CustomizeMain = React.lazy(() => import('./CustomizeMain'));

export default function CustomizeRouteBaseUserId() {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <Suspense fallback={<Loader message='Loading app...'/>}>
      <CustomizeMain userId={userId ?? ''} />
    </Suspense>

  )
}
