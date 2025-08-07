import React, { useMemo, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useTheme } from "../../context/theme/themeContext";
import { IThemeType } from "../../config/type/ui-type";
import MyfarmButton from "../common/button/myfarm-button";
import MyFarmText from "../common/text/myfarm-text";
import AddFarmDetails from "./addFarmDetail";
import { globalStyle } from "../../styles/globalStyle";
import CONSTANTS from "../../config/constants/common-constant";
import { FarmDetailProvider } from "../../context/farmDetail/farmDetailContext";
interface Props {}

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    noFarmDetailcontainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      backgroundColor: theme.colors.background.primary,
    },
    containerBox: {
      padding: 20,
      alignItems: "center",
      justifyContent: "space-around",
      minHeight: 200,
      gap: 15,
    },
    image: {
      minHeight: 100,
      minWidth: 100,
      maxHeight: 200,
      maxWidth: 200,
      resizeMode: "cover",
    },
  });

const NoFarmDetailComponent: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);
  const [createNewFarmDetail, setCreateNewFarmDetail] =
    useState<boolean>(false);
  return (
    <FarmDetailProvider>
      <View>
        {createNewFarmDetail ? (
          <AddFarmDetails />
        ) : (
          <View style={styles.noFarmDetailcontainer}>
            <View style={styles.containerBox}>
              <View>
                <Image
                  source={require("../../../assets/images/Sunny-Barn-Field--Streamline-Ux.png")}
                  style={styles.image}
                ></Image>
              </View>
              <View>
                <MyFarmText bold fontSize="xxxl">
                  {CONSTANTS.FARM_DETAIL.NO_FARM_DETAILS_FOUND}
                </MyFarmText>
              </View>
              <View>
                <MyFarmText>
                  {CONSTANTS.FARM_DETAIL.FARM_SETUP_MESSAGE}
                </MyFarmText>
              </View>
              <View>
                <MyfarmButton
                  onPress={() => {
                    setCreateNewFarmDetail(true);
                  }}
                  title={CONSTANTS.FARM_DETAIL.CREATE_FARM}
                  fontSize="xl"
                  bold
                ></MyfarmButton>
              </View>
            </View>
          </View>
        )}
      </View>
    </FarmDetailProvider>
  );
};

export default NoFarmDetailComponent;
