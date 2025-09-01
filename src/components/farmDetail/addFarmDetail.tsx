import React, { useContext, useState } from "react";
import { View } from "react-native";
import MyFarmStepper from "../common/stepper/MyFarmLandStepper";
import CONSTANTS from "../../config/constants/commonConstant";
import {
  FarmDetailKey,
  IFarmDetail,
  IFarmDetailKey,
} from "../../config/type/uiType/farmDetailType";
import { FarmDetailContext } from "../../context/farmDetail/FarmDetailContext";

import {
  stepDetails,
  validKeys,
} from "../../config/constants/farmDetailConstant";

interface Props {}

const AddFarmDetails: React.FC<Props> = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { farmDetail, setFarmDetail } = useContext(FarmDetailContext);

  const totalSteps = stepDetails.length;
  const ComponentToRender = stepDetails[currentStep].componentName;

  const handleOnPressNext = () => {
    const { schema, id } = stepDetails[currentStep];

    if (!farmDetail?.[id as keyof IFarmDetail]) {
      return;
    }
    if (schema) {
      const validatedResult = schema.safeParse(
        farmDetail?.[id as keyof IFarmDetail]
      );

      if (validatedResult.success) {
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
      } else {
        const issue = validatedResult.error.issues[0];

        const property = issue?.path?.[0];
        updateFarmDetailContext(property, false, issue?.message);
      }
    } else {
      // No schema to validate for this step
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
    }
  };

  const handleOnPressPrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const updateFarmDetailContext = (
    property: any,
    validFlag: boolean,
    errorMessage: string
  ) => {
    if (!farmDetail || typeof property !== "string") return;
    if (!validKeys.includes(property as FarmDetailKey)) return;

    const stepId = stepDetails[currentStep].id as IFarmDetailKey;
    const key = property as FarmDetailKey;

    const updatedFarmDetail = { ...farmDetail };

    validKeys.forEach((basicDetailKey) => {
      if (updatedFarmDetail.basicDetail[basicDetailKey]) {
        updatedFarmDetail.basicDetail[basicDetailKey].errorMessage =
          basicDetailKey === key ? errorMessage : "";
        updatedFarmDetail.basicDetail[basicDetailKey].valid =
          basicDetailKey === key ? false : true;
        updatedFarmDetail.basicDetail[basicDetailKey].value =
          updatedFarmDetail.basicDetail[basicDetailKey].value ?? "";
      }
    });

    setFarmDetail(updatedFarmDetail);
  };

  return (
    <View>
      <MyFarmStepper
        title={CONSTANTS.FARM_SETUP}
        noOfSteps={totalSteps}
        activeStep={currentStep}
        onPressNext={handleOnPressNext}
        onPressPrevious={handleOnPressPrevious}
        info={stepDetails[currentStep].title}
        disableSelfNext
        disableSelfPrv
      >
        {ComponentToRender ? <ComponentToRender /> : null}
      </MyFarmStepper>
    </View>
  );
};

export default AddFarmDetails;
