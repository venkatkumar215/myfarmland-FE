import { ThemeContext } from "@react-navigation/native";
import React, { useContext, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IThemeType } from "../../config/type/ui-type";
import { useTheme } from "../../context/theme/themeContext";
import { globalStyle } from "../../styles/globalStyle";
import MyFarmText from "../common/text/myfarm-text";
import CONSTANTS from "../../config/constants/common-constant";
import { Entypo, Feather } from "@expo/vector-icons";

interface Props {}

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      height: 65,
      alignItems: "center",
      backgroundColor: theme.colors.background.primary,
      paddingHorizontal: 16,
    },
    logoContainer: {
      flex: 1,
      justifyContent: "flex-start",
    },
    logoText: {
      color: theme.colors.btn.primary,
      fontStyle: "italic",
    },
    actionContainer: {
      flex: 1,
      alignItems: "flex-end",
      paddingLeft: 10,
    },
  });

const HeaderComponent: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <View style={[globalStyle.row, styles.container]}>
        <View style={[styles.logoContainer, globalStyle.row]}>
          <View>
            <Entypo
              name="leaf"
              size={28}
              color={theme.colors.btn.primary}
              accessibilityLabel="Farm Leaf Logo"
            />
          </View>
          <MyFarmText bold fontSize="xxl" style={styles.logoText}>
            {CONSTANTS.HEADER_TITLE.MY_FARM_LAND}
          </MyFarmText>
        </View>
        <View style={styles.actionContainer}>
          <Feather name="user" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HeaderComponent;
