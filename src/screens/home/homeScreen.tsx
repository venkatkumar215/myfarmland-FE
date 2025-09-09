import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Weather } from "../../components/home/Weather";
import { AnimalCount } from "../../components/home/AnimalCount";
import { Health } from "../../components/home/Health";
import { RecentActivity } from "../../components/home/RecentActivity";
import { UpcomingActivity } from "../../components/home/UpcomingActivity";
import MyFarmCard from "../../components/common/card/MyfarmCard";
import { useGlobalStyle } from "../../styles/globalStyle";
import { useTheme } from "../../context/theme/ThemeContext";
import { IThemeType } from "../../config/type/uiType";

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background.primary,
      gap: 5,
      height: "100%",
      padding: 16,
      width: "100%",
    },
    sectionOne: {
      maxHeight: 210,
      minHeight: 200,
    },
  });

export const HomeScreen = () => {
  // Define styles for the HomeScreen component
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
        <View style={globalStyle.flex1}>
          <MyFarmCard>
            <Health></Health>
          </MyFarmCard>
        </View>
      </View>

      <View>
        <MyFarmCard style={globalStyle.column}>
          <RecentActivity></RecentActivity>
        </MyFarmCard>
      </View>
      <View>
        <MyFarmCard style={globalStyle.column}>
          <UpcomingActivity></UpcomingActivity>
        </MyFarmCard>
      </View>
      <View style={globalStyle.row}>
        {/* <MyFarmCard>
          <MyFarmText>{}</MyFarmT'ext>
        </MyFarmCard>
        <MyFarmCard>
          <MyFarmText>Growth rate </MyFarmText>
        </MyFarmCard> */}
      </View>
    </View>
  );
};
