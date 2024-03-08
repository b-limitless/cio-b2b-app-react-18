import { request } from "@pasal/cio-component-library";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { APIS } from "../config/apis";

export default function useUserIsAuthenticated() {
  const navigate = useNavigate();

  useEffect(() => {
    const userIsAuthenticated = async () => {
      try {
        await request({
          url: APIS.auth.currentUser,
          method: "get",
          unauthrizedRedirect: false,
        });
        console.log("user is already logged in");
        navigate("/dashboard");
      } catch (err: any) {
        throw new Error(err);
      }
    };
    userIsAuthenticated();
  }, []);
}
