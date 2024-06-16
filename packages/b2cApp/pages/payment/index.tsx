import { useRouter } from "next/router";
import PayToPaypal from "./Main";

import React from 'react'
import useGetStoreId from "hooks/useGetStoreId";
import { storeID as configStoreId } from "config/user";

export default function Paypal() {
  const localStorageStoreId = useGetStoreId();

  return <PayToPaypal id={localStorageStoreId ?? configStoreId} setMeasurementJourney={() => { }} />
}
