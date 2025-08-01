import React, { useContext } from "react";
import { AuthContext } from "../context/auth/authContext";
import AppNavigator from "./appNavigator";
import LogIn from "../screens/logIn/logIn.screen";
import { LoadingSpinner } from "../components/common/spinner/loadingSpinner";

const AuthNavigator = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  

  if (loading) {
    return <LoadingSpinner visible={loading} />;
  }
  
  return isAuthenticated ? <AppNavigator /> : <LogIn />;
};

export default AuthNavigator;
