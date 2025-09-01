import React, { ReactNode, useEffect, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../text/MyfarmText";
import { IThemeType } from "../../../config/type/uiType";
import { useTheme } from "../../../context/theme/ThemeContext";
import MyfarmButton from "../button/MyfarmButton";
import { useGlobalStyle } from "../../../styles/globalStyle";
import CONSTANTS from "../../../config/constants/commonConstant";
import { colorLightTheme } from "../../../styles/theme";

interface Props {
  children?: ReactNode;
  noOfSteps?: number;
  title: string;
  activeStep: number;
  info?: string;
  onPressNext?: (currentStep: number) => void;
  onPressPrevious?: (currentStep: number) => void;
  disableSelfNext?: boolean;
  disableSelfPrv?: boolean;
}

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    activeBox: {
      backgroundColor: colorLightTheme.secondary,
    },
    childrenContainer: {
      flex: 1,
    },
    container: {
      height: "100%",
      width: "100%",
    },
    inActiveBox: {
      backgroundColor: theme.colors.border.primary,
    },
    nextButton: {
      flex: 1,
    },
    previousButton: {
      flex: 1,
      paddingRight: 10,
    },
    stepActionContainer: {
      padding: 20,
    },
    stepContainer: {
      flex: 1,
      maxHeight: 100,
      minHeight: 10,
      padding: 20,
    },
    stepInfo: {
      alignItems: "flex-end",
      flex: 1,
    },
    stepInfoContainer: {
      alignItems: "center",
      justifyContent: "space-between",
    },
    stepMark: {
      borderRadius: 5,
      flex: 1,
      height: 5,
    },
    stepMarkContainer: {
      alignItems: "center",
      flex: 1,
      gap: 5,
      justifyContent: "space-evenly",
      paddingBottom: 10,
      paddingTop: 10,
    },
    stepTitle: {
      flex: 1,
    },
  });

const MyFarmStepper: React.FC<Props> = ({
  children,
  noOfSteps,
  title,
  activeStep,
  info,
  onPressNext,
  onPressPrevious,
  disableSelfNext = false,
  disableSelfPrv = false,
}) => {
  const globalStyle = useGlobalStyle();
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);
  // This state can be used to track the current step in the process
  const [currentStep, setCurrentStep] = React.useState<number>(activeStep ?? 0);
  // This state can be used to track the total number of steps in the process
  const totalSteps = noOfSteps ?? 3;

  const totalStepsArray = useMemo(() => {
    return Array.from({ length: totalSteps }, (_, i) => i);
  }, [totalSteps]);

  useEffect(() => {
    setCurrentStep(activeStep ?? 0);
  }, [activeStep]);

  return (
    <View style={[styles.container, globalStyle.column]}>
      <View style={[globalStyle.column, styles.stepContainer]}>
        <View style={[globalStyle.row, styles.stepInfoContainer]}>
          <View style={styles.stepTitle}>
            <MyFarmText fontSize="xxl" bold color="primary">
              {title}
            </MyFarmText>
          </View>
          <View style={styles.stepInfo}>
            <MyFarmText fontSize="xxl" bold color="primary">
              {CONSTANTS.STEP_of_1} {currentStep + 1}
              {CONSTANTS.OF}
              {totalSteps}
            </MyFarmText>
          </View>
        </View>
        <View style={[globalStyle.row, styles.stepMarkContainer]}>
          {totalStepsArray?.map((_, index) => (
            <View
              key={index}
              style={[
                styles.stepMark,
                currentStep == index ? styles.activeBox : styles.inActiveBox,
              ]}
            ></View>
          ))}
        </View>
        <View>
          <MyFarmText fontSize="lg" color="primary">
            {info}
          </MyFarmText>
        </View>
      </View>
      <View style={styles.childrenContainer}>{children}</View>
      <View style={[globalStyle.row, styles.stepActionContainer]}>
        <View style={styles.previousButton}>
          <MyfarmButton
            title={CONSTANTS.PREVIOUS}
            onPress={() => {
              if (currentStep > 0) {
                onPressPrevious?.(currentStep);
                !disableSelfPrv && setCurrentStep(currentStep - 1);
              }
            }}
            bold
            fontSize="xl"
            disabled={currentStep === 0}
            type="secondary"
          ></MyfarmButton>
        </View>
        <View style={styles.nextButton}>
          <MyfarmButton
            title={
              currentStep === totalSteps - 1
                ? CONSTANTS.COMPLETE_STEP
                : CONSTANTS.NEXT
            }
            onPress={() => {
              if (currentStep < totalSteps - 1) {
                onPressNext?.(currentStep);
                !disableSelfNext && setCurrentStep(currentStep + 1);
              }
            }}
            bold
            fontSize="xl"
            type="primary"
          ></MyfarmButton>
        </View>
      </View>
    </View>
  );
};

export default MyFarmStepper;
