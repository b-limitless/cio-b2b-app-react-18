import { useRouter } from "next/router";
import PayToPaypal from "./Main";

import React from 'react'

export default function Paypal() {
  const router = useRouter();
  const {id} = router.query;

  return <PayToPaypal id={id ?? ''} setMeasurementJourney={() => {}}/>
}
