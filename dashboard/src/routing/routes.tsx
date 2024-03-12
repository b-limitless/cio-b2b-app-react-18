import React from 'react';
import { Outlet } from "react-router-dom";
import { NavigationManager } from "../components/NavigationManager";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import Dashboard from '../components/dashboard/Dashboard/Dashboard';
import Febric from '../components/product/Febric/Febric';

interface IRoutes {
  navigateToSignInPage:Function;
}
export const routes = ({navigateToSignInPage}: IRoutes) => {
  return [
    {
      path: "/",
      element: (
        <NavigationManager navigateToSignInPage={navigateToSignInPage}>
          <Outlet />
        </NavigationManager>
      ),
      children: [
        {
          index: true,
          element: <Page1 />,
        },
        {
          path: "page-1",
          element: <Page1 />,
        },
        {
          path: "page-2",
          element: <Page2 />,
        },
        {
          path:"home",
          element: <Dashboard />
        }, 
        {
          path:"/products/febric",
          element: <Febric />
        }
        
       
      ],
    },
  ];
}
