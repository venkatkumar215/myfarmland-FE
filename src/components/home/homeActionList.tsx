import React, { use, useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { home_action_list } from "../../config/constants/home-constant";
import { useTheme } from "../../context/theme/themeContext";
import MyFarmText from "../common/text/myfarm-text";
import { FontAwesome5 } from "@expo/vector-icons";
import { IThemeType } from "../../config/type/ui-type/theme-type";

type Props = {};

/**
 * HomeActionList is a component that displays a list of actions available on the home screen.
 *
 * @param {IThemeType} theme
 * @returns {*}
 */
const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.colors.background.secondary,
    },
    actionList: {
      display: "flex",
      flexDirection: "row",
      borderBottomColor: theme.colors.icon.inactive,
      borderBottomWidth: 1,
      paddingBottom: 10,
      paddingTop: 10,
    },
    actionIcon: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      paddingLeft: 15,
    },
    actionText: {
      display: "flex",
      flex: 2,
      verticalAlign: "middle",
      alignContent: "center",
    },
    action: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-end",
      paddingRight: 15,
    },
  });

const HomeActionList: React.FC<Props> = () => {
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
      {home_action_list.map((action, index) => (
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
