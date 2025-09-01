import React, { createContext, useContext, ReactNode, useMemo } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "../../styles/theme";
// Update the import path below if 'IThemeType' is located elsewhere, for example:
import { IThemeType } from "../../config/type/uiType/themeType";

const ThemeContext = createContext<IThemeType>(lightTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemColorScheme = useColorScheme(); // returns "light" | "dark" | null

  const theme = useMemo(() => {
    return systemColorScheme === "dark" ? darkTheme : lightTheme;
  }, [systemColorScheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
