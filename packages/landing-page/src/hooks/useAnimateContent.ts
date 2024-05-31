import { CreateObserver } from '@/functions/observer';
import React, { MutableRefObject, useEffect } from 'react'

interface IUseAnimateContent {
    refs: MutableRefObject<null>[]
    animations: string[]
}
// I an pass observer ref as array list
// I can pass animation as an array to create observer
export default function useAnimateContent({refs, animations}: IUseAnimateContent) {
  
    useEffect(() => {
    
        if(animations.length === 0 || !animations) return;
        
        const observers = refs.map((ref, index) => {
            
            const observer = CreateObserver(animations[index]);
            if (ref.current) {
                observer.observe(ref.current);
            }
            return observer;
        });

    
        return () => {
            observers.forEach((observe, index) => {
                if(refs[index].current) {
                    // @ts-ignore
                    observe.unobserve(refs[index].current);
                }
            })

            
        }
      }, [refs]);

      return null;
}
