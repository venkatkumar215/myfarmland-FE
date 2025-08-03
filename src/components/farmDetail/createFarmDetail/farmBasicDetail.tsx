import React, { useMemo } from "react";
import MyFarmText from "../../common/text/myfarm-text";
import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "../../../context/theme/themeContext";
import { IThemeType } from "../../../config/type/ui-type";
import { globalStyle } from "../../../styles/globalStyle";
import MyfarmInput from "../../common/input/myfarm-input";
import CONSTANTS from "../../../config/constants/common-constant";

interface Props {}

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      justifyContent: "flex-start",
    },
    titleContainer: {
      gap: 15,
      paddingBottom: 10,
      alignItems: "center",
    },
    image: {
      minHeight: 50,
      minWidth: 50,
      maxHeight: 100,
      maxWidth: 100,
      resizeMode: "cover",
    },
    farmName: {
      width: "100%",
    },
    totalArea: {
      marginRight: 25,
    },
  });

const FarmBasicDetail: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  return (
    <View style={[globalStyle.column, styles.container]}>
      <View style={[globalStyle.column, styles.titleContainer]}>
        <Image
          source={require("../../../../assets/images/Search-Location-2--Streamline-Ux.png")}
          style={styles.image}
        ></Image>

        <MyFarmText bold fontSize="xxxl">
          {CONSTANTS.FARM_DETAIL.WELCOME_TO_FARM_FLOW}
        </MyFarmText>
        <MyFarmText>{CONSTANTS.FARM_DETAIL.DIGITAL_FARM_MANAGEMENT}</MyFarmText>

        <View style={[globalStyle.column, globalStyle.width100]}>
          <MyFarmText bold fontSize="lg">
            {CONSTANTS.FARM_DETAIL.FARM_DETAIL}
          </MyFarmText>
          <MyfarmInput placeholder="eg.myfarmland"></MyfarmInput>
        </View>
        <View style={[globalStyle.width100]}>
          <MyFarmText bold fontSize="lg">
            {CONSTANTS.FARM_DETAIL.FARM_LOCATION}
          </MyFarmText>
          <MyfarmInput placeholder="City/state,country"></MyfarmInput>
        </View>
        <View style={[globalStyle.width100, globalStyle.row]}>
          <View
            style={[globalStyle.column, globalStyle.flex1, styles.totalArea]}
          >
            <MyFarmText bold fontSize="md">
              {CONSTANTS.FARM_DETAIL.TOTAL_AREA}
            </MyFarmText>
            <MyfarmInput></MyfarmInput>
          </View>
          <View style={[globalStyle.column, globalStyle.flex1]}>
            <MyFarmText bold fontSize="md">
              {CONSTANTS.FARM_DETAIL.UNIT}
            </MyFarmText>
            <MyfarmInput></MyfarmInput>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FarmBasicDetail;
