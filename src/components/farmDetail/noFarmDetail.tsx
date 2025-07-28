import React, { useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../context/theme/themeContext";
import { IThemeType } from "../../config/type/ui-type";
import MyfarmButton from "../common/button/myfarm-button";
import MyFarmText from "../common/text/myfarm-text";
import AddFarmDetails from "./addFarmDetail";
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
      borderWidth: 2,
      borderColor: theme.colors.border.primary,
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      justifyContent: "space-around",
      minHeight: 200,
      gap: 12,
    },
  });

const NoFarmDetailComponent: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);
  const [createNewFarmDetail, setCreateNewFarmDetail] =
    useState<boolean>(false);
  return (
    <View>
      {createNewFarmDetail ? (
        <AddFarmDetails />
      ) : (
        <View style={styles.noFarmDetailcontainer}>
          <View style={styles.containerBox}>
            <View>
              <MyFarmText fontSize="xxxl" bold>
                Icon
              </MyFarmText>
            </View>
            <View>
              <MyFarmText bold fontSize="xl">
                No Farm Details Found
              </MyFarmText>
            </View>
            <View>
              <MyFarmText>
                It Looks like you haven't set up a farm yet
              </MyFarmText>
            </View>
            <View>
              <MyfarmButton
                onPress={() => {
                  setCreateNewFarmDetail(true);
                }}
                title="Create Farm"
                fontSize="xl"
              ></MyfarmButton>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default NoFarmDetailComponent;
