import React, { useContext } from "react";
import { AuthContext } from "../context/auth/authContext";
import AppNavigator from "./appNavigator";
import LogIn from "../screens/logIn/logIn.screen";
import { LoadingSpinner } from "../components/common/spinner/loadingSpinner";
import { Text, View } from "react-native";

const AuthNavigator = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingSpinner visible={loading} />;
  }

  return isAuthenticated ? <LogIn /> : <AppNavigator />;
};

export default AuthNavigator;
