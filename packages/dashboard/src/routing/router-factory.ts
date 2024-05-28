import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from "./routes";
import { RoutingStrategy } from "./types";

interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathname?: string;
  navigateFromCell:Function;
}

export function createRouter({ strategy, initialPathname, navigateFromCell }: CreateRouterProps) {
  if (strategy === 'browser') {
    return createBrowserRouter(routes({navigateFromCell}));
  }

  const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(routes({navigateFromCell}), { initialEntries: initialEntries });
}