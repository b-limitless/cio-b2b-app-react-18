import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from "./routes";
import { RoutingStrategy } from "./types";

interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathname?: string;
  navigateToSignInPage:Function;
}

export function createRouter({ strategy, initialPathname, navigateToSignInPage }: CreateRouterProps) {
  if (strategy === 'browser') {
    return createBrowserRouter(routes({navigateToSignInPage}));
  }

  const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(routes({navigateToSignInPage}), { initialEntries: initialEntries });
}