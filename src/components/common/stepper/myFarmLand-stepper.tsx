import React, { ReactNode, useEffect, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../text/myfarm-text";
import { IThemeType } from "../../../config/type/ui-type";
import { useTheme } from "../../../context/theme/themeContext";
import MyfarmButton from "../button/myfarm-button";
import { globalStyle } from "../../../styles/globalStyle";

interface Props {
  children?: ReactNode;
  noOfSteps?: number;
  title: string;
}

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      width: "100%",
    },
    stepContainer: {
      backgroundColor: "green",
      padding: 20,
    },
    stepInfoContainer: {
      alignItems: "center",
      justifyContent: "space-between",
    },
    stepTitle: {
      flexGrow: 1,
    },
    stepInfo: {
      flexGrow: 1,
      alignItems: "flex-end",
    },
    stepActionContainer: {
      padding: 20,
    },
    previousButton: {
      flexGrow: 1,
      paddingRight: 10,
    },
    nextButton: {
      flexGrow: 1,
    },
    childrenContainer: {
      flexGrow: 1,
    },
    stepMarkContainer: {
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: 5,
      paddingTop: 10,
      paddingBottom: 10,
    },
    stepMark: {
      flexGrow: 1,
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
const MyFarmStepper: React.FC<Props> = ({ children, noOfSteps, title }) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);
  // This state can be used to track the total number of steps in the process
  const [totalSteps, setTotalSteps] = React.useState<number>(noOfSteps || 3);
  // This state can be used to track the current step in the process
  const [currentStep, setCurrentStep] = React.useState<number>(0);

  const [totalStepsArray, setTotalStepsArray] = React.useState<Array<number>>(
    []
  );

  useEffect(() => {
    const arr = Array.from({ length: totalSteps }, (_, i) => i);
    setTotalStepsArray(arr);
  }, [totalSteps]);

  return (
    <View style={[styles.container, globalStyle.column]}>
      <View style={[globalStyle.column, styles.stepContainer]}>
        <View style={[globalStyle.row, styles.stepInfoContainer]}>
          <View style={styles.stepTitle}>
            <MyFarmText fontSize="xxl" bold color="secondary">
              {title}
            </MyFarmText>
          </View>
          <View style={styles.stepInfo}>
            <MyFarmText fontSize="xxl" bold color="secondary">
              Step 1 of {totalSteps}
            </MyFarmText>
          </View>
        </View>
        <View style={[globalStyle.row, styles.stepMarkContainer]}>
          {totalStepsArray?.map((steps, index) => (
            <View
              key={index}
              style={[
                styles.stepMark,
                currentStep == index ? styles.activeBox : styles.inActiveBox,
              ]}
            ></View>
          ))}
        </View>
        <View></View>
      </View>
      <View style={styles.childrenContainer}>{children}</View>
      <View style={[globalStyle.row, styles.stepActionContainer]}>
        <View style={styles.previousButton}>
          <MyfarmButton
            title="Previous"
            onPress={() =>
              setCurrentStep(currentStep === 0 ? 0 : currentStep - 1)
            }
          ></MyfarmButton>
        </View>
        <View style={styles.nextButton}>
          <MyfarmButton
            title="Next"
            onPress={() =>
              setCurrentStep(
                currentStep === totalSteps - 1
                  ? totalSteps - 1
                  : currentStep + 1
              )
            }
          ></MyfarmButton>
        </View>
      </View>
    </View>
  );
};

export default MyFarmStepper;
