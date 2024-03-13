import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";
import useSetAuthenticatedUser from "../hooks/useSetAuthenticatedUser";

const browserRouter = createBrowserRouter(routes);

export function Router() {
  useSetAuthenticatedUser()
  return (
    <RouterProvider router={browserRouter} />
  );
}
