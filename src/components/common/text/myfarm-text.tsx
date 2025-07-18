import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  TextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { ThemeType } from "../../../config/type/ui-type/theme-type";
import { useTheme } from "../../../context/theme/themeContext";

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
  fontSize?: keyof ThemeType["fonts"]["fontSize"];
  color?: keyof ThemeType["colors"]["text"];
}

/**
 * * createStyles generates styles for the MyFarmText component based on the theme, font size, boldness, and color.
 *
 * @param {ThemeType} theme
 * @param {keyof ThemeType["fonts"]["fontSize"]} fontSize
 * @param {boolean} bold
 * @param {keyof ThemeType["colors"]["text"]} color
 * @returns {*}
 */
const createStyles = (
  theme: ThemeType,
  fontSize: keyof ThemeType["fonts"]["fontSize"],
  bold: boolean,
  color: keyof ThemeType["colors"]["text"]
) =>
  StyleSheet.create({
    text: {
      fontWeight: bold ? "bold" : "normal",
      fontSize: theme.fonts.fontSize[fontSize] || theme.fonts.fontSize.md,
      color: theme.colors.text[color] || theme.colors.text.primary,
      fontFamily: theme.fonts.fontFamily,
    },
  });

const MyFarmText: React.FC<Props> = ({
  children,
  bold = false,
  fontSize = "md",
  color = "primary",
  style,
  ...props
}) => {
  const theme = useTheme();

  const styles = useMemo(
    () => createStyles(theme, fontSize, bold, color),
    [theme, fontSize, bold, color]
  );

  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default MyFarmText;
