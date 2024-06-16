import { EStorage } from 'config/keys';
import { useEffect, useState } from 'react';
import { storeID as globalStoreId } from 'config/user';

export default function useGetStoreId() {
  const [storeId, setStoreId] = useState<null | string>(null);

  useEffect(() => {
    const getStoreId = localStorage.getItem(EStorage.userId);
    setStoreId(getStoreId ?? globalStoreId);
  }, []);

  return storeId;
}
