import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { AuthContext } from "../../context/auth/authContext";
import AppNavigator from "../../navigator/appNavigator";
import LogIn from "../../screens/logIn/logIn.screen";

const AuthNavigator = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6F8C52" />
      </View>
    );
  }

  return isAuthenticated ? <AppNavigator /> : <LogIn />;
};

export default AuthNavigator;
