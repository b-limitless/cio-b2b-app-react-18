import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStyles, stylesNetworkError, updateStyles } from 'slices/styleSlice';
import { RootState } from 'store';
import { request } from 'utils/request';
import {style} from 'config/apis';

export default function useFetchStyle() {
  const { data } = useSelector((state: RootState) => state.styles);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStyle = async () => {
      dispatch(loadingStyles(true));
      try {
        const data = await request({
          url: style,
          method: 'get',
        });
        dispatch(updateStyles(data));
      } catch (err: any) {
        dispatch(stylesNetworkError(err));
        console.error(`Could not get style ${err}`);
        throw new Error(`Could not get style ${err}`);
      }
      dispatch(loadingStyles(false));
    };

    if (!data.length) {
      fetchStyle();
    }
  }, [data, dispatch]);
  return null;
}
