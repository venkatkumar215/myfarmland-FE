import React, { useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useGlobalStyle } from "../../../styles/globalStyle";
import { useTheme } from "../../../context/theme/ThemeContext";
import { IThemeType } from "../../../config/type/uiType";

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
      backgroundColor: background
        ? theme.colors.background[background]
        : "transparent",
      borderColor: theme.colors.border.primary,
      borderRadius: 12,
      borderStyle: border ? "solid" : undefined,
      borderWidth: border ? 1 : 0,
      padding: 10,
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
