import React, { ReactNode, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../text/myfarm-text";
import { create } from "domain";
import { IThemeType } from "../../../config/type/ui-type";
import { useTheme } from "../../../context/theme/themeContext";
import MyfarmButton from "../button/myfarm-button";

interface Props {
  children?: ReactNode;
  noOfSteps?: number;
  title: string;
}

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    stepContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      backgroundColor: "green",
      padding: 20,
    },
    stepInfoContainer: {
      display: "flex",
      flexDirection: "row",
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
      display: "flex",
      flexDirection: "row",
      padding: 20,
    },
    previousButton: {
      flexGrow: 1,
      paddingRight: 10,
    },
    nextButton: {
      flexGrow: 1,
    },
  });
const MyFarmStepper: React.FC<Props> = ({
  children,
  noOfSteps,
  title,
  ...props
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);
  // This state can be used to track the total number of steps in the process
  const [totalSteps, setTotalSteps] = React.useState<number>(noOfSteps || 3);
  // This state can be used to track the current step in the process
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <View style={styles.stepInfoContainer}>
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
        <View></View>
        <View></View>
      </View>

      {children}
      <View style={styles.stepActionContainer}>
        <View style={styles.previousButton}>
          <MyfarmButton title="Previous"></MyfarmButton>
        </View>
        <View style={styles.nextButton}>
          <MyfarmButton title="Next"></MyfarmButton>
        </View>
      </View>
    </View>
  );
};

export default MyFarmStepper;
