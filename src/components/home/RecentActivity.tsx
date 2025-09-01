import React from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../common/text/MyfarmText";
import CONSTANTS from "../../config/constants/commonConstant";
import { useGlobalStyle } from "../../styles/globalStyle";
import { getRecentActivity } from "../../mockData/mockData";
import { AntDesign } from "@expo/vector-icons";

interface Props {}

const styles = StyleSheet.create({
  activityContainer: {
    gap: 7,
  },
  activityItem: {
    gap: 5,
    paddingBottom: 4,
    borderColor: "black",
    borderBottomWidth: 1,
  },
});

export const RecentActivity: React.FC<Props> = () => {
  const globalStyle = useGlobalStyle();
  return (
    <View style={[globalStyle.column, globalStyle.width100]}>
      <MyFarmText bold fontSize="xl">
        {CONSTANTS.RECENT_ACTIVITY}
      </MyFarmText>
      <View
        style={[globalStyle.column, styles.activityContainer, globalStyle.pt2]}
      >
        {getRecentActivity?.length > 0 &&
          getRecentActivity?.map((activity, index) => (
            <View key={index} style={[globalStyle.row, styles.activityItem]}>
              <MyFarmText style={[globalStyle.flex1]}>
                {activity.startDate}
              </MyFarmText>
              <MyFarmText style={[globalStyle.flex1]}>
                {activity.name}
              </MyFarmText>
              <View style={[globalStyle.flex1]}>
                <AntDesign name="checkcircleo" size={14} color="green" />
              </View>
            </View>
          ))}
      </View>
    </View>
  );
};
