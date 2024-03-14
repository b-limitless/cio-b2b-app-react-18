import React, { lazy, Suspense } from "react";
import {RouteObject } from "react-router-dom";
import { Layout } from "../components/Layout";
import { app1RoutingPrefix, app2RoutingPrefix } from "./constants";
import PleaseWait from "../components/Loader/PleaseWait";
import { IAuth } from "../interfaces/auth.interface";

const AuthApp = lazy(() => import("../components/Auth"));
const DashboardApp = lazy(() => import("../components/Dashboard"));


export const routes = ({auth, setAuth}: IAuth): RouteObject[] => {
  return [
    {
      path: '/',
      element: <Layout />,
      children: [
        // {
        //   index: true,
        //   element: <Navigate to={`/${app1RoutingPrefix}`} />,
        // },
        {
          path: `/${app1RoutingPrefix}/*`,
          element: <Suspense fallback={<PleaseWait />}><AuthApp auth={auth} setAuth={setAuth}/></Suspense>,
        },
        {
          path: `/${app2RoutingPrefix}/*`,
          element: <Suspense fallback={<PleaseWait />}><DashboardApp auth={auth} setAuth={setAuth}/></Suspense>,
        },
      ],
    }
  ];
}