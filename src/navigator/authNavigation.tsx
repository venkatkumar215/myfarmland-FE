import React, { useContext } from "react";
import { LoadingSpinner } from "../components/common/spinner/LoadingSpinner";
import LogIn from "../screens/logIn/LogIn.screen";
import AppNavigator from "./AppNavigator";
import { AuthContext } from "../context/auth/AuthContext";

const AuthNavigator = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingSpinner visible={loading} />;
  }

  return isAuthenticated ? <LogIn /> : <AppNavigator />;
};

export default AuthNavigator;
