import React, { useMemo } from "react";
import MyFarmText from "../../common/text/myfarm-text";
import { StyleSheet, View } from "react-native";
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
  });

const FarmBasicDetail: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  return (
    <View style={[globalStyle.column, styles.container]}>
      <View style={[globalStyle.center, styles.titleContainer]}>
        <MyFarmText fontSize="xxl" bold>
          Icon
        </MyFarmText>

        <MyFarmText bold fontSize="xxl">
          Welcome to Farmflow
        </MyFarmText>
        <MyFarmText>Your Digital farm management companion</MyFarmText>
      </View>
      <View>
        <MyFarmText bold fontSize="md">
          Farm Name :*{" "}
        </MyFarmText>
        <MyfarmInput placeholder="eg.myfarmland"></MyfarmInput>
      </View>
      <View>
        <MyFarmText bold fontSize="md">
          Farm Location :
        </MyFarmText>
        <MyfarmInput placeholder="City/state,country"></MyfarmInput>
      </View>
    </View>
  );
};

export default FarmBasicDetail;
