import { StyleSheet } from "react-native";
import { useTheme } from "../context/theme/ThemeContext";
import { useMemo } from "react";

export const useGlobalStyle = () => {
  const theme = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        row: {
          flexDirection: "row",
          width: "100%",
        },
        column: {
          flexDirection: "column",
        },
        spaceBetween: {
          justifyContent: "space-between",
        },
        spaceAround: {
          justifyContent: "space-around",
        },
        center: {
          justifyContent: "center",
          alignItems: "center",
        },
        alignItemCenter: {
          alignItems: "center",
        },
        justifyContentCenter: {
          justifyContent: "center",
        },
        width100: {
          width: "100%",
        },
        flex1: {
          flex: 1,
        },
        flex2: {
          flex: 2,
        },
        flexGap1: {
          gap: 5,
        },
        flexGap2: {
          gap: 10,
        },
        bgPrimary: {
          backgroundColor: theme.colors.background.primary,
        },
        bgSecondary: {
          backgroundColor: theme.colors.background.secondary,
        },
        pt0: {
          paddingTop: 0,
        },
        pt1: {
          paddingTop: 4,
        },
        pt2: {
          paddingTop: 8,
        },
        pr0: {
          paddingRight: 0,
        },
        pr1: {
          paddingRight: 4,
        },
        pr2: {
          paddingRight: 8,
        },
        pl0: {
          paddingLeft: 0,
        },
        pl1: {
          paddingLeft: 4,
        },
      }),
    [theme]
  );
};
