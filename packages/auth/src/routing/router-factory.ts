import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from "./routes";
import { RoutingStrategy } from "./types";

interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathname?: string;
  setAuth:Function;
  navigateFromCell:Function;
}

export function createRouter({ strategy, initialPathname, setAuth, navigateFromCell }: CreateRouterProps) {
  if (strategy === 'browser') {
    return createBrowserRouter(routes({setAuth, navigateFromCell}));
  }

  const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(routes({setAuth, navigateFromCell}), { initialEntries: initialEntries });
}