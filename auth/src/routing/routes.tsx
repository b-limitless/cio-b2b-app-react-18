import React from 'react';
import { Outlet } from "react-router-dom";
import { NavigationManager } from "../components/NavigationManager";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import ForgotPassword from '../components/ForgotPassword';
import CreateANewPassword from '../components/CreateANewPassword';
import VerifyRegisteredAccount from '../components/VerifyRegisteredAccount';

interface IRoute {
 setAuth: Function;
 
}
export const routes =  ({setAuth}: IRoute) => {
  return [
    {
      path: "/",
      element: (
        <NavigationManager setAuth={setAuth}>
          <Outlet />
        </NavigationManager>
      ),
      children: [
        // {
        //   index: true,
        //   element: <Page1 />,
        // },
        {
          path: "page-1",
          element: <Page1 />,
        },
        // {
        //   path: "page-2",
        //   element: <Page2 />,
        // },
        {
          path: "signin",
          element: <Signin setAuth={setAuth}/>,
        },
        {
          path: "signup",
          element: <Signup/>,
        },
        {
          path: "/auth/forgot-password",
          element: <ForgotPassword/>,
        },
        {
          path: "/auth/verify",
          element: <VerifyRegisteredAccount/>,
        }
      ],
    },
  ];
  
}