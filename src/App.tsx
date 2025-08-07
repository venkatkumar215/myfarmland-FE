import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./context/theme/themeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import AuthNavigator from "./navigator/authNavigation";
import { AuthProvider } from "./context/auth/authContext";

export default function App() {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null; // or splash screen
  }

  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <StatusBar style="auto" />

              <AuthNavigator />
            </NavigationContainer>
          </SafeAreaProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
