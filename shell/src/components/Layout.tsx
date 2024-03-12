import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { app1RoutingPrefix, app2RoutingPrefix } from '../routing/constants';

export function Layout() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      {/* <nav style={{ marginBottom: "3rem" }}>
        <Link to={`/${app1RoutingPrefix}/signin`} style={{ marginRight: "1rem" }}>
       Signin
        </Link>
        <Link to={`/${app1RoutingPrefix}/signup`} style={{ marginRight: "1rem" }}>
          Signup
        </Link> 
        <Link to={`/${app2RoutingPrefix}/home`} style={{ marginRight: "1rem" }}>
          Dashboard/home
        </Link>
        <Link to={`/${app2RoutingPrefix}/page-1`}>dashboard page</Link>
      </nav> */}
      <Outlet /> 
    </>
  );
}
