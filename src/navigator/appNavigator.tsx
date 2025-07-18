import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import HeaderComponent from "../components/headerComponent/headerComponent";
import { useTheme } from "../context/theme/themeContext";
import tabList from "../config/constants/navigator-constant";

type RootTabParamList = {
  Marketing: undefined;
  Crops: undefined;
  Home: undefined;
  Settings: undefined;
  Task: undefined;
};

// Create a bottom tab navigator
// This navigator will manage the tab navigation in the app
const Tab = createBottomTabNavigator<RootTabParamList>();

// Define the main AppNavigator component
// This component will render the tab navigator with the defined tabs
const AppNavigator: React.FC = () => {
  // This hook provides the current theme (light or dark) and its properties
  const theme = useTheme();

  // Define styles for the tab bar
  // These styles will be applied to the tab bar and its items
  const styles = StyleSheet.create({
    tabBarLabelStyle: {
      fontSize: theme.fonts.fontSize.sm,
      fontFamily: theme.fonts.fontFamily,
      fontWeight: "bold",
    },
    tabBarStyle: {
      backgroundColor: theme.colors.background.secondary,
      borderTopWidth: 0,
      elevation: 0,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      backgroundColor: theme.colors.background.primary,
    },
  });

  return (
    <View style={styles.container}>
      {/* Header component for the app */}
      <HeaderComponent />

      <Tab.Navigator
        screenOptions={({
          route,
        }: {
          route: { name: keyof RootTabParamList };
        }) => ({
          headerShown: false,
          tabBarActiveTintColor: theme.colors.icon.active,
          tabBarInactiveTintColor: theme.colors.icon.inactive,
        })}
      >
        {tabList.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name as keyof RootTabParamList}
            component={tab.component}
            options={{
              tabBarIcon: ({ color, focused }) => {
                return React.createElement(tab.iconLibrary, {
                  name: tab.iconName,
                  size: focused ? 25 : 20,
                  color,
                });
              },
              tabBarLabelStyle: styles.tabBarLabelStyle,
              tabBarStyle: styles.tabBarStyle,
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default AppNavigator;
