import { useRouter } from 'next/router'
import React from 'react';
import Main from './Main';

export default function Signin() {
  const router = useRouter();
  const {userId} = router.query;

  return (
    <Main userId={userId ?? ''}/>
  )
}
