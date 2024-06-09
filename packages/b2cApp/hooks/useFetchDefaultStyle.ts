import { APIS } from 'config/apis';
import { transoformData } from 'functions/dataTransformer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStyles, updateModels } from 'slices/modelSlice';
import { RootState } from 'store';
import { request } from 'utils/request';

export default function useFetchDefaultStyle() {
  const { data } = useSelector((state: RootState) => state.styles);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDefaultStyle = async () => {
      dispatch(loadingStyles(true));
      try {
        const data = await request({
          url: APIS.style.default,
          method: 'get',
        });
        // transform the data
        const transformData = transoformData(data);
        // dispatch(updateModels(transformData));
      } catch (err: any) {
        // dispatch(stylesNetworkError(err));
        console.error(`Could not get style ${err}`);
        throw new Error(`Could not get style ${err}`);
      }
      dispatch(loadingStyles(false));
    };

    if (!data.length) {
      fetchDefaultStyle();
    }
  }, [data, dispatch]);
  return null;
}


