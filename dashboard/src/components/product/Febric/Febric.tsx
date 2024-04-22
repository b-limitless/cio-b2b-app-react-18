
import { SelectChangeEvent } from '@mui/material/Select';
import { Button, DataTable } from '@pasal/cio-component-library';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFebric } from '../../../apis-requests/febric';
import { fetchFebricDetails } from '../../../apis-requests/febric/febricDetails';
import { APIS } from '../../../config/apis';
import { brightness, febricSeasons } from '../../../config/febric';
import { queryKeys } from '../../../config/queryKeys';
import { fetchedFebrics, filterFebric, updateFebric } from '../../../reducers/productSlice';
import { EModel, fetchDataAction } from '../../../reducers/shoudFetchSlice';
import { RootState } from '../../../store';
import { request } from '../../../utils/request';
import ConfirmationDialog from '../../common/Confimation/ConfirmationDialog';
import FebricDetailsModel from './FebricDetailsModel';
import styles from './styles.module.scss';


const perPage = 20;

const filterData = [
  {
    label: 'Febric Season',
    data: febricSeasons.map(febricSeason => (febricSeason.code)),
    id: 'febricSeasons'
  },
  {
    label: 'Brightness',
    data: brightness.map(t => (t.code)),
    id: 'brightness'
  },
];


export default function Febric() {
 
  const [showModel, setShowModel] = useState<null | string>(null);
  const {febrics: shouldFetchFebric} = useSelector((state:RootState) => state.shouldFetch);
  const {febrics, filters, page } = useSelector((state:RootState) => state.febrics);
  const queryParams = {
    filters: JSON.stringify(filters),
    page
  };

  const tableHeader = ['title', 'price', 'modelType', 'material', 'action'];
  const dispatch = useDispatch();
  

  const { data, isLoading, error } = useQuery(
    { queryKey: [queryKeys.fetchFebrics, queryParams], 
    queryFn: () => fetchFebric(queryParams), 
    enabled: shouldFetchFebric
  }
    );

    useQuery(
      {
        queryKey: [queryKeys.fetchFebricDetails, showModel], // Include showModel in the query key
        queryFn: () => {
          if (showModel) {
            return fetchFebricDetails(showModel);
          } else {
            return null;
          }
  
        }
      }
    );
  
  const [showFebricImageModel, setShowFebricImageModel] = useState(false);
  const [deleteFebric, setDeleteFebric] = useState<null | string>(null);
  const [deletingFebric, setDeletingFebric] = useState<boolean>(false);

  const showModelHandler = (i: null | string) => {
    setShowModel(i);
  }



  const deleteFebricHandler = (id: string) => {
    setDeleteFebric(id);
  }


  const deleteCancelHandler = () => {
    setDeleteFebric(null);
  }

  const deleteHandler = async () => {
    
  }

  const handleChange = (event: SelectChangeEvent<typeof filters>, name: string) => {

   
   const {
      target: { value },
    } = event;

    const newFiltersState = { ...filters, [name]: typeof value === 'string' ? value.split(',') : value };

    dispatch(filterFebric(newFiltersState));
    dispatch(fetchDataAction({key: EModel.Febrics, value: true}));

  };

  const setPage = () => {

  }

  useEffect(()=> {
    if(!isLoading && data) {
      dispatch(fetchedFebrics(data));
      dispatch(fetchDataAction({key: EModel.Febrics, value: false}));
    }
  }, [data])

  return (
    <>
      {/* <FebricDetails setShowFebricDetailsModel={setShowFebricDetailsModel} showFebricDetailsModel={showFebricDetailsModel} /> */}
      {/* {deleteFebric && <ConfirmationDialog

      >
        <Button variant='light' text='Cancel' onClick={deleteCancelHandler} />
        <Button variant='primary' text={deletingFebric ? 'Please wait...' : 'Confirm'} className={styles.dark__primary} size="small" onClick={deletingFebric ? null : deleteHandler} />

      </ConfirmationDialog>} */}
     

       <FebricDetailsModel
        showModel={showModel}
        setShowModel={setShowModel}
        setShowFebricImageModel={setShowFebricImageModel}
        showFebricImageModel={showFebricImageModel}
      />
     
      <DataTable

        setShowModel={setShowModel}
        tableHeader={tableHeader}
        tableData={febrics ?? []}
        showFebricModels={false}
        detailsComponents={null}
        showDetailReactNode={"View"}
        tableTitle={"Orders"}
        showToLeftButton={{ url: '/products/febric/add', label: 'Add Febric' }}
        rightButton={<Link to={'/products/febric/add'} style={{color:'black', padding: '0 0 4px 0', borderBottom: '1px solid black'}}> Add Febric </Link>}

        setShowSelectRowId={() => { }}
        filterData={filterData}
        filters={filters}
        paginate={true}
        page={page}
        setPage={setPage}
        count={1}
        loading={isLoading}
        handleFiltersOnChange={handleChange}
        primaryKey={'id'}
      />
    </>

  )
}

