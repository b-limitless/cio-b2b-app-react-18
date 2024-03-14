import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routing/router-factory";
import { RoutingStrategy } from "./routing/types";
import "./index.css";
import { Provider, useDispatch } from "react-redux";
import { Store } from "./store";
import { updateNavigation } from "./reducers/navigationSlice";


const DispatchNavigation = ({data}:{data:any}) => {
  const [auth, seAuth] = useState<boolean>();
  const dispatch = useDispatch();

  useEffect(() => {
    seAuth(true);
  }, []);

  return null;
}
const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
  setAuth, 
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
  setAuth:Function;
  navigateFromCell:Function;
}) => {
  
  const router = createRouter({ 
            strategy: routingStrategy, 
            initialPathname, 
            setAuth
          }
         );
  const root = createRoot(mountPoint);


  root.render(
    <Provider store={Store}>
      {/* <DispatchNavigation data={useNavigationFromShell}/> */}
      <RouterProvider router={router} />
    </Provider>
  );

  // console.log('useNavigationFromShell', useNavigationFromShell);

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
