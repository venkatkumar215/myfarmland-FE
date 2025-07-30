import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import MyFarmText from "../../common/text/myfarm-text";
import { useTheme } from "../../../context/theme/themeContext";
import { IThemeType } from "../../../config/type/ui-type";
import { globalStyle } from "../../../styles/globalStyle";

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

const SetAnimalSize: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  return (
    <View style={[globalStyle.column, styles.container]}>
      <View style={[globalStyle.center, styles.titleContainer]}>
        <MyFarmText fontSize="xxl" bold>
          Icon
        </MyFarmText>
        <MyFarmText bold fontSize="xxl">
          Select Your Livestock
        </MyFarmText>
        <MyFarmText fontSize="md">
          Choose the animal you place to raise (optional)
        </MyFarmText>
      </View>
    </View>
  );
};

export default SetAnimalSize;
