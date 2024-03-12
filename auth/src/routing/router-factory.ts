import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from "./routes";
import { RoutingStrategy } from "./types";

interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathname?: string;
  setAuth:Function;
}

export function createRouter({ strategy, initialPathname, setAuth }: CreateRouterProps) {
  if (strategy === 'browser') {
    return createBrowserRouter(routes({setAuth}));
  }

  const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(routes({setAuth}), { initialEntries: initialEntries });
}