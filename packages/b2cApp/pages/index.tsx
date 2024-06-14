/**
 * This application can be integrated
 * 
 * 2. If customer wants this app to be deployed to their machine then we can simply need to use hard coded 
 * id which is somewhere inside ourcodebase and they can deploy this app inside their own domain 
 * the build Next JS app can be deployed to their own domain and machine and we can get the id which is 
 * store inside the code 
 * 
 * In this case 
 * **/
'use client';
import dynamic from 'next/dynamic';
import RouterHomeComponent from './home/RouterHomeComponent';
import { storeID } from 'config/user';
import useDispatchStoreId from 'hooks/useDispatchStoreId';
import { useRouter } from 'next/router';

// Yml file was not updated
function Home() {

    const router = useRouter();
    const {userId} = router.query;

    console.log('This is your userid, testing', userId);
    
    useDispatchStoreId();
    return <RouterHomeComponent userId={''}/>
}


export default dynamic(() => Promise.resolve(Home), { ssr: false });
