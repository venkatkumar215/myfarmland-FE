import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyFarmText from "../common/text/MyfarmText";
import { useGlobalStyle } from "../../styles/globalStyle";
import { Fontisto } from "@expo/vector-icons";
import CONSTANTS from "../../config/constants/commonConstant";

interface Props {}

const styles = StyleSheet.create({
  container: {
    gap: 15,
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
      <View style={[globalStyle.column, styles.container]}>
        <View
          style={[globalStyle.row, globalStyle.pt2, styles.weatherContianer]}
        >
          <Fontisto name="day-cloudy" size={26} color="white" />
          <MyFarmText bold fontSize="xxxl" color="secondary">
            25*C
          </MyFarmText>
        </View>
        <View
          style={[globalStyle.row, styles.weatherContianer, globalStyle.pl1]}
        >
          <Fontisto name="wind" size={18} color="white" />
          <MyFarmText bold color="secondary">
            10km/h
          </MyFarmText>
        </View>
      </View>
    </View>
  );
};
