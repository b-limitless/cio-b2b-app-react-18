import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Layout } from "../components/Layout";
import { app1RoutingPrefix, app2RoutingPrefix } from "./constants";
import PleaseWait from "../components/Loader/PleaseWait";

const AuthApp = lazy(() => import("../components/Auth"));
const DashboardApp = lazy(() => import("../components/Dashboard"));


export const routes: RouteObject[] = [
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
        element: <Suspense fallback={<PleaseWait/>}><AuthApp /></Suspense>,
      },
      {
        path: `/${app2RoutingPrefix}/*`,
        element: <Suspense fallback={<PleaseWait/>}><DashboardApp /></Suspense>,
      },
    ],
  }
];