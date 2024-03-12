import { useNavigate } from "react-router-dom";

export const useNavigationFromShell = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/dashboard/home");
  };

  const navigateToSignin = () => {
    navigate("/auth/signin");
  }

  return {
    navigateToDashboard, 
    navigateToSignin
  }
};
