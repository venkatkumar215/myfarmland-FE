// theme.ts

import { IFontSizeType, IThemeType } from "../config/type/ui-type/theme-type";

export const fontSize: IFontSizeType = {
  xs: 8,
  sm: 10,
  md: 12,
  lg: 14,
  xl: 16,
  xxl: 18,
  xxxl: 24,
};

export const colorLightTheme = {
  primary: "#1B5E20",
  secondary: "#945034",
  tertiary: "#D95D39 ",
};
// This file defines the light and dark themes for the application.
export const lightTheme: IThemeType = {
  dark: false,
  colors: {
    // Define the colors used in the light theme
    background: {
      primary: "#F9F9F6",
      secondary: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#FFFFFF",
    },
    btn: {
      primary: colorLightTheme.primary,
      secondary: colorLightTheme.secondary,
      tertiary: colorLightTheme.tertiary,
    },
    btnText: {
      primary: "#FFFFFF",
      secondary: "#4D5E3E",
    },
    icon: {
      active: colorLightTheme.primary,
      inactive: "#333333",
    },
    inputText: {
      primary: "#333333",
      secondary: "#808080",
    },
    error: {
      primary: "#FF0000",
    },
    border: {
      primary: "#A9A9A9",
      secondary: colorLightTheme.secondary,
    },
  },
  // Define the font sizes,family used in the theme
  fonts: {
    fontSize: fontSize,
    fontFamily: "Quicksand-Regular",
  },
};

export const darkTheme: IThemeType = {
  dark: true,
  colors: {
    background: {
      primary: "#F9F9F6",
      secondary: "#FFFFFF",
    },
    text: {
      primary: "#2E2E2E",
      secondary: "#F9F9F6",
    },
    btn: {
      primary: "#84996B",
      secondary: "#E1E8D6",
      tertiary: colorLightTheme.tertiary,
    },
    btnText: {
      primary: "#FFFFFF",
      secondary: "#4D5E3E",
    },
    icon: {
      active: "#356a40",
      inactive: "#E1E8D6",
    },
    inputText: {
      primary: "#fff",
      secondary: "#ccc",
    },
    error: {
      primary: "#FF0000",
    },
    border: {
      primary: "#eae9e8",
      secondary: "#F5F5F5",
    },
  },
  // Define the font sizes used in the theme
  fonts: {
    fontSize: fontSize,
    fontFamily: "Quicksand-Regular",
  },
};
