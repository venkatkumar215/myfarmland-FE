import React, { useMemo } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import MyFarmText from "../common/text/MyFarmText";
import CONSTANTS from "../../config/constants/commonConstant";
import { useGlobalStyle } from "../../styles/globalStyle";
import { getRecentActivity } from "../../mockData/mockData";
import { AntDesign } from "@expo/vector-icons";
import { IThemeType } from "../../config/type/uiType";
import { useTheme } from "../../context/theme/ThemeContext";

interface Props {}

const createStyles = (theme: IThemeType) =>
  StyleSheet.create({
    border: {
      borderBottomWidth: 0.75,
      borderColor: theme.colors.border.primary,
    },
  });

export const RecentActivity: React.FC<Props> = () => {
  const globalStyle = useGlobalStyle();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={[globalStyle.column, globalStyle.width100]}>
      <View style={globalStyle.row}>
        <MyFarmText bold fontSize="xl" style={globalStyle.flex1}>
          {CONSTANTS.RECENT_ACTIVITY}
        </MyFarmText>
        <View
          style={[
            globalStyle.alignItemFlexEnd,
            globalStyle.justifyContentCenter,
          ]}
        >
          <Pressable
            onPressIn={() => {
              alert("pressed");
            }}
          >
            <MyFarmText bold color="tertiary" style={globalStyle.center}>
              {CONSTANTS.VIEW_ALL}
              <AntDesign
                name="arrowright"
                size={14}
                color={theme.colors.text.tertiary}
                style={globalStyle.pt2}
              />
            </MyFarmText>
          </Pressable>
        </View>
      </View>
      <View style={[globalStyle.column, globalStyle.flexGap2, globalStyle.pt2]}>
        {getRecentActivity?.length > 0 &&
          getRecentActivity?.map((activity, index) => (
            <View
              key={index}
              style={[
                globalStyle.row,
                globalStyle.flexGap1,
                index !== getRecentActivity.length - 1 ? styles.border : "",
                globalStyle.pb1,
              ]}
            >
              <MyFarmText fontSize="lg" style={globalStyle.flex1}>
                {activity.startDate}
              </MyFarmText>
              <MyFarmText fontSize="lg" bold style={globalStyle.flex3}>
                {activity.description}
              </MyFarmText>
              <View
                style={
                  (globalStyle.flex1,
                  globalStyle.alignItemFlexEnd,
                  globalStyle.pr1)
                }
              >
                <AntDesign name="checkcircle" size={14} color="green" />
              </View>
            </View>
          ))}
      </View>
    </View>
  );
};
