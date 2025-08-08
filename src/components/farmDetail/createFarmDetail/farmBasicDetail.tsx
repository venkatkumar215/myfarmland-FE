import React, { useCallback, useContext, useMemo } from "react";
import MyFarmText from "../../common/text/myfarm-text";
import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "../../../context/theme/themeContext";
import { IThemeType } from "../../../config/type/ui-type";
import { globalStyle } from "../../../styles/globalStyle";
import MyfarmInput from "../../common/input/myfarm-input";
import CONSTANTS from "../../../config/constants/common-constant";
import { FarmDetailKey } from "../../../config/type/ui-type/farmDetail-type";
import MyFarmLandDropDown from "../../common/dropdown/myFarm-dropDown.component";
import { FarmDetailContext } from "../../../context/farmDetail/farmDetailContext";
import { unitOptions } from "../../../config/constants/farmDetail-constant";

interface Props {}

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      justifyContent: "flex-start",
    },
    titleContainer: {
      gap: 10,
      marginBottom: 20,
      alignItems: "center",
      maxHeight: 150,
    },
    image: {
      minHeight: 30,
      minWidth: 30,
      maxHeight: 80,
      maxWidth: 80,
      resizeMode: "cover",
    },
    farmName: {
      width: "100%",
    },
    totalArea: {
      marginRight: 25,
    },
    farmContianer: {
      gap: 15,
    },
  });

const FarmBasicDetail: React.FC<Props> = ({}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);
  const { farmDetail, setFarmDetail } = useContext(FarmDetailContext);

  const updateContextValue = useCallback(
    (key: FarmDetailKey, value: string | number) => {
      setFarmDetail((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          basicDetail: {
            ...prev.basicDetail,
            [key]: {
              ...prev.basicDetail[key],
              value,
            },
          },
        };
      });
    },
    [setFarmDetail]
  );

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
      </View>
      <View style={[globalStyle.column, styles.farmContianer]}>
        <View style={[globalStyle.column, globalStyle.width100]}>
          <MyFarmText bold fontSize="lg" enableStar>
            {CONSTANTS.FARM_DETAIL.FARM_DETAIL}
          </MyFarmText>
          <MyfarmInput
            placeholder="eg.myfarmland"
            value={farmDetail?.basicDetail.farmLandName.value}
            onChangeText={(event) => updateContextValue("farmLandName", event)}
            errorFlag={
              farmDetail?.basicDetail.farmLandName.valid ? false : true
            }
            errorMessage={
              farmDetail?.basicDetail?.farmLandName?.errorMessage
                ? farmDetail?.basicDetail?.farmLandName?.errorMessage
                : ""
            }
          ></MyfarmInput>
        </View>
        <View style={[globalStyle.width100]}>
          <MyFarmText bold fontSize="lg" enableStar>
            {CONSTANTS.FARM_DETAIL.FARM_LOCATION}
          </MyFarmText>
          <MyfarmInput
            placeholder="City/state,country"
            onChangeText={(event) => updateContextValue("location", event)}
            value={farmDetail?.basicDetail.location?.value}
            errorFlag={farmDetail?.basicDetail.location?.valid ? false : true}
            errorMessage={
              farmDetail?.basicDetail?.location?.errorMessage
                ? farmDetail?.basicDetail?.location?.errorMessage
                : ""
            }
          ></MyfarmInput>
        </View>
        <View style={[globalStyle.width100, globalStyle.row]}>
          <View
            style={[globalStyle.column, globalStyle.flex1, styles.totalArea]}
          >
            <MyFarmText bold fontSize="lg" enableStar>
              {CONSTANTS.FARM_DETAIL.TOTAL_AREA}
            </MyFarmText>

            <MyfarmInput
              placeholder="Enter number"
              keyboardType="numeric"
              onChangeText={(event) => updateContextValue("totalArea", event)}
              value={farmDetail?.basicDetail.totalArea.value}
              errorFlag={farmDetail?.basicDetail.totalArea.valid ? false : true}
              errorMessage={
                farmDetail?.basicDetail?.totalArea?.errorMessage
                  ? farmDetail?.basicDetail?.totalArea?.errorMessage
                  : ""
              }
            ></MyfarmInput>
          </View>
          <View style={[globalStyle.column, globalStyle.flex1]}>
            <MyFarmLandDropDown
              title={CONSTANTS.FARM_DETAIL.UNIT}
              titleBold
              options={unitOptions}
              onSelect={(event) => updateContextValue("unit", event.value)}
              enableStar
              value={farmDetail?.basicDetail.unit?.value}
            ></MyFarmLandDropDown>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FarmBasicDetail;
