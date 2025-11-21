import React, { useMemo } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { IThemeType } from "../../../config/type/uiType/themeType";
import { useTheme } from "../../../context/theme/ThemeContext";
import MyFarmText from "../text/MyFarmText";

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  disabled?: boolean;
  fontSize?: keyof IThemeType["fonts"]["fontSize"];
  type?: "primary" | "secondary" | "tertiary";
  bold?: boolean;
  // add more props as needed
}

const MyfarmButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  disabled,
  fontSize,
  type,
  bold,
}) => {
  const theme = useTheme();
  const styles = useMemo(
    () => createStyle(theme, fontSize, type, bold),
    [theme]
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled && styles.disabled]}
      activeOpacity={0.7}
      disabled={disabled}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Press to ${title}`}
    >
      <MyFarmText style={styles.text}>{title}</MyFarmText>
    </TouchableOpacity>
  );
};

const createStyle = (
  theme: IThemeType,
  fontSize: keyof IThemeType["fonts"]["fontSize"] = "lg",
  type: ButtonProps["type"] = "primary",
  bold: boolean = false
) =>
  StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: theme.colors.btn[type],
      borderRadius: 10,
      justifyContent: "center",
      paddingHorizontal: 20,
      paddingVertical: 12,
    },
    disabled: {
      backgroundColor: "#E0E0E0",
      color: "#BDBDBD",
    },
    text: {
      color: "white",
      fontSize: theme.fonts.fontSize[fontSize],
      fontWeight: bold ? "bold" : "normal",
    },
  });

export default MyfarmButton;
