import React, { Children, useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useGlobalStyle } from "../../../styles/globalStyle";
import { useTheme } from "../../../context/theme/ThemeContext";
import { IThemeType } from "../../../config/type/uiType";
import { no } from "zod/v4/locales";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  border?: boolean;
  background?: "primary" | "secondary" | "active" | "caution" | "warning";
}
const createStyles = (
  theme: IThemeType,
  border: boolean,
  background: "primary" | "secondary" | "active" | "caution" | "warning"
) =>
  StyleSheet.create({
    cardContainer: {
      borderRadius: 12,
      padding: 10,
      borderWidth: border ? 1 : 0,
      borderColor: theme.colors.border.primary,
      borderStyle: border ? "solid" : undefined,
      backgroundColor: background
        ? theme.colors.background[background]
        : "transparent",
    },
  });
const MyFarmCard: React.FC<Props> = ({
  children,
  style,
  border = false,
  background = "secondary",

  ...props
}) => {
  const globalStyle = useGlobalStyle();
  const theme = useTheme();
  const styles = useMemo(
    () => createStyles(theme, border, background),
    [theme, border]
  );
  return (
    <View style={[styles.cardContainer, globalStyle.column, style]} {...props}>
      {children}
    </View>
  );
};

export default MyFarmCard;
