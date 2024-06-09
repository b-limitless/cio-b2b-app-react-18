/**
 * This hook can be use to fetch febrics across the project
 * It has userId props to pass and will have more props such as page, filters, sorting states as well
 *
 *
 * **/
import axios from 'axios';
import { APIS } from 'config/apis';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchMoreFebrics,
  fetchedErrorAction,
  fetchedFebricsAction,
  fetchingFebricAction
} from 'slices/febricsSlice';


interface IUseFebric {
  userId: string | string[] | null;
  filters:string;
  page:number | null;
}
export default function useFetchFebrics({page, filters, userId }: IUseFebric) {
  const dispatch = useDispatch();
 
  useEffect(() => {
    const fetchFebricAPI = async () => {
      dispatch(fetchingFebricAction(true));
      try {
        const response = await axios.get(`${APIS.product}/${userId}?filters=${filters}&page=${page}`);
        

        const res = {...response.data};

        if(page && page > 0) {
          dispatch(fetchMoreFebrics(response.data));
        }

        if(page === 0) {
          dispatch(fetchedFebricsAction(res));
        }

        
      } catch (err: any) {
        dispatch(fetchedErrorAction(err.response.message));
        console.error(err);
      }
      dispatch(fetchingFebricAction(false));
    };
    if(userId) fetchFebricAPI();
  }, [userId, dispatch, filters, page]);


  return null;
}
