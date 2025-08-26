import { useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IThemeType } from "../../config/type/ui-type";
import { globalStyle } from "../../styles/globalStyle";

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {},
  });

export const CropScreen = () => {
  const theme = useTheme();
  const styles = useMemo(
    () => createStyle(theme as unknown as IThemeType),
    [theme]
  );

  return (
    <SafeAreaView edges={["top", "bottom"]}>
      <View style={[globalStyle.column,styles.container]}>
      <View></View>
      <View></View>
      </View>
    </SafeAreaView>
  );
};
