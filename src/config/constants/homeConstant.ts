import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import CONSTANTS from "./commonConstant";
import {
  IAnimalType,
  IHealthMonitorType,
  IHomeActionType,
} from "../type/uiType/homeType";

export const animalList: IAnimalType[] = [
  {
    name: CONSTANTS.ANIMAL_LIST.COW,
    iconName: "cow",
    iconLibrary: MaterialCommunityIcons,
    count: 15,
    iconSize: 36,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.GOAT,
    iconName: "goat",
    iconLibrary: MaterialIcons,
    count: 10,
    iconSize: 36,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.CHICKEN,
    iconName: "egg",
    iconLibrary: FontAwesome5,
    count: 5,
    iconSize: 36,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.TO_DO,
    iconName: "warning",
    iconLibrary: FontAwesome,
    count: 0,
    iconSize: 30,
  },
];

export const homeActionList: IHomeActionType[] = [
  {
    name: CONSTANTS.HOME_ACTION_LIST.ANIMAL_MANAGEMENT,
    imgKey: "animal",
  },
  {
    name: CONSTANTS.HOME_ACTION_LIST.CROP_MANAGEMENT,
    imgKey: "crop",
  },
  {
    name: CONSTANTS.HOME_ACTION_LIST.FARM_TASK,
    imgKey: "task",
  },
  {
    name: CONSTANTS.HOME_ACTION_LIST.FEEDING_SCHEDULE,
    imgKey: "feed",
  },
];

export const healthMonitorCardDetails: IHealthMonitorType[] = [
  {
    groupId: "1",
    status: "HEALTHY",
    iconLibrary: MaterialCommunityIcons,
    iconName: "cow",
    iconSize: 28,
    statusColor:'active'
  },
  {
    groupId: "2",
    status: "HEALTHY",
    iconLibrary: MaterialIcons,
    iconName: "goat",
    iconSize: 28,
    statusColor:'active'
  },
  {
    groupId: "3",
    status: "CAUTION",
    iconLibrary: Ionicons,
    iconName: "fish",
    iconSize: 28,
    statusColor:'caution'
  },
  {
    groupId: "4",
    status: "CRITICAL",
    iconLibrary: MaterialCommunityIcons,
    iconName: "duck",
    iconSize: 28,
    statusColor:'warning'
  },
];
