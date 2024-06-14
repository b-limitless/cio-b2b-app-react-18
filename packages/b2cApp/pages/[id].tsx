/**
 * This application can be integrated in 2 ways
 * 1. We can pass the store id in parameter and with same domain name we can access differet B2B application
 * by using simply theire id in each url but the domin would remain same
 * **/
'use client';
import dynamic from 'next/dynamic';
import RouterHomeComponent from './home/RouterHomeComponent';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { EStorage } from 'config/keys';

// Working with route
function Home() {
    const router = useRouter();
    const {id} = router.query;

    console.log('This is your id', id);

    useEffect(() => {
        if(id) {
            localStorage.setItem(EStorage.userId, id.toString()); 
        }
    }, [id]);

    if(!id) return <div>Not found</div>

    
    
    return <RouterHomeComponent userId={id}/>
}


export default dynamic(() => Promise.resolve(Home), { ssr: false });
