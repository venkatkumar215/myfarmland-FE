import React from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../common/text/MyfarmText";
import { useGlobalStyle } from "../../styles/globalStyle";
import { Fontisto } from "@expo/vector-icons";

interface Props {}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  weatherContianer: {
    alignItems: "center",
    gap: 10,
  },
});

export const Weather: React.FC<Props> = () => {
  const globalStyle = useGlobalStyle();
  return (
    <View style={[globalStyle.column, styles.container, globalStyle.p2]}>
      <View style={[globalStyle.row, globalStyle.pt2, styles.weatherContianer]}>
        <Fontisto name="day-cloudy" size={26} color="white" />
        <MyFarmText bold fontSize="xxxl" color="secondary">
          25*C
        </MyFarmText>
      </View>
      <View style={[globalStyle.row, styles.weatherContianer, globalStyle.pl1]}>
        <Fontisto name="wind" size={18} color="white" />
        <MyFarmText bold color="secondary">
          10km/h
        </MyFarmText>
      </View>
    </View>
  );
};
