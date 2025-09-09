import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  TextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { IThemeType } from "../../../config/type/uiType/themeType";
import { useTheme } from "../../../context/theme/ThemeContext";
import { useGlobalStyle } from "../../../styles/globalStyle";

/**
 *
 * MyFarmText is a custom text component that applies theme-based styles.
 *
 * @interface Props
 * @typedef {Props}
 * @extends {TextProps}
 */
interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  bold?: boolean;
  fontSize?: keyof IThemeType["fonts"]["fontSize"];
  color?: keyof IThemeType["colors"]["text"];
  enableStar?: boolean;
}

/**
 * * createStyles generates styles for the MyFarmText component based on the theme, font size, boldness, and color.
 *
 * @param {IThemeType} theme
 * @param {keyof IThemeType["fonts"]["fontSize"]} fontSize
 * @param {boolean} bold
 * @param {keyof IThemeType["colors"]["text"]} color
 * @returns {*}
 */
const createStyles = (
  theme: IThemeType,
  fontSize: keyof IThemeType["fonts"]["fontSize"],
  bold: boolean,
  color: keyof IThemeType["colors"]["text"]
) =>
  StyleSheet.create({
    text: {
      color: theme.colors.text[color],
      fontFamily: theme.fonts.fontFamily,
      fontSize: theme.fonts.fontSize[fontSize] || theme.fonts.fontSize.md,
      fontWeight: bold ? "bold" : "normal",
    },
    textStar: {
      color: "red",
    },
  });

const MyFarmText: React.FC<Props> = ({
  children,
  bold = false,
  fontSize = "md",
  color = "primary",
  style,
  enableStar = false,
  ...props
}) => {
  const theme = useTheme();
  const globalStyle = useGlobalStyle();

  const styles = useMemo(
    () => createStyles(theme, fontSize, bold, color),
    [theme, fontSize, bold, color]
  );

  return (
    <Text style={[styles.text, style, globalStyle.row]} {...props}>
      {children}
      {enableStar && <Text style={styles.textStar}> {"*"}</Text>}
    </Text>
  );
};

export default MyFarmText;
