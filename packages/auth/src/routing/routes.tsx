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

// re-validate
interface IRoute {
 setAuth: Function;
 navigateFromCell:Function;
 
}
export const routes =  ({setAuth, navigateFromCell}: IRoute) => {
  return [
    {
      path: "/",
      element: (
        <NavigationManager setAuth={setAuth}>
          <Outlet />
        </NavigationManager>
      ),
      children: [
        {
          index: true,
          element: <Signin setAuth={setAuth}/>,
        },
        
        
        {
          path: "signin",
          element: <Signin setAuth={setAuth}/>,
        },
        {
          path: "signup",
          element: <Signup/>,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword/>,
        },
        {
          path: "verify",
          element: <VerifyRegisteredAccount navigateFromCell={navigateFromCell}/>,
        }
      ],
    },
  ];
  
}