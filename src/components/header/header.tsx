import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IThemeType } from "../../config/type/uiType";
import { useTheme } from "../../context/theme/ThemeContext";
import { useGlobalStyle } from "../../styles/globalStyle";
import MyFarmText from "../common/text/MyfarmText";
import CONSTANTS from "../../config/constants/commonConstant";
import { Entypo, Feather } from "@expo/vector-icons";

interface Props {}

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    actionContainer: {
      alignItems: "flex-end",
      flex: 1,
      paddingLeft: 10,
    },
    container: {
      alignItems: "center",
      backgroundColor: theme.colors.background.primary,
      height: 65,
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
  });

const HeaderComponent: React.FC<Props> = () => {
  const globalStyle = useGlobalStyle();
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
