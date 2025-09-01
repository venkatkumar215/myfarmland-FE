import React, { useMemo } from "react";
import { StyleSheet, View, Image } from "react-native";
import { homeActionList } from "../../config/constants/homeConstant";
import { useTheme } from "../../context/theme/ThemeContext";
import MyFarmText from "../common/text/MyfarmText";
import { FontAwesome5 } from "@expo/vector-icons";
import { IThemeType } from "../../config/type/uiType/themeType";

/**
 * HomeActionList is a component that displays a list of actions available on the home screen.
 *
 * @param {IThemeType} theme
 * @returns {*}
 */
const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    action: {
      alignItems: "flex-end",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      paddingRight: 15,
    },
    actionIcon: {
      alignItems: "flex-start",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      paddingLeft: 15,
    },
    actionList: {
      borderBottomColor: theme.colors.icon.inactive,
      borderBottomWidth: 1,
      display: "flex",
      flexDirection: "row",
      paddingBottom: 10,
      paddingTop: 10,
    },
    actionText: {
      alignContent: "center",
      display: "flex",
      flex: 2,
      verticalAlign: "middle",
    },
    container: {
      backgroundColor: theme.colors.background.secondary,
      display: "flex",
      flexDirection: "column",
    },
  });

const HomeActionList: React.FC = () => {
  const theme = useTheme();

  const styles = useMemo(() => createStyle(theme), [theme]);

  const imageMap = {
    animal: require("../../../assets/images/cow.png"),
    crop: require("../../../assets/images/crop-management.png"),
    feed: require("../../../assets/images/feeding-management.png"),
    task: require("../../../assets/images/task-management.png"),
  };

  return (
    <View style={styles.container}>
      {homeActionList.map((action, index) => (
        <View key={index} style={styles.actionList}>
          <View style={styles.actionIcon}>
            <Image
              source={imageMap[action.imgKey]}
              style={{ width: 60, height: 60 }}
            ></Image>
          </View>
          <MyFarmText style={styles.actionText} fontSize="xl" bold>
            {action.name}
          </MyFarmText>
          <View style={styles.action}>
            <FontAwesome5
              name="chevron-right"
              size={16}
              color={theme.colors.icon.active}
            ></FontAwesome5>
          </View>
        </View>
      ))}
    </View>
  );
};

export default HomeActionList;
