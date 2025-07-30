import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../../common/text/myfarm-text";
import { useTheme } from "../../../context/theme/themeContext";
import { IThemeType } from "../../../config/type/ui-type";
import { globalStyle } from "../../../styles/globalStyle";
import MyfarmInput from "../../common/input/myfarm-input";

interface Props {}

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      padding: 20,
    },
    titleContainer: {
      gap: 15,
      paddingBottom: 20,
    },
    farmSizeInfo: {
      gap: 10,
    },
    totalArea: {
      flex: 1,
    },
    unit: {
      flex: 1,
    },
  });

const SetFarmSize: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  return (
    <View style={[globalStyle.column, styles.container]}>
      <View style={[globalStyle.center, styles.titleContainer]}>
        <MyFarmText fontSize="xxl" bold>
          Icon
        </MyFarmText>
        <MyFarmText bold fontSize="xxl">
          Farm Size Configuration
        </MyFarmText>
        <MyFarmText fontSize="md">
          Helps us understand your farming operation scale
        </MyFarmText>
      </View>
      <View style={[globalStyle.row, styles.farmSizeInfo]}>
        <View style={[globalStyle.column, styles.totalArea]}>
          <MyFarmText bold fontSize="md">
            Total Area: *{" "}
          </MyFarmText>
          <MyfarmInput></MyfarmInput>
        </View>
        <View style={[globalStyle.column, styles.unit]}>
          <MyFarmText bold fontSize="md">
            Unit *{" "}
          </MyFarmText>
          <MyfarmInput></MyfarmInput>
        </View>
      </View>
    </View>
  );
};

export default SetFarmSize;
