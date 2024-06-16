import { EStorage } from 'config/keys';
import { useEffect, useState } from 'react';

export default function useGetStoreId() {
  const [storeId, setStoreId] = useState<null | string>(null);

  useEffect(() => {
    const getStoreId = localStorage.getItem(EStorage.userId);
    setStoreId(getStoreId);
  }, []);

  return storeId;
}
