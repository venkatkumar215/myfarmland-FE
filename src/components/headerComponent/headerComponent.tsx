import React, { useMemo } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyFarmText from "../common/text/myfarm-text";
import { useTheme } from "../../context/theme/themeContext";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import CONSTANTS from "../../config/constants/common-constant";
import { ThemeType } from "../../config/type/ui-type/theme-type";

/**
 *
 * HeaderComponent is a reusable header component that displays a title, optional icons, and handles actions.
 *
 * @interface HeaderComponentProps
 * @typedef {HeaderComponentProps}
 */
interface HeaderComponentProps {
  title?: string;
  showNotification?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

/**
 *
 * createStyle generates styles for the HeaderComponent based on the current theme.
 *
 * @param {ThemeType} theme
 * @returns {*}
 */
const createStyle = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      height: 65,
      alignItems: "center",
      backgroundColor: theme.colors.icon.active,
      paddingHorizontal: 10,
    },
    headerLogo: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    headerIcon: {
      marginRight: 10,
    },
    headerActionIcon: {
      alignItems: "flex-end",
      justifyContent: "center",
    },
  });

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  title = CONSTANTS.HEADER_TITLE.MY_FARM_LAND,
  showNotification = true,
  leftIcon,
  rightIcon,
  onRightIconPress,
}) => {
  const theme = useTheme();

  const styles = useMemo(() => createStyle(theme), [theme]);

  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <View style={styles.container}>
        <View style={styles.headerLogo}>
          <View style={styles.headerIcon}>
            {leftIcon ?? (
              <Entypo
                name="leaf"
                size={28}
                color={theme.colors.icon.secondary}
                accessibilityLabel="Farm Leaf Logo"
              />
            )}
          </View>
          <MyFarmText bold fontSize="xxl" color="secondary">
            {title}
          </MyFarmText>
        </View>
        <View style={styles.headerActionIcon}>
          {rightIcon ? (
            rightIcon
          ) : showNotification ? (
            <TouchableOpacity onPress={onRightIconPress}>
              <FontAwesome5
                name="bell"
                size={28}
                color={theme.colors.icon.secondary}
                accessibilityLabel="Notifications"
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderComponent;
