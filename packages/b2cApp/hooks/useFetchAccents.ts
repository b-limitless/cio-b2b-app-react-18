import { accent } from 'config/apis';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingAccents, updateAccents } from 'slices/accentsSlice';
import { loadingStyles, stylesNetworkError } from 'slices/styleSlice';
import { RootState } from 'store';
import { request } from 'utils/request';

export default function useFetchAccents() {
  const { data } = useSelector((state: RootState) => state.accents);
  const dispatch = useDispatch();

  useEffect(() => {
    const fethcAccents = async () => {
      dispatch(loadingAccents(true));
      try {
        const data = await request({
          url: accent,
          method: 'get',
        });
        dispatch(updateAccents(data));
      } catch (err: any) {
        dispatch(stylesNetworkError(err));
        console.error(`Could not get accent ${err}`);
        throw new Error(`Could not get accent ${err}`);
      }
      dispatch(loadingAccents(false));
    };

    if (!data.length) {
      fethcAccents();
    }
  }, [data, dispatch]);
  return null;
}
