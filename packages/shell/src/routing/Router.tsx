import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";
import { IAuth } from "../interfaces/auth.interface";


interface IRouter extends IAuth {

}

export function Router({ auth, setAuth }: IRouter) {
  const browserRouter = createBrowserRouter(routes({ auth, setAuth }));
  return (
    <RouterProvider router={browserRouter} />
  );
}
