import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { animal_list } from "../../config/constants/homeConstant";
import { IAnimalType } from "../../config/type/uiType/homeType";
import MyFarmText from "../common/text/MyfarmText";
import { useTheme } from "../../context/theme/ThemeContext";
import { IThemeType } from "../../config/type/uiType/themeType";

type Props = {};
// This component displays the status of animals on the farm
// It uses the animal_list constant to get the list of animals and their details

/**
 *
 * This function creates styles for the AnimalStatus component based on the current theme.
 *
 * @param {IThemeType} theme
 */
const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    animalDetail: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.colors.background.secondary,
      padding: 15,
      maxWidth: 100,
      marginRight: 10,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    animalIcon: {
      backgroundColor: theme.colors.icon.active,
      padding: 10,
      borderRadius: 50,
    },
  });
const AnimalStatus: React.FC<Props> = () => {
  const theme = useTheme();

  const styles = useMemo(() => createStyle(theme), [theme]);
  // This function returns the font icon for the animal
  const getFontIcon = (animalList: IAnimalType) => {
    return React.createElement(animalList.iconLibrary, {
      name: animalList.iconName,
      size: animalList.size,
      solid: true,
      color: "white",
    });
  };
  return (
    <>
      {animal_list.map((animal, index) => (
        <View key={index} style={styles.animalDetail}>
          <View style={styles.animalIcon}>{getFontIcon(animal)}</View>
          <MyFarmText bold>{animal.name}</MyFarmText>
          <MyFarmText fontSize="xxl" bold>
            {animal.count}
          </MyFarmText>
        </View>
      ))}
    </>
  );
};

export default AnimalStatus;
