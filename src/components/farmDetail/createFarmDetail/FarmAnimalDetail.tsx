import React, { useMemo } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MyFarmText from "../../common/text/myfarm-text";
import { useTheme } from "../../../context/theme/themeContext";
import { IThemeType } from "../../../config/type/ui-type";
import { globalStyle } from "../../../styles/globalStyle";
import CONSTANTS from "../../../config/constants/common-constant";
import { animalOptions } from "../../../config/constants/farmDetail-constant";
import MyFarmCard from "../../common/card/myfarm-card";
import { FontAwesome5 } from "@expo/vector-icons";
import MyFarmCheckBox from "../../common/checkBox/myfarm-checkbox";
import { IAnimalOptions } from "../../../config/type/ui-type/farmDetail-type";

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

const FarmAnimalDetail: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  const getFontIcon = (animalList: IAnimalOptions) => {
    return React.createElement(animalList.iconLibrary, {
      name: animalList.iconName,
      size: animalList.size,
    });
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
            <View key={index} style={[globalStyle.column]}>
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
                    <MyFarmCheckBox label=""></MyFarmCheckBox>
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
