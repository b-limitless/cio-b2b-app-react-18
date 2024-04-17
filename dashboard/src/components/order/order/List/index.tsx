import { DataTable, camelCaseToNormal } from "@pasal/cio-component-library";
import React, { useEffect, useMemo, useState } from "react";
import orderMockData from "../../../../mock/order.json";
import { OrderStatus } from "./status.type";
import { SelectChangeEvent } from '@mui/material/Select';
import { paymentStatus } from "../../../../types&Enums/payment.status.type";
import OrderSideModel from "../../SideModel";
import styles from "./list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { filterOrders } from "../../../../reducers/orderSlice";
import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchOrders } from "../../../../apis-requests/order";
import { fetchOrderDetails } from "../../../../apis-requests/order/orderDetails";

type Props = {}



export default function ListOrder({ }: Props) {
  const [showModel, setShowModel] = useState<string | null>(null);
  const [cartId, setCartId] = useState<null | string>(null);

  const {filters, page} = useSelector((state:RootState) => state.orders);
  const [testing, setTesting] = useState('intially')

  const queryParams = {
    filters: JSON.stringify(filters),
    page
  };


  // const queryCache = new QueryCache({
  //   onError: (error) => {
  //     console.log(error)
  //   },
  //   onSuccess: (data) => {
  //     console.log(data)
  //   },
  //   onSettled: (data, error) => {
  //     console.log(data, error)
  //   },
  // })

  // const queryClient = useQueryClient();

  // useEffect(() => {
  //   // Get the query cache
  //   const queryCache = queryClient.getQueryCache();
  
  //   // Get all cached queries
  //   const cachedQueries = queryCache.getAll();

  
  //   // Iterate over all keys in the query cache
  //   Object.keys(cachedQueries).forEach((queryKey) => {
  //     const queryData = queryCache.get(queryKey);
  //     console.log('Query key:', queryKey);
  //     console.log('Query data:', queryData);
  //   });
  // }, [queryClient, showModel]); // Empty dependency array ensures this effect runs only once, after component mount
  const queryClient = useQueryClient()
  const queryCache = queryClient.getQueryCache();
  const query = queryCache.find({ queryKey: ['posts'] });


  // const { data, isLoading, error } = useQuery(['fetchOrders', queryParams], () => fetchOrders(queryParams));
  
  // const {data, isLoading, error} = useQuery({ queryKey: ['fetchOrders'], queryFn: () => fetchOrders(queryParams) })

  // const { data: orderDetails, isLoading: orderDetailsLoading } = useQuery(
  //   ['fetchOrderDetails', showModel], // Pass showModel as a dependency
  //   () => fetchOrderDetails(showModel)
  // );
  
  
  const filterData = [
    {
      label: "Order Status",
      data:  OrderStatus.map(item => camelCaseToNormal(item, true)),
      id: "orderStatus"
    },
    {
      label: "Payment Status",
      data: paymentStatus,
      id: "paymentStatus"
    },
  ];
  // const count = 8;
  

 
  
  // const [filters, setFilters] = React.useState<any>({ orderStatus: [], paymentStatus: [] });

  const dispatch = useDispatch();
 
  const tableHeader = ["status", "paymentStatus", "modelType", "subTotal", "qty", "createdAt", "action"];

  // normalizeDataForVisual(orderMockData, "orderStatus", colorsForTableFields);
  // normalizeDataForVisual(orderMockData, "paymentStatus", colorsForPaymentStatus);

  const setPage = () => {
  }
 
  const handleChange = (event: SelectChangeEvent<typeof filters>, name: string) => {

    // if (!setFilters) return;

    const {
      target: { value },
    } = event;

    const newFiltersState = { ...filters, [name]: typeof value === 'string' ? value.split(',') : value };

    dispatch(filterOrders(newFiltersState));

  };


  // const count = useMemo(() => {
  //   return Math.ceil(data?.affectedRows / data?.limit) ?? 0;
  // }, [data])


  return (
    <>
    <div onClick={() => setTesting('local component')}>{testing}</div>
       <OrderSideModel
        showModel={showModel}
        setShowModel={setShowModel}
      /> 
      {/* {error && <div className="error">{error.toString()}</div>}
      <div className={styles.dataTableContainer}>
        
        <DataTable
          setShowModel={setShowModel}
          tableHeader={tableHeader}
          tableData={data?.orders ?? []} 
          showFebricModels={false}
          detailsComponents={null}
          showDetailReactNode={"Edit"}
          tableTitle={"Orders"}
          showToLeftButton={null}
          setShowSelectRowId={() => { }}
          filterData={filterData}
          filters={filters} 
          paginate={true}
          page={page}
          setPage={setPage}
          count={count}
          loading={isLoading}
          handleFiltersOnChange={handleChange}
          primaryKey={'cartId'}
        />
      </div> */}
     
    </>


  )
}