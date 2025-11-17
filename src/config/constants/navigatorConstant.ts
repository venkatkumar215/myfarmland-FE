// Define the type for the tab list

import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { ITabList } from "../type/uiType/navigatorType ";
import CONSTANTS from "./commonConstant";
import { HomeScreen } from "../../screens/home/HomeScreen";
import { CropScreen } from "../../screens/crops/CropScreen";
import { SettingScreen } from "../../screens/setting/SettingScreen";
import { TaskScreen } from "../../screens/task/TaskScreen";
import { de } from "zod/v4/locales";

// This is a list of tabs with their names, icons, and components
const tabList: ITabList[] = [
  {
    name: CONSTANTS.TAB_LIST.HOME,
    iconName: "home",
    iconLibrary: FontAwesome5,
    component: HomeScreen,
    size: 16,
    focusedSize: 18,
  },
  {
    name: CONSTANTS.TAB_LIST.CROPS,
    iconName: "leaf",
    iconLibrary: FontAwesome5,
    component: CropScreen,
    size: 16,
    focusedSize: 18,
  },

  {
    hideName: true,
    name: CONSTANTS.TAB_LIST.ADD,
    iconName: "plus-circle",
    iconLibrary: FontAwesome,
    component: SettingScreen,
    size: 32,
    focusedSize: 32,
  },

  {
    name: CONSTANTS.TAB_LIST.TASK,
    iconName: "clipboard-list",
    iconLibrary: FontAwesome5,
    component: TaskScreen,
    size: 16,
    focusedSize: 18,
  },

  {
    name: CONSTANTS.TAB_LIST.SETTINGS,
    iconName: "cogs",
    iconLibrary: FontAwesome5,
    component: SettingScreen,
    size: 16,
    focusedSize: 18,
  },
];

export default tabList;
