import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useMemo, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { RootTabParamList } from "../../config/type/uiType/navType";
import { useTheme } from "../../context/theme/ThemeContext";
import tabList from "../../config/constants/navigatorConstant";
import { IThemeType } from "../../config/type/uiType";
import { MyFarmModal } from "../common/modal/MyFarmModal";
import CONSTANTS from "../../config/constants/commonConstant";
import AddTrackerList from "../home/AddTrackerList";
import { useGlobalStyle } from "../../styles/globalStyle";

// Create a bottom tab navigator
// This navigator will manage the tab navigation in the app
const Tab = createBottomTabNavigator<RootTabParamList>();

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    iconContainer: {
      alignItems: "center",
      borderRadius: 10,
      justifyContent: "center",
      minHeight: 31,
      minWidth: 40,
      paddingHorizontal: 0,
    },
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
  const globalStyle = useGlobalStyle();
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const handleAddPress = (): void => {
    setIsAddModalVisible(true);
  };

  const handleCloseModal = (): void => {
    setIsAddModalVisible(false);
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={({
          route,
        }: {
          route: { name: keyof RootTabParamList };
        }) => ({
          headerShown: false,
          tabBarActiveTintColor: theme.colors.icon.active,
          tabBarInactiveTintColor: theme.colors.icon.inactive,
          tabBarPressColor: "transparent",
          tabBarPressOpacity: 1,
        })}
      >
        {tabList.map((tab) => {
          const isAddTab = tab.hideName === true;
          return (
            <Tab.Screen
              key={tab.name}
              name={tab.name as keyof RootTabParamList}
              component={isAddTab ? () => null : tab.component}
              options={{
                tabBarButton: (props: any) => (
                  <TouchableOpacity
                    {...props}
                    activeOpacity={1}
                    onPress={isAddTab ? handleAddPress : props.onPress}
                    accessibilityRole="button"
                    accessibilityLabel={`${tab.name} tab`}
                    accessibilityHint={`Navigate to ${tab.name} screen`}
                    accessibilityState={{
                      selected: props.accessibilityState?.selected,
                    }}
                  />
                ),
                tabBarIcon: ({ color, focused }) => {
                  return (
                    <View
                      style={[
                        styles.iconContainer,
                        {
                          backgroundColor:
                            focused && !isAddTab
                              ? theme.colors.icon.activeBackgroundColor
                              : "transparent",
                        },
                      ]}
                      accessible={false}
                    >
                      {React.createElement(tab.iconLibrary, {
                        name: tab.iconName,
                        size: focused ? tab.focusedSize : tab.size,
                        color: isAddTab ? theme.colors.icon.active : color,
                      })}
                    </View>
                  );
                },
                tabBarLabel: isAddTab ? () => null : tab.name,
                tabBarAccessibilityLabel: `${tab.name} tab${
                  isAddTab ? ", opens action menu" : ""
                }`,
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarStyle: styles.tabBarStyle,
              }}
            />
          );
        })}
      </Tab.Navigator>
      <MyFarmModal
        visible={isAddModalVisible}
        onClose={handleCloseModal}
        headerName={CONSTANTS.TRACK_SELECTION_PROMPT}
        height={50}
      >
        <View style={globalStyle.pt4}>
          <AddTrackerList />
        </View>
      </MyFarmModal>
    </>
  );
};

export default BottomNavComponent;
