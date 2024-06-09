/**
 * This application can be integrated in 2 ways
 * 1. We can pass the store id in parameter and with same domain name we can access differet B2B application
 * by using simply theire id in each url but the domin would remain same
 * **/
'use client';
import dynamic from 'next/dynamic';
import RouterHomeComponent from './home/RouterHomeComponent';
import { useRouter } from 'next/router';

function Home() {
    const router = useRouter();
    const {userId} = router.query;

    if(!userId) return <div>Not found</div>
    
    return <RouterHomeComponent userId={userId}/>
}


export default dynamic(() => Promise.resolve(Home), { ssr: false });
