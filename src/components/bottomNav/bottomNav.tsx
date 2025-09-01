import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { RootTabParamList } from "../../config/type/uiType/navType";
import { useTheme } from "../../context/theme/ThemeContext";
import tabList from "../../config/constants/navigatorConstant";
import { IThemeType } from "../../config/type/uiType";

// Create a bottom tab navigator
// This navigator will manage the tab navigation in the app
const Tab = createBottomTabNavigator<RootTabParamList>();

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    tabBarLabelStyle: {
      fontFamily: theme.fonts.fontFamily,
      fontSize: theme.fonts.fontSize.sm,
      fontWeight: "bold",
    },
    tabBarStyle: {
      backgroundColor: theme.colors.background.secondary,
      borderTopWidth: 0,
      elevation: 0,
    },
  });
const BottomNavComponent: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  return (
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
  );
};

export default BottomNavComponent;
