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
import { useQuery } from "react-query";
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


  const { data, isLoading, error } = useQuery(['fetchOrders', queryParams], () => fetchOrders(queryParams));
  // const {data: orderDetails, isLoading: orderDetailsLoading} = useQuery('fetchOrderDetails',  () => fetchOrderDetails(cartId));
  
  // console.log('orderDetails', orderDetails);
  
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


  const count = useMemo(() => {
    return Math.ceil(data?.affectedRows / data?.limit) ?? 0;
  }, [data])

  // // Fetching the order details when user clicked
  // useEffect(() => {
  //   if(showModel !== false && typeof showModel === 'number') {
  //     const {cartId} = data.orders[showModel];
  //     // sed set he id to send the request
  //     setCartId(cartId);
  //   } 

  //   if(showModel === false) {
  //     setCartId(null);
  //   }
  // }, [showModel, data]);

  console.log('showMOde', showModel)

  return (
    <>
    <div onClick={() => setTesting('local component')}>{testing}</div>
       <OrderSideModel
        showModel={showModel !== false}
        setShowModel={setShowModel}
      /> 
      {error && <div className="error">{error.toString()}</div>}
      <div className={styles.dataTableContainer}>
        {/* {!isLoading && data.orders.length > 0 } */}
        <DataTable
          setShowModel={setShowModel}
          tableHeader={tableHeader}
          tableData={data?.orders ?? []} //orderMockData.slice(0, 8)
          showFebricModels={false}
          detailsComponents={null}
          showDetailReactNode={"Edit"}
          tableTitle={"Orders"}
          showToLeftButton={null}
          setShowSelectRowId={() => { }}
          filterData={filterData}
          filters={filters} 
          // setFilters={setFilters}
          paginate={true}
          page={page}
          setPage={setPage}
          count={count}
          loading={isLoading}
          handleFiltersOnChange={handleChange}
          primaryKey={'cartId'}
        />
      </div>
      {/* <Button text="sdf" variant="primary"/> */}
      {/* <Button text="all" variant="secondary"/>
    */}
    </>


  )
}