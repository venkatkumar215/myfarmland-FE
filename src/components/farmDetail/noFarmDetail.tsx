import React, { useMemo, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useTheme } from "../../context/theme/ThemeContext";
import { IThemeType } from "../../config/type/uiType";
import MyfarmButton from "../common/button/MyfarmButton";
import MyFarmText from "../common/text/MyfarmText";
import CONSTANTS from "../../config/constants/commonConstant";
import { FarmDetailProvider } from "../../context/farmDetail/FarmDetailContext";
import AddFarmDetails from "./AddFarmDetail";

interface Props {}

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    containerBox: {
      alignItems: "center",
      gap: 15,
      justifyContent: "space-around",
      minHeight: 200,
      padding: 20,
    },
    image: {
      maxHeight: 200,
      maxWidth: 200,
      minHeight: 100,
      minWidth: 100,
      resizeMode: "cover",
    },
    noFarmDetailcontainer: {
      alignItems: "center",
      backgroundColor: theme.colors.background.primary,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      width: "100%",
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
