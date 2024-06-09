import { storeID } from 'config/user';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStoreIdAction } from 'slices/storeSlice';
import { RootState } from 'store';

export default function useDispatchStoreId() {
  const { id } = useSelector((state: RootState) => state.store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      dispatch(updateStoreIdAction(storeID));
    }
  }, [id, dispatch]);
  return null;
}
