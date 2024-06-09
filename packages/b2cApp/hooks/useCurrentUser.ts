import { APIS } from 'config/apis';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCustomer } from 'slices/customerSlice';
import { RootState } from 'store';
import { request } from 'utils/request';



export default function useCurrentUser() {
  const { token } = useSelector((state: RootState) => state.currentCustomer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUSer = async () => {
      try {
        const {currentCustomer} = await request({
          url: APIS.customer.currentUser,
          method: 'get',
        });
        dispatch(setCurrentCustomer(currentCustomer));
      } catch (err) {

        console.error(`Could not fetch current user ${err}`);
      }
    };

    if (!token) {
      fetchCurrentUSer();
    }
  }, [dispatch, token]);
  return null;
}
