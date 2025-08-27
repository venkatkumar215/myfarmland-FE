import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import MyFarmText from "../../common/text/myfarm-text";
import { useTheme } from "../../../context/theme/themeContext";
import { IDropDownOptions, IThemeType } from "../../../config/type/ui-type";
import { useGlobalStyle } from "../../../styles/globalStyle";

import CONSTANTS from "../../../config/constants/common-constant";
import {
  animalOptions,
  cropOptional,
} from "../../../config/constants/farmDetail-constant";
import MyFarmCard from "../../common/card/myfarm-card";
import MyFarmCheckBox from "../../common/checkBox/myfarm-checkbox";
import { FarmDetailContext } from "../../../context/farmDetail/farmDetailContext";

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
    AnimalContianer: {
      gap: 15,
    },
    cardContainer: {
      alignItems: "center",
    },
    cardIcon: {
      flex: 1,
    },
    cardText: {
      paddingLeft: 20,
      flex: 8,
    },
    cardCheckBox: {
      alignItems: "flex-end",
      paddingRight: 10,
      flex: 1,
    },
  });

const FarmCropDetail: React.FC<Props> = () => {
  const theme = useTheme();
  const globalStyle = useGlobalStyle();
  const styles = useMemo(() => createStyle(theme), [theme]);
  const { farmDetail, setFarmDetail } = useContext(FarmDetailContext);
  const [selectedCrop, setSelectedCrop] = useState<Array<IDropDownOptions>>([]);

  const updateSelectedCrop = (event: boolean, crop: IDropDownOptions) => {
    const updateSelectedCropDetail = [...selectedCrop];

    if (updateSelectedCrop.length === 0) {
      updateSelectedCropDetail.push(crop);
    } else if (updateSelectedCrop.length > 0) {
      if (event) {
        updateSelectedCropDetail.push(crop);
      } else {
        const index = updateSelectedCropDetail.findIndex(
          (item) => item?.value === crop.value
        );
        updateSelectedCropDetail.splice(index, 1);
      }
    }

    setSelectedCrop(updateSelectedCropDetail);

    const updateContextValue = {
      ...farmDetail!,
      cropDetail: {
        ...farmDetail?.cropDetail,
        crop: {
          ...farmDetail?.cropDetail?.crop,
          value: updateSelectedCropDetail,
        },
      },
    };

    setFarmDetail(updateContextValue);
  };

  return (
    <View style={[globalStyle.column, styles.container]}>
      <View style={[globalStyle.column, styles.titleContainer]}>
        <Image
          source={require("../../../../assets/images/crop.png")}
          style={styles.image}
        ></Image>
        <MyFarmText bold fontSize="xxxl">
          {CONSTANTS.FARM_DETAIL.CHOOSE_YOUR_CROP}
        </MyFarmText>
        <MyFarmText fontSize="md">
          {CONSTANTS.FARM_DETAIL.CROP_SETUP_MESSAGE}
        </MyFarmText>
      </View>
      <ScrollView>
        <View style={[globalStyle.column, styles.AnimalContianer]}>
          {cropOptional.map((crop, index) => (
            <View key={index} style={[globalStyle.column]}>
              <MyFarmCard>
                <View style={[globalStyle.row, styles.cardContainer]}>
                  <MyFarmCheckBox
                    label={crop.label}
                    handlePress={(event) => updateSelectedCrop(event, crop)}
                  ></MyFarmCheckBox>
                </View>
              </MyFarmCard>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FarmCropDetail;
