import React, { ReactNode, useEffect, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../text/myfarm-text";
import { IThemeType } from "../../../config/type/ui-type";
import { useTheme } from "../../../context/theme/themeContext";
import MyfarmButton from "../button/myfarm-button";
import { globalStyle } from "../../../styles/globalStyle";
import CONSTANTS from "../../../config/constants/common-constant";

interface Props {
  children?: ReactNode;
  noOfSteps?: number;
  title: string;
  activeStep: number;
  info?: string;
  onPressNext?: (currentStep: number) => void;
  onPressPrevious?: (currentStep: number) => void;
}

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },
    stepContainer: {
      backgroundColor: "green",
      padding: 20,
      flex: 1,
      minHeight: 10,
      maxHeight: 100,
    },
    stepInfoContainer: {
      alignItems: "center",
      justifyContent: "space-between",
    },
    stepTitle: {
      flex: 1,
    },
    stepInfo: {
      flex: 1,
      alignItems: "flex-end",
    },
    stepActionContainer: {
      padding: 20,
    },
    previousButton: {
      flex: 1,
      paddingRight: 10,
    },
    nextButton: {
      flex: 1,
    },
    childrenContainer: {
      flex: 1,
    },
    stepMarkContainer: {
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: 5,
      paddingTop: 10,
      paddingBottom: 10,
    },
    stepMark: {
      flex: 1,
      minHeight: 5,
      borderRadius: 5,
    },
    activeBox: {
      backgroundColor: "white",
    },
    inActiveBox: {
      backgroundColor: "black",
    },
  });

const MyFarmStepper: React.FC<Props> = ({ ...props }) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);
  // This state can be used to track the current step in the process
  const [currentStep, setCurrentStep] = React.useState<number>(
    props.activeStep ?? 0
  );
  // This state can be used to track the total number of steps in the process
  const totalSteps = props.noOfSteps ?? 3;

  const totalStepsArray = useMemo(() => {
    return Array.from({ length: totalSteps }, (_, i) => i);
  }, [totalSteps]);

  useEffect(() => {
    setCurrentStep(props.activeStep ?? 0);
  }, [props.activeStep]);

  return (
    <View style={[styles.container, globalStyle.column]}>
      <View style={[globalStyle.column, styles.stepContainer]}>
        <View style={[globalStyle.row, styles.stepInfoContainer]}>
          <View style={styles.stepTitle}>
            <MyFarmText fontSize="xxl" bold color="secondary">
              {props.title}
            </MyFarmText>
          </View>
          <View style={styles.stepInfo}>
            <MyFarmText fontSize="xxl" bold color="secondary">
              {CONSTANTS.STEP_of_1} {totalSteps}
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
          <MyFarmText fontSize="lg" color="secondary">
            {props.info}
          </MyFarmText>
        </View>
      </View>
      <View style={styles.childrenContainer}>{props.children}</View>
      <View style={[globalStyle.row, styles.stepActionContainer]}>
        <View style={styles.previousButton}>
          <MyfarmButton
            title={CONSTANTS.PREVIOUS}
            onPress={() => {
              if (currentStep > 0) {
                props.onPressPrevious?.(currentStep);
                setCurrentStep(currentStep - 1);
              }
            }}
            bold
            fontSize="xl"
            disabled={currentStep === 0}
          ></MyfarmButton>
        </View>
        <View style={styles.nextButton}>
          <MyfarmButton
            title={CONSTANTS.NEXT}
            onPress={() => {
              if (currentStep < totalSteps - 1) {
                props.onPressNext?.(currentStep);
                setCurrentStep(currentStep + 1);
              }
            }}
            bold
            fontSize="xl"
            disabled={currentStep === totalSteps - 1}
          ></MyfarmButton>
        </View>
      </View>
    </View>
  );
};

export default MyFarmStepper;
