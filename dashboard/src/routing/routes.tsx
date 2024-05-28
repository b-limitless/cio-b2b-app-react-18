import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationManager } from '../components/NavigationManager';
import Dashboard from '../components/dashboard/Dashboard/Dashboard';
import ListOrder from '../components/order/order/List';
import AddFebric from '../components/product/Febric/Add';
import Febric from '../components/product/Febric/Febric';
import { Page1 } from '../pages/Page1';

interface IRoutes {
  navigateFromCell:Function;
}
export const routes = ({navigateFromCell}: IRoutes) => {
  return [
    {
      path: '/',
      element: (
        <NavigationManager navigateFromCell={navigateFromCell}>
          <Outlet />
        </NavigationManager>
      ),
      children: [
        {
          path:'home',
          element: <Dashboard />
        }, 
        {
          path:'/products/febric',
          element: <Febric />
        }, 
        {
          path:'/products/febric/add',
          element: <AddFebric />
        }, 
        {
          path:'/orders',
          element: <ListOrder />
        }, 

        
       
      ],
    },
  ];
}
