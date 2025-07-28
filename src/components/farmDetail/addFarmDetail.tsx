import React from "react";
import { View } from "react-native";
import MyFarmText from "../common/text/myfarm-text";
import MyFarmStepper from "../common/stepper/myFarmLand-stepper";

interface Props {}

const AddFarmDetails: React.FC<Props> = () => {
  return (
    <View>
      <MyFarmStepper title="Farm Setup"></MyFarmStepper>
    </View>
  );
};
export default AddFarmDetails;
