import React from "react";
import "./index.css";
import { Router } from "./routing/Router";
import { Provider } from "react-redux";
import { Store } from "./store";


export const App = () => (
  // Fetch the current user in shell
  <Provider store={Store}>
    <Router />
  </Provider>
);
