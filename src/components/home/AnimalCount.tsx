import React from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../common/text/MyfarmText";
import { useGlobalStyle } from "../../styles/globalStyle";
import CONSTANTS from "../../config/constants/commonConstant";

interface Props {}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: "100%",
  },
});
export const AnimalCount: React.FC<Props> = () => {
  const globalStyle = useGlobalStyle();
  return (
    <View style={[globalStyle.column, styles.container]}>
      <MyFarmText style={globalStyle.alignItemCenter} bold fontSize="xl">
        {CONSTANTS.TOTAL_ANIMALS}
      </MyFarmText>
      <MyFarmText
        style={globalStyle.justifyContentCenter}
        bold
        fontSize="xxxl"
      >
        150
      </MyFarmText>
    </View>
  );
};
