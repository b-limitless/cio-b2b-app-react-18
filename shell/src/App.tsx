import React, { useState } from "react";
import "./index.css";
import { Router } from "./routing/Router";

export const App = () => {
  const [auth, setAuth] = useState(null);
  
  return <Router auth={auth} setAuth={setAuth} /> 
}
  

