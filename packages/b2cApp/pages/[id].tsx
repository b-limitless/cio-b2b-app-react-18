/**
 * This is default page when id is passed then we set the id to localstorage
 * For the customer B2B otherwise the id is used from the config file 
 * In the case of deployment of the app in customer own domain
 * 
 * We can recognize the app if the request is not coming from our domain but 
 * that domain is added to the cors and request is serving then app is running 
 * on customer own domain name 
 * 
 * **/
'use client';
import dynamic from 'next/dynamic';
import RouterHomeComponent from './home/RouterHomeComponent';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { EStorage } from 'config/keys';
import { storeID } from 'config/user';

// Working with route
function Home() {
    const router = useRouter();
    const {id} = router.query;
    
    useEffect(() => {
        if(id) {
            localStorage.setItem(EStorage.userId, id.toString()); 
        }
    }, [id]);
    
    return <RouterHomeComponent userId={id ?? storeID}/>
}


export default dynamic(() => Promise.resolve(Home), { ssr: false });
