import { request } from "@pasal/cio-component-library";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { APIS } from "../config/apis";
import { isDev } from "../env";
import { redirectToDashboard } from "../functions/reDirectTo";

interface IuseUserIsAuthenticated {
  setAuth: Function;
}
export default function useUserIsAuthenticated({setAuth}:IuseUserIsAuthenticated) {

  useEffect(() => {
    const userIsAuthenticated = async () => {
      try {
        await request({
          url: APIS.auth.currentUser,
          method: "get",
          unauthrizedRedirect: false,
        });

        if(setAuth) {
          setAuth(true);
        } 

        if(!isDev) {
          redirectToDashboard();
        } 
        
      } catch (err: any) {
       console.error(err);
      }
    };
    userIsAuthenticated();
  }, []);
}
