import React from "react";
import "./index.css";
import { Router } from "./routing/Router";
import { Provider } from "react-redux";
import { Store } from "./store";

export const App = () => (
  // Now fetch the current user and store here 
  <Provider store={Store}>
    <Router />
  </Provider>
  
);
