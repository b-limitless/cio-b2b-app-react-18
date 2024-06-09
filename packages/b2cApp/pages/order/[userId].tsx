
import React from 'react'
import Order from './Order'
import { useRouter } from 'next/router'

export default function OrderRouteBaseUserId() {
    const router = useRouter();
    const { userId } = router.query;

    return (
        <Order userId={userId ?? ''} />
    )
}
