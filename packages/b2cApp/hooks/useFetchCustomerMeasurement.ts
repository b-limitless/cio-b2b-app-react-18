import { APIS } from 'config/apis'
import React, { useEffect } from 'react'
import { request } from 'utils/request'

export default function useFetchCustomerMeasurement() {
    useEffect(() => {
        const fetchMeasurement = async() => {
            try {
                const response = await request({
                    url: APIS.shirt.measurement,
                    method:'get'
                });
                console.log(response)
            } catch(err) {
                console.error(`Could not fetch the measurement ${err}`); 
            }
        }
    }, [])
  return (null)
}
