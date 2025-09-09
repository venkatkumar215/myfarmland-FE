import React from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../../components/common/text/MyfarmText";
import AnimalStatus from "../../components/home/AnimalStatus";
import HomeActionList from "../../components/home/HomeActionList";
import CONSTANTS from "../../config/constants/commonConstant";

const styles = StyleSheet.create({
  actionList: {
    marginBottom: 10,
    marginTop: 20,
  },
  animalList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
    marginTop: 20,
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  homeHeaderText: {
    paddingLeft: 15,
    paddingTop: 15,
  },
});

export const CropScreen = () => {


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
