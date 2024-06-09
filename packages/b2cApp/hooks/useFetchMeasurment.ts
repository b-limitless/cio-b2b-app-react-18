import React, { useEffect } from 'react'
import { request } from 'utils/request';

export default function useFetchMeasurment() {
  

  useEffect(() => {
    const fetchMeasurmentFunc = async() => {
        try {
            const fetchMeasurement = await request({
                url:'', 
                method:'post'
            })
        } catch(err) {
    
        }
    }
   
  }, []);

}
