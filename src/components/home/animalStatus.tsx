import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { animalList } from "../../config/constants/homeConstant";
import { IAnimalType } from "../../config/type/uiType/homeType";
import MyFarmText from "../common/text/MyFarmText";
import { useTheme } from "../../context/theme/ThemeContext";
import { IThemeType } from "../../config/type/uiType/themeType";

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
      alignItems: "center",
      backgroundColor: theme.colors.background.secondary,
      borderRadius: 10,
      display: "flex",
      flex: 1,
      justifyContent: "center",
      marginRight: 10,
      maxWidth: 100,
      padding: 15,
    },
    animalIcon: {
      backgroundColor: theme.colors.icon.active,
      borderRadius: 50,
      padding: 10,
    },
  });
const AnimalStatus: React.FC = () => {
  const theme = useTheme();

  const styles = useMemo(() => createStyle(theme), [theme]);
  // This function returns the font icon for the animal
  const getFontIcon = (animalList: IAnimalType) => {
    return React.createElement(animalList.iconLibrary, {
      name: animalList.iconName,
      size: animalList.iconSize,
      solid: true,
      color: "white",
    });
  };
  return (
    <>
      {animalList.map((animal, index) => (
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
