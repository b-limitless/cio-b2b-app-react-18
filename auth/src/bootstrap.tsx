import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routing/router-factory";
import { RoutingStrategy } from "./routing/types";
import "./index.css";

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
  useNavigationFromShell
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
  useNavigationFromShell:{[x:string]:Function}
}) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname });
  const root = createRoot(mountPoint);
  root.render(<RouterProvider router={router} />);

  console.log('useNavigationFromShell', useNavigationFromShell);

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
