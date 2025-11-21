import React, { useContext, useMemo, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import MyFarmText from "../../common/text/MyFarmText";
import { IDropDownOptions } from "../../../config/type/uiType";
import { useGlobalStyle } from "../../../styles/globalStyle";
import CONSTANTS from "../../../config/constants/commonConstant";
import { animalOptions } from "../../../config/constants/farmDetailConstant";
import MyFarmCard from "../../common/card/MyFarmCard";
import MyFarmCheckBox from "../../common/checkBox/MyfarmCheckbox";
import { IAnimalOptions } from "../../../config/type/uiType/farmDetailType";
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

const FarmAnimalDetail: React.FC<Props> = () => {
  const globalStyle = useGlobalStyle();
  const styles = useMemo(() => createStyle(), []);
  const [selectedAnimal, setselectedAnimal] = useState<
    Array<IDropDownOptions> | []
  >([]);
  const { farmDetail, setFarmDetail } = useContext(FarmDetailContext);

  const getFontIcon = (animalList: IAnimalOptions) => {
    return React.createElement(animalList.iconLibrary, {
      name: animalList.iconName,
      size: animalList.size,
    });
  };

  const updateSelectedAnimal = (event: boolean, animal: IDropDownOptions) => {
    const updateSelectedAnimalDetail = [...selectedAnimal];

    if (updateSelectedAnimalDetail.length === 0) {
      updateSelectedAnimalDetail.push(animal);
    } else if (updateSelectedAnimalDetail.length > 0) {
      if (event) {
        updateSelectedAnimalDetail.push(animal);
      } else {
        const index = updateSelectedAnimalDetail.findIndex(
          (item) => item?.value === animal.value
        );
        updateSelectedAnimalDetail.splice(index, 1);
      }
    }

    setselectedAnimal(updateSelectedAnimalDetail);

    const updateContextValue = {
      ...farmDetail!,
      animalDetail: {
        ...farmDetail?.animalDetail,
        animal: {
          ...farmDetail?.animalDetail?.animal,
          value: updateSelectedAnimalDetail,
        },
      },
    };

    setFarmDetail(updateContextValue);
  };

  return (
    <View style={[globalStyle.column, styles.container]}>
      <View style={[globalStyle.column, styles.titleContainer]}>
        <Image
          source={require("../../../../assets/images/cow.png")}
          style={styles.image}
        ></Image>
        <MyFarmText bold fontSize="xxxl">
          {CONSTANTS.FARM_DETAIL.SELECT_YOUR_ANIMAL}
        </MyFarmText>
        <MyFarmText fontSize="md">
          {CONSTANTS.FARM_DETAIL.ANIMAL_SETUP_MESSAGE}
        </MyFarmText>
      </View>
      <ScrollView>
        <View style={[globalStyle.column, styles.AnimalContianer]}>
          {animalOptions.map((animal, index) => (
            <View key={index} style={globalStyle.column}>
              <MyFarmCard>
                <View style={[globalStyle.row, styles.cardContainer]}>
                  <View style={styles.cardIcon}>{getFontIcon(animal)}</View>
                  <View style={[globalStyle.column, styles.cardText]}>
                    <MyFarmText bold fontSize="lg">
                      {animal.label}
                    </MyFarmText>
                    <MyFarmText fontSize="lg">{animal.description}</MyFarmText>
                  </View>
                  <View style={styles.cardCheckBox}>
                    <MyFarmCheckBox
                      label=""
                      handlePress={(event) =>
                        updateSelectedAnimal(event, animal)
                      }
                    ></MyFarmCheckBox>
                  </View>
                </View>
              </MyFarmCard>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FarmAnimalDetail;
