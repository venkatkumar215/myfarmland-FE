import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyFarmText from "../common/text/myfarm-text";
import { useGlobalStyle } from "../../styles/globalStyle";
import { Fontisto } from "@expo/vector-icons";
import CONSTANTS from "../../config/constants/common-constant";

interface Props {}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  weatherContianer: {
    gap: 10,
    alignItems: "center",
  },
});

export const Weather: React.FC<Props> = () => {
  const globalStyle = useGlobalStyle();
  return (
    <View>
      <MyFarmText bold fontSize="lg">
        {CONSTANTS.WEATHER}
      </MyFarmText>
      <View
        style={[
          globalStyle.column,
          globalStyle.center,
          globalStyle.alignItemCenter,
          styles.container,
        ]}
      >
        <View
          style={[globalStyle.row, globalStyle.pt2, styles.weatherContianer]}
        >
          <Fontisto name="day-cloudy" size={28} color="black" />
          <MyFarmText bold fontSize="xxxl">
            25¨c
          </MyFarmText>
        </View>
        <View
          style={[globalStyle.row, styles.weatherContianer, globalStyle.pl1]}
        >
          <Fontisto name="wind" size={18} color="black" />
          <MyFarmText bold>10km/h</MyFarmText>
        </View>
      </View>
    </View>
  );
};
