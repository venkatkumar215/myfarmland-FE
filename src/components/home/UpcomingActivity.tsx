import React from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../common/text/MyfarmText";
import CONSTANTS from "../../config/constants/commonConstant";
import { useGlobalStyle } from "../../styles/globalStyle";
import { getRecentActivity } from "../../mockData/mockData";

interface Props {}
const styles = StyleSheet.create({
  activityContainer: {
    gap: 5,
  },
  activityItem: {
    gap: 5,
    paddingBottom: 4,
    borderColor: "black",
    borderBottomWidth: 1,
  },
});

export const UpcomingActivity: React.FC<Props> = () => {
  const globalStyle = useGlobalStyle();
  return (
    <View style={[globalStyle.column, globalStyle.width100]}>
      <MyFarmText bold fontSize="xl">
        {CONSTANTS.UPCOMING_ACTIVITY}
      </MyFarmText>
      <View style={[globalStyle.column, styles.activityContainer]}>
        {getRecentActivity?.length > 0 &&
          getRecentActivity?.map((activity, index) => (
            <View key={index} style={[globalStyle.row, styles.activityItem]}>
              <MyFarmText style={[globalStyle.flex1]}>
                {activity.startDate}
              </MyFarmText>
              <MyFarmText style={[globalStyle.flex1]}>
                {activity.name}
              </MyFarmText>
            </View>
          ))}
      </View>
    </View>
  );
};
