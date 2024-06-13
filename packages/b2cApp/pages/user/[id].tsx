import { useRouter } from 'next/router';
import React from 'react'

export default function UserDetail() {
  const router = useRouter(); 
  // Keep on trying 
  const {id} = router.query;

  return (
    <div>You are user {id}</div>
  )
}
