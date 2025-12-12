import React, { useContext, useMemo, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import MyFarmText from "../../common/text/MyFarmText";
import { useTheme } from "../../../context/theme/ThemeContext";
import { IDropDownOptions } from "../../../config/type/uiType";
import { useGlobalStyle } from "../../../styles/globalStyle";

import CONSTANTS from "../../../config/constants/commonConstant";
import { cropOptional } from "../../../config/constants/farmDetailConstant";
import MyFarmCard from "../../common/card/MyFarmCard";
import MyFarmCheckBox from "../../common/checkBox/MyfarmCheckbox";
import { FarmDetailContext } from "../../../context/farmDetail/FarmDetailContext";

interface Props {}

const createStyle = () =>
  StyleSheet.create({
    AnimalContianer: {
      gap: 15,
    },
    cardCheckBox: {
      alignItems: "flex-end",
      flex: 1,
      paddingRight: 10,
    },
    cardContainer: {
      alignItems: "center",
    },
    cardIcon: {
      flex: 1,
    },
    cardText: {
      flex: 8,
      paddingLeft: 20,
    },
    container: {
      flex: 1,
      justifyContent: "flex-start",
      padding: 20,
    },
    image: {
      maxHeight: 80,
      maxWidth: 80,
      minHeight: 30,
      minWidth: 30,
      resizeMode: "cover",
    },
    titleContainer: {
      alignItems: "center",
      gap: 10,
      marginBottom: 20,
      maxHeight: 150,
    },
  });

const FarmCropDetail: React.FC<Props> = () => {
  const theme = useTheme();
  const globalStyle = useGlobalStyle();
  const styles = useMemo(() => createStyle(), []);
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
        <MyFarmText   fontBold fontSize="xxxl">
          {CONSTANTS.FARM_DETAIL.CHOOSE_YOUR_CROP}
        </MyFarmText>
        <MyFarmText fontSize="md">
          {CONSTANTS.FARM_DETAIL.CROP_SETUP_MESSAGE}
        </MyFarmText>
      </View>
      <ScrollView>
        <View style={[globalStyle.column, styles.AnimalContianer]}>
          {cropOptional.map((crop, index) => (
            <View key={index} style={globalStyle.column}>
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
