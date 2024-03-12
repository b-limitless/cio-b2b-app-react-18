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
  navigateToSignInPage
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
  navigateToSignInPage:Function;
}) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname, navigateToSignInPage });
  const root = createRoot(mountPoint);
  root.render(<RouterProvider router={router} />);

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
