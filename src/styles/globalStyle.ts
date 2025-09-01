import { StyleSheet } from "react-native";
import { useTheme } from "../context/theme/ThemeContext";
import { useMemo } from "react";

export const useGlobalStyle = () => {
  const theme = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        alignItemCenter: {
          alignItems: "center",
        },
        bgPrimary: {
          backgroundColor: theme.colors.background.primary,
        },
        bgSecondary: {
          backgroundColor: theme.colors.background.secondary,
        },
        center: {
          alignItems: "center",
          justifyContent: "center",
        },
        column: {
          flexDirection: "column",
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
        justifyContentCenter: {
          justifyContent: "center",
        },
        p0: {
          padding: 0,
        },
        p1: {
          padding: 2,
        },
        p2: {
          padding: 4,
        },
        pl0: {
          paddingLeft: 0,
        },
        pl1: {
          paddingLeft: 4,
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
        pt0: {
          paddingTop: 0,
        },
        pt1: {
          paddingTop: 4,
        },
        pt2: {
          paddingTop: 8,
        },
        row: {
          flexDirection: "row",
          width: "100%",
        },
        spaceAround: {
          justifyContent: "space-around",
        },
        spaceBetween: {
          justifyContent: "space-between",
        },
        width100: {
          width: "100%",
        },
      }),
    [theme]
  );
};
