import { useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IThemeType } from "../../config/type/uiType";
import { useGlobalStyle } from "../../styles/globalStyle";
import MyFarmCard from "../../components/common/card/MyfarmCard";
import MyFarmText from "../../components/common/text/MyfarmText";
import { Weather } from "../../components/home/Weather";
import { Ionicons } from "@expo/vector-icons";
import { AnimalCount } from "../../components/home/AnimalCount";
import { Health } from "../../components/home/Health";
import { RecentActivity } from "../../components/home/RecentActivity";
import { UpcomingActivity } from "../../components/home/UpcomingActivity";

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background.primary,
      height: "100%",
      width: "100%",
      padding: 16,
      gap: 20,
    },
    sectionOne: {
      minHeight: 200,
      maxHeight: 210,
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
      <View style={[globalStyle.row, globalStyle.flexGap2, styles.sectionOne]}>
        <View
          style={[globalStyle.flex1, globalStyle.column, globalStyle.flexGap1]}
        >
          <MyFarmCard background="active">
            <Weather></Weather>
          </MyFarmCard>
          <MyFarmCard>
            <AnimalCount></AnimalCount>
          </MyFarmCard>
        </View>
        <View style={[globalStyle.flex1]}>
          <MyFarmCard>
            <Health></Health>
          </MyFarmCard>
        </View>
      </View>

      <View>
        <MyFarmCard style={[globalStyle.column]}>
          <RecentActivity></RecentActivity>
        </MyFarmCard>
      </View>
      <View>
        <MyFarmCard style={[globalStyle.column]}>
          <UpcomingActivity></UpcomingActivity>
        </MyFarmCard>
      </View>
      <View style={[globalStyle.row]}>
        <MyFarmCard>
          <MyFarmText>Growth rate </MyFarmText>
        </MyFarmCard>
        <MyFarmCard>
          <MyFarmText>Growth rate </MyFarmText>
        </MyFarmCard>
      </View>
    </View>
  );
};
