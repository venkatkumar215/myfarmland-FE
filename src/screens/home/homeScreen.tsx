import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyFarmText from "../../components/common/text/myfarm-text";
import AnimalStatus from "../../components/home/animalStatus";
import HomeActionList from "../../components/home/homeActionList";
import CONSTANTS from "../../config/constants/common-constant";

type Props = {};
// This component represents the home screen of the application

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  homeHeaderText: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  animalList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 15,
  },
  actionList: {
    marginTop: 20,
    marginBottom: 10,
  },
});
export const HomeScreen: React.FC<Props> = () => {
  // Define styles for the HomeScreen component

  return (
    <View style={styles.container}>
      <View style={styles.homeHeaderText}>
        <MyFarmText fontSize="xxl" bold>
          {CONSTANTS.HEADER_TITLE.TODAY_OVERVIEW}
        </MyFarmText>
      </View>
      <View style={styles.animalList}>
        <AnimalStatus></AnimalStatus>
      </View>
      <View style={styles.actionList}>
        <HomeActionList></HomeActionList>
      </View>
    </View>
  );
};
