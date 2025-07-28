import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import CONSTANTS from "./common-constant";
import { IAnimalType, IHomeActionType } from "../type/ui-type/home-type";

export const animal_list: IAnimalType[] = [
  {
    name: CONSTANTS.ANIMAL_LIST.COW,
    iconName: "cow",
    iconLibrary: MaterialCommunityIcons,
    count: 15,
    size: 36,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.GOAT,
    iconName: "goat",
    iconLibrary: MaterialIcons,
    count: 10,
    size: 36,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.CHICKEN,
    iconName: "egg",
    iconLibrary: FontAwesome5,
    count: 5,
    size: 36,
  },
  {
    name: CONSTANTS.ANIMAL_LIST.TO_DO,
    iconName: "warning",
    iconLibrary: FontAwesome,
    count: 0,
    size: 30,
  },
];

export const home_action_list: IHomeActionType[] = [
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
