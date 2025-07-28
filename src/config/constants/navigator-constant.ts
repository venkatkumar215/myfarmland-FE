// Define the type for the tab list

import { FontAwesome5 } from "@expo/vector-icons";
import { ITabList } from "../type/ui-type/navigator-type ";
import { SettingScreen } from "../../screens/setting/settingScreen";
import { CropScreen } from "../../screens/crops/cropScreen";
import { HomeScreen } from "../../screens/home/homeScreen";
import { TaskScreen } from "../../screens/task/taskScreen";
import CONSTANTS from "./common-constant";

// This is a list of tabs with their names, icons, and components
const tabList: ITabList[] = [
  {
    name: CONSTANTS.TAB_LIST.HOME,
    iconName: "home",
    iconLibrary: FontAwesome5,
    component: HomeScreen,
  },
  // {
  //   name: CONSTANTS.TAB_LIST.MARKETING,
  //   iconName: "shop",
  //   iconLibrary: FontAwesome6,
  //   component: SettingScreen,
  // },
  {
    name: CONSTANTS.TAB_LIST.CROPS,
    iconName: "leaf",
    iconLibrary: FontAwesome5,
    component: CropScreen,
  },
  {
    name: CONSTANTS.TAB_LIST.TASK,
    iconName: "clipboard-list",
    iconLibrary: FontAwesome5,
    component: TaskScreen,
  },

  {
    name: CONSTANTS.TAB_LIST.SETTINGS,
    iconName: "cogs",
    iconLibrary: FontAwesome5,
    component: SettingScreen,
  },
];
export default tabList;
