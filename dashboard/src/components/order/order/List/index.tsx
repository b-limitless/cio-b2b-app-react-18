import React, { useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { DataTable, camelCaseToNormal } from "@pasal/cio-component-library";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../apis-requests/order";
import { fetchOrderDetails } from "../../../../apis-requests/order/orderDetails";
import { queryKeys } from "../../../../config/queryKeys";
import { fetchOrdersAction, filterOrders, paginateFebric } from "../../../../reducers/orderSlice";
import { RootState } from "../../../../store";
import { paymentStatus } from "../../../../types&Enums/payment.status.type";
import OrderSideModel from "../../SideModel";
import styles from "./list.module.scss";
import { OrderStatus } from "./status.type";
import { EModel, fetchDataAction, shouldFetchDataSlice } from '../../../../reducers/shoudFetchSlice';

type Props = {}



export default function ListOrder({ }: Props) {
  const dispatch = useDispatch();
  const [showModel, setShowModel] = useState<string | null>(null);
  const {order} = useSelector((state:RootState) => state.shouldFetch);
  const {orders} = useSelector((state:RootState) => state.orders);

  const { filters, page } = useSelector((state: RootState) => state.orders);

  const queryParams = {
    filters: JSON.stringify(filters),
    page
  };

  const { data, isLoading, error } = useQuery({
    queryKey: [queryKeys.fetchOrders, queryParams],
    queryFn: () => fetchOrders(queryParams),
    enabled: order
  });

  useQuery(
    {
      queryKey: [queryKeys.fetchOrderDetails, showModel], // Include showModel in the query key
      queryFn: () => {
        if (showModel) {
          return fetchOrderDetails(showModel);
        } else {
          return null;
        }

      }
    }
  );


  const filterData = [
    {
      label: "Order Status",
      data: OrderStatus.map(item => camelCaseToNormal(item, true)),
      id: "orderStatus"
    },
    {
      label: "Payment Status",
      data: paymentStatus,
      id: "paymentStatus"
    },
  ];

  const tableHeader = ["status", "paymentStatus", "modelType", "subTotal", "qty", "createdAt", "action"];

  const setPage = () => {
    dispatch(paginateFebric(page));
  }

  const handleChange = (event: SelectChangeEvent<typeof filters>, name: string) => {

    const {
      target: { value },
    } = event;

    const newFiltersState = { ...filters, [name]: typeof value === 'string' ? value.split(',') : value };

    dispatch(filterOrders(newFiltersState));
    dispatch(fetchDataAction({key: EModel.Order, value: true}));
    // dispatch(fetchDataAction({key: 'order', value: false}));
  };

  const count = useMemo(() => {
    return Math.ceil(data?.affectedRows / data?.limit) ?? 0;
  }, [data]);

  useEffect(() => {
    if(data && !isLoading && !error) {
      dispatch(fetchOrdersAction(data));
      dispatch(fetchDataAction({key: EModel.Order, value: false}));
      
    }
  }, [data, isLoading, error]);


  return (
    <>
      <OrderSideModel
        showModel={showModel}
        setShowModel={setShowModel}
      />
      {error && <div className="error">{error.toString()}</div>}
      <div className={styles.dataTableContainer}>

        <DataTable
          setShowModel={setShowModel}
          tableHeader={tableHeader}
          tableData={orders ?? []}
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
          primaryKey={'_id'}
        />
      </div>

    </>


  )
}