import { useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IThemeType } from "../../config/type/ui-type";
import { useGlobalStyle } from "../../styles/globalStyle";
import MyFarmCard from "../../components/common/card/myfarm-card";
import MyFarmText from "../../components/common/text/myfarm-text";
import { Weather } from "../../components/home/weather";
import { Ionicons } from "@expo/vector-icons";

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background.primary,
      height: "100%",
      width: "100%",
      padding: 16,
      gap: 20,
    },

    weatherContainer: {
      flex: 1,
      gap: 20,
    },
    immediateActionContainer: {
      flex: 1,
      gap: 20,
    },
    recentActivityContainer: {
      flex: 1,
    },
    upcomingActivityContainer: {
      flex: 1,
    },
    actionContianer: {
      backgroundColor: "#D95D39",
    },
  });

export const CropScreen = () => {
  const globalStyle = useGlobalStyle();
  const theme = useTheme();
  const styles = useMemo(
    () => createStyle(theme as unknown as IThemeType),
    [theme]
  );

  return (
    <View style={[globalStyle.column, styles.container]}>
      <View style={[globalStyle.row, styles.weatherContainer]}>
        <MyFarmCard style={[globalStyle.flex1]}>
          <Weather></Weather>
        </MyFarmCard>
        <MyFarmCard
          style={[
            globalStyle.flex1,
            globalStyle.alignItemCenter,
            globalStyle.center,
            styles.actionContianer,
          ]}
          background={false}
        >
          <Ionicons name="alert-circle" size={32} color="#c6ef12" />

          <View style={[globalStyle.justifyContentCenter]}>
            <MyFarmText bold fontSize="xl">
              Immediate Action
            </MyFarmText>
          </View>
        </MyFarmCard>
      </View>

      <View style={[globalStyle.row, styles.immediateActionContainer]}>
        <MyFarmCard style={[globalStyle.flex1]}>
          <Text>Health level </Text>
        </MyFarmCard>
        <MyFarmCard style={[globalStyle.flex1]}>
          <Text>Count </Text>
        </MyFarmCard>
      </View>

      <MyFarmCard style={[globalStyle.column, styles.recentActivityContainer]}>
        <Text>Recent Activity</Text>
      </MyFarmCard>
      <MyFarmCard
        style={[globalStyle.column, styles.upcomingActivityContainer]}
      >
        <Text>Upcoming Activity</Text>
      </MyFarmCard>
    </View>
  );
};
