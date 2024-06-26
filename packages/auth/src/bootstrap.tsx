import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { createRouter } from "./routing/router-factory";
import { RoutingStrategy } from "./routing/types";
import { Store } from "./store";


const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
  setAuth,
  navigateFromCell
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
  setAuth: Function;
  navigateFromCell: Function;
}) => {

  const router = createRouter({
    strategy: routingStrategy,
    initialPathname,
    setAuth, 
    navigateFromCell
  }
  );
  const root = createRoot(mountPoint);


  root.render(
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  );

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
