import React, { useState } from "react";
import { View } from "react-native";
import MyFarmStepper from "../common/stepper/myFarmLand-stepper";
import FarmBasicDetail from "./createFarmDetail/farmBasicDetail";
import SetFarmSize from "./createFarmDetail/setFarmSize";
import SetAnimalSize from "./createFarmDetail/setAnimalSize";
import CONSTANTS from "../../config/constants/common-constant";
import { IStepDetail } from "../../config/type/ui-type/farmDetail-type";

interface Props {}

const stepDetails: Array<IStepDetail> = [
  {
    title: CONSTANTS.BASIC_FARM_DETAIL,
    componentName: FarmBasicDetail,
  },
  {
    title: CONSTANTS.FARM_SIZE_DETAIL,
    componentName: SetFarmSize,
  },
  {
    title: CONSTANTS.ANIMAL_SIZE_DETAIL,
    componentName: SetAnimalSize,
  },
];

const AddFarmDetails: React.FC<Props> = () => {
  const [currentStep, setcurrentStep] = useState<number>(0);

  const totalSteps = stepDetails.length;

  const ComponentToRender = stepDetails[currentStep].componentName;

  const handleOnPressNext = () => {
    setcurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };
  const handleOnpressPrevious = () => {
    setcurrentStep((prev) => Math.max(prev - 1, 0));
  };
  return (
    <View>
      <MyFarmStepper
        title={CONSTANTS.FARM_SETUP}
        noOfSteps={totalSteps}
        activeStep={currentStep}
        onPressNext={handleOnPressNext}
        onPressPrevious={handleOnpressPrevious}
        info={stepDetails[currentStep].title}
      >
        {ComponentToRender ? <ComponentToRender /> : null}
      </MyFarmStepper>
    </View>
  );
};
export default AddFarmDetails;
