import React, { useCallback, useContext, useMemo } from "react";
import MyFarmText from "../../common/text/myfarm-text";
import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "../../../context/theme/themeContext";
import { IThemeType } from "../../../config/type/ui-type";
import { useGlobalStyle } from "../../../styles/globalStyle";
import MyfarmInput from "../../common/input/myfarm-input";
import CONSTANTS from "../../../config/constants/common-constant";
import { FarmDetailKey } from "../../../config/type/ui-type/farmDetail-type";
import MyFarmLandDropDown from "../../common/dropdown/myFarm-dropDown.component";
import { FarmDetailContext } from "../../../context/farmDetail/farmDetailContext";
import { unitOptions } from "../../../config/constants/farmDetail-constant";

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
    totalArea: {
      marginRight: 25,
    },
    farmContainer: {
      gap: 15,
    },
  });

const FarmBasicDetail: React.FC = () => {
  const theme = useTheme();
  const globalStyle = useGlobalStyle();
  const styles = useMemo(() => createStyle(theme), [theme]);
  const { farmDetail, setFarmDetail } = useContext(FarmDetailContext);

  const { farmLandName, location, totalArea, unit } =
    farmDetail?.basicDetail || {};

  const updateContextValue = useCallback(
    (key: FarmDetailKey, value: string | number) => {
      setFarmDetail((prev) => {
        if (!prev?.basicDetail) return prev;
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
      {/* Title Section */}
      <View style={[globalStyle.column, styles.titleContainer]}>
        <Image
          source={require("../../../../assets/images/Search-Location-2--Streamline-Ux.png")}
          style={styles.image}
        />
        <MyFarmText bold fontSize="xxxl">
          {CONSTANTS.FARM_DETAIL.WELCOME_TO_FARM_FLOW}
        </MyFarmText>
        <MyFarmText>{CONSTANTS.FARM_DETAIL.DIGITAL_FARM_MANAGEMENT}</MyFarmText>
      </View>

      {/* Farm Details */}
      <View style={[globalStyle.column, styles.farmContainer]}>
        {/* Farm Name */}
        <View style={globalStyle.width100}>
          <MyFarmText bold fontSize="lg" enableStar>
            {CONSTANTS.FARM_DETAIL.FARM_DETAIL}
          </MyFarmText>
          <MyfarmInput
            placeholder="eg. myfarmland"
            value={farmLandName?.value}
            onChangeText={(val) => updateContextValue("farmLandName", val)}
            errorFlag={!farmLandName?.valid}
            errorMessage={farmLandName?.errorMessage || ""}
          />
        </View>

        {/* Location */}
        <View style={globalStyle.width100}>
          <MyFarmText bold fontSize="lg" enableStar>
            {CONSTANTS.FARM_DETAIL.FARM_LOCATION}
          </MyFarmText>
          <MyfarmInput
            placeholder="City/state, country"
            value={location?.value}
            onChangeText={(val) => updateContextValue("location", val)}
            errorFlag={!location?.valid}
            errorMessage={location?.errorMessage || ""}
          />
        </View>

        {/* Total Area + Unit */}
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
              value={totalArea?.value}
              onChangeText={(val) => updateContextValue("totalArea", val)}
              errorFlag={!totalArea?.valid}
              errorMessage={totalArea?.errorMessage || ""}
            />
          </View>
          <View style={[globalStyle.column, globalStyle.flex1]}>
            <MyFarmLandDropDown
              title={CONSTANTS.FARM_DETAIL.UNIT}
              titleBold
              initialValue={unitOptions[0]}
              options={unitOptions}
              onSelect={(opt) => updateContextValue("unit", opt.value)}
              enableStar
              value={unit?.value}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FarmBasicDetail;
