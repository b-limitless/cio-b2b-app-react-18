import React, { Suspense } from 'react';

import Loader from 'components/Loader';

const Main = React.lazy(() => import('./Main'));

export default function index() {

    return (
        <Suspense fallback={<Loader />}>
            <Main userId={''} />
        </Suspense>
    )
}
