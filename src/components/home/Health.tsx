import React from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../common/text/MyfarmText";
import CONSTANTS from "../../config/constants/commonConstant";
import { useGlobalStyle } from "../../styles/globalStyle";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import MyFarmCard from "../common/card/MyfarmCard";

interface Props {}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  healthMonitor: {
    flexWrap: "wrap",
  },
});

export const Health: React.FC<Props> = () => {
  const globalStyle = useGlobalStyle();
  return (
    <View style={[globalStyle.column, styles.container]}>
      <MyFarmText
        style={[globalStyle.column, globalStyle.justifyContentCenter]}
        bold
        fontSize="lg"
      >
        {CONSTANTS.HEALTH_MONITOR}
      </MyFarmText>
      <View
        style={[globalStyle.row, styles.healthMonitor, globalStyle.flexGap2]}
      >
        <MyFarmCard background="active" style={[globalStyle.center]}>
          <MaterialIcons name="goat" size={24} color="white" />
          <MyFarmText color="secondary">Healthy</MyFarmText>
        </MyFarmCard>
        <MyFarmCard background="caution" style={[globalStyle.center]}>
          <MaterialIcons name="goat" size={24} color="white" />
          <MyFarmText color="secondary">caution</MyFarmText>
        </MyFarmCard>
        <MyFarmCard background="warning" style={[globalStyle.center]}>
          <MaterialIcons name="goat" size={24} color="white" />
          <MyFarmText color="secondary">Critical</MyFarmText>
        </MyFarmCard>
        <MyFarmCard background="warning" style={[globalStyle.center]}>
          <MaterialIcons name="goat" size={24} color="white" />
          <MyFarmText color="secondary">Critical</MyFarmText>
        </MyFarmCard>
      </View>
    </View>
  );
};
