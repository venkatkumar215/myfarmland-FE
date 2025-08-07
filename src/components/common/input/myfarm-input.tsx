import React, { forwardRef, useEffect, useMemo } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  StyleProp,
  TextStyle,
} from "react-native";
import { IThemeType } from "../../../config/type/ui-type/theme-type";
import { useTheme } from "../../../context/theme/themeContext";

// Define the props for the MyfarmInput component
// It extends the TextInput props and adds custom properties for styling and error handling
type Props = React.ComponentProps<typeof TextInput> & {
  children?: React.ReactNode;
  fontSize?: keyof IThemeType["fonts"]["fontSize"];
  errorMessage?: string;
  errorFlag?: boolean;
  style?: StyleProp<TextStyle>;
  bottomBorder?: boolean;
  rightIcon?: React.ReactNode;
};

// Create styles for the MyfarmInput component
// This function generates styles based on the current theme and other properties
const styles = (
  theme: IThemeType,
  fontSize: keyof IThemeType["fonts"]["fontSize"],
  bottomBorder: boolean
) =>
  StyleSheet.create({
    container: {
      width: "100%",
      marginVertical: 8,
      flexDirection: "column",
    },
    inputContainer: {
      position: "relative",
      width: "100%",
      height: 50,
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      flex: 1,
      height: "100%",
      borderColor: theme.colors.inputText.secondary,
      borderWidth: 1,
      borderBottomWidth: bottomBorder ? 2 : 1,
      borderTopWidth: bottomBorder ? 0 : 1,
      borderLeftWidth: bottomBorder ? 0 : 1,
      borderRightWidth: bottomBorder ? 0 : 1,
      borderRadius: bottomBorder ? 0 : 10,
      paddingHorizontal: 12,
      paddingRight: 40, // extra padding for the right icon
      fontSize: theme.fonts.fontSize[fontSize],
      backgroundColor: theme.colors.inputText.primary,
    },
    rightIconWrapper: {
      position: "absolute",
      right: 12,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    errorText: {
      color: theme.colors.error.primary,
      marginTop: 5,
      marginBottom: 5,
    },
  });

const MyfarmInput = forwardRef<TextInput, Props>(
  (
    {
      children,
      fontSize = "lg",
      errorMessage,
      errorFlag = false,
      bottomBorder = false,
      style,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    const computedStyles = useMemo(
      () => styles(theme, fontSize, bottomBorder),
      [theme, fontSize, bottomBorder]
    );

    return (
      <View style={computedStyles.container}>
        <View style={computedStyles.inputContainer}>
          <TextInput
            ref={ref}
            style={[computedStyles.input, style]}
            {...props}
          />
          {rightIcon && (
            <View style={computedStyles.rightIconWrapper}>{rightIcon}</View>
          )}
        </View>

        {errorFlag && !!errorMessage && (
          <Text style={computedStyles.errorText}>{errorMessage}</Text>
        )}
      </View>
    );
  }
);

export default MyfarmInput;
