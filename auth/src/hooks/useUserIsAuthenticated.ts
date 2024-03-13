import { request } from "@pasal/cio-component-library";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { APIS } from "../config/apis";

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
        setAuth(true);
        
      } catch (err: any) {
        throw new Error(err);
      }
    };
    userIsAuthenticated();
  }, []);
}
