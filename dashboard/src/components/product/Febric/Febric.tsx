import { SelectChangeEvent } from '@mui/material/Select';
import { Button, DataTable, svgCDNAssets } from '@pasal/cio-component-library';
import { request } from '../../../utils/request';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { affectedRowAction, fetchedFebrics, filterFebric, updateFebric } from '../../../reducers/productSlice';
import { APIS } from '../../../config/apis';
import { brightness, febricSeasons } from '../../../config/febric';
import { ProductInterface } from '../../../interfaces/febric.interface';
import { RootState } from '../../../store';
import ConfirmationDialog from '../../common/Confimation/ConfirmationDialog';
import FebricDetailsModel from './FebricDetailsModel';
import FebricImageModel from './FebricImageModel';
import styles from './styles.module.scss';
import { useQuery } from '@tanstack/react-query';
import { fetchFebric } from '../../../apis-requests/febric';
import { EModel, fetchDataAction } from '../../../reducers/shoudFetchSlice';
import { queryKeys } from '../../../config/queryKeys';
import { fetchFebricDetails } from '../../../apis-requests/febric/febricDetails';


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


interface FebricInterface {
  product: ProductInterface;
  actions: any;
  globalDispatch: any
}

export default function Febric() {
  const customStyle = {
    cursor: 'pointer'
  }
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

    const {data: febricDetails} = useQuery(
      {
        queryKey: [queryKeys.fetchOrderDetails, showModel], // Include showModel in the query key
        queryFn: () => {
          if (showModel) {
            return fetchFebricDetails(showModel);
          } else {
            return null;
          }
  
        }
      }
    );
  

  // const [, setPage] = useState<number>(0);
  const [showFebricImageModel, setShowFebricImageModel] = useState(false);
  const [deleteFebric, setDeleteFebric] = useState<null | string>(null);
  const [deletingFebric, setDeletingFebric] = useState<boolean>(false);



  const showModelHandler = (i: null | string) => {
    setShowModel(i);
  }

  const editFebricHandler = (febric: string) => {
    dispatch(updateFebric(febric));
  }

  const deleteFebricHandler = (id: string) => {
    setDeleteFebric(id);
  }


  const deleteCancelHandler = () => {
    setDeleteFebric(null);
  }

  const deleteHandler = async () => {
    setDeletingFebric(true)
    try {
      await request({
        method: 'delete',
        url: `${APIS.product.new}/${deleteFebric}`
      });
      dispatch(fetchFebrics(febrics.filter((febric) => febric.id !== deleteFebric)));
      setDeleteFebric(null);
    } catch (err: any) {
      console.error(err);
      throw new Error(err);
    }
    setDeletingFebric(false)
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
      {deleteFebric && <ConfirmationDialog

      >
        <Button variant='light' text='Cancel' onClick={deleteCancelHandler} />
        <Button variant='primary' text={deletingFebric ? 'Please wait...' : 'Confirm'} className={styles.dark__primary} size="small" onClick={deletingFebric ? null : deleteHandler} />

      </ConfirmationDialog>}
      {/* {showModel} && <FebricImageModel
        febric={showModel !== -1 ? febrics[showModel] : null}
        showFebricImageModel={showFebricImageModel}
        setShowFebricImageModel={setShowFebricImageModel}
      /> */}

      {showModel && <FebricDetailsModel
        showModel={showModel}
        setShowModel={setShowModel}
        setShowFebricImageModel={setShowFebricImageModel}
        showFebricImageModel={showFebricImageModel}
      />}
      {/* <DataTable
        setShowModel={setShowModel}
        tableHeader={tableHeader}
        // tableData={mockFebrics.slice(page * count, count + (page * count))}
        tableData={febrics ?? []}
        // showFebricModels={showModel}
        detailsComponents={null}
        showDetailReactNode={<img src={svgCDNAssets.eye} />}
        tableTitle={'Febrics'}
        showToLeftButton={{ url: '/products/febric/add', label: 'Add Febric' }}
        setShowSelectRowId={undefined}
        filterData={filterData}
        filters={filters}
        // setFilters={setFilters}
        paginate={true}
        page={page}
        setPage={setPage}
        count={Math.ceil(affectedRows/perPage)}
        loading={loading}
        rightButton={<Link to={'/products/febric/add'}><Button variant='primary' text={'Add'} /></Link>}
        handleFiltersOnChange={handleChange}
        primaryKey={'id'}
      /> */}
      <DataTable

        setShowModel={setShowModel}
        tableHeader={tableHeader}
        tableData={febrics ?? []}
        showFebricModels={false}
        detailsComponents={null}
        showDetailReactNode={"Edit"}
        tableTitle={"Orders"}
        // There is an issue with this props please check 
        // enabling one props should show the button but I have to add both of them 
        showToLeftButton={{ url: '/products/febric/add', label: 'Add Febric' }}
        rightButton={<Link to={'/products/febric/add'}><Button variant='primary' text={'Add'} /></Link>}

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

