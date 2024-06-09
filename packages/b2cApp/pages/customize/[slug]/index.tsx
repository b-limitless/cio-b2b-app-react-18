// Normally we will fetch the redux store because in MainLayout file
// We need to dispatch the user id manuall for the files
// When we make network reqeust in isloated app model then bascially 
// We are not passing id as param because all routes are dependent on that id
// Where user optionally can access the app by passing there store id

// On the other hand when there is no id in each application when you make network request to fetch 
// different kind of data for the specific user then simply use option either from the uri or from the 
// redux store
import Loader from 'components/Loader';
import { storeID } from 'config/user';
import React, { Suspense } from 'react';

const CustomizeMain = React.lazy(() => import('./CustomizeMain'));

export default function CustomizeRouteBaseUserId() {
    // get the id from the store and use that id
    return (
        <Suspense fallback={<Loader message='Loading app...'/>}>
             <CustomizeMain userId={storeID} />
        </Suspense>
       
    )
}
