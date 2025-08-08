import React, { useMemo } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { IThemeType } from "../../../config/type/ui-type/theme-type";
import { useTheme } from "../../../context/theme/themeContext";
import MyFarmText from "../text/myfarm-text";

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  disabled?: boolean;
  fontSize?: keyof IThemeType["fonts"]["fontSize"];
  type?: "primary" | "secondary";
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
      backgroundColor: theme.colors.btn[type],
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "white",
      fontSize: theme.fonts.fontSize[fontSize],
      fontWeight: bold ? "bold" : "normal",
    },
    disabled: {
      backgroundColor: "#E0E0E0",
      color:"#BDBDBD"
    },
  });

export default MyfarmButton;
