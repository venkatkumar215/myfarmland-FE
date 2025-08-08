import React, { Children, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { globalStyle } from "../../../styles/globalStyle";
import { useTheme } from "../../../context/theme/themeContext";
import { IThemeType } from "../../../config/type/ui-type";

interface Props {
  children: React.ReactNode;
}
const createStyles = (theme: IThemeType) =>
  StyleSheet.create({
    cardContainer: {
      borderColor: theme.colors.border.primary,
      borderWidth: 2,
      borderRadius: 7,
      padding: 10,
      borderStyle: "solid",
    },
  });
const MyFarmCard: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={[styles.cardContainer, globalStyle.column]}>{children}</View>
  );
};

export default MyFarmCard;
