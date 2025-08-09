import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import FarmBasicDetail from "../../components/farmDetail/createFarmDetail/farmBasicDetail";
import { farmDetailSchema } from "../../schemas/farmDetail-schema";
import { IDropDownOptions } from "../type/ui-type";
import {
  FarmDetailKey,
  IAnimalOptions,
  ICropOptions,
  IStepDetail,
} from "../type/ui-type/farmDetail-type";
import CONSTANTS from "./common-constant";
import FarmAnimalDetail from "../../components/farmDetail/createFarmDetail/FarmAnimalDetail";
import FarmCropDetail from "../../components/farmDetail/createFarmDetail/farmCropDetail";

export const validKeys: FarmDetailKey[] = [
  "farmLandName",
  "location",
  "totalArea",
  "unit",
];

export const stepDetails: Array<IStepDetail> = [
  {
    id: "basicDetail",
    title: CONSTANTS.BASIC_FARM_DETAIL,
    componentName: FarmBasicDetail,
    schema: farmDetailSchema,
  },
  {
    id: "cropDetail",
    title: CONSTANTS.FARM_SIZE_DETAIL,
    componentName: FarmCropDetail,
  },

  {
    id: "animalDetail",
    title: CONSTANTS.ANIMAL_SIZE_DETAIL,
    componentName: FarmAnimalDetail,
  },
];

export const unitOptions: Array<IDropDownOptions> = [
  { label: "Acres", value: "Acres" },
  { label: "Cents", value: "Cents" },
];

export const animalOptions: Array<IAnimalOptions> = [
  {
    value: "cattle",
    label: "Cattle",
    description: "Milk, compost, ploughing",
    iconLibrary: MaterialCommunityIcons,
    iconName: "cow",
    size: 30,
  },
  {
    value: "poultry",
    label: "Poultry",
    description: "Chickens, ducks, geese — eggs & meat",
    iconLibrary: FontAwesome5,
    iconName: "the-red-yeti",
    size: 30,
  },
  {
    value: "goats",
    label: "Goats",
    description: "Meat, milk, easy to raise",
    iconLibrary: MaterialIcons,
    iconName: "goat",
    size: 30,
  },
  {
    value: "fish",
    label: "Fish (Aquaculture)",
    description: "Tilapia, Rohu, etc.",
    iconLibrary: FontAwesome5,
    iconName: "fish",
    size: 26,
  },
  {
    value: "bees",
    label: "Honey Bees",
    description: "Pollination & honey",
    iconLibrary: FontAwesome6,
    iconName: "mosquito",
    size: 24,
  },
  {
    value: "dogs",
    label: "Farm Dogs",
    description: "Security & companions",
    iconLibrary: FontAwesome6,
    iconName: "shield-dog",
    size: 27,
  },
  {
    value: "Horse",
    label: "Horse",
    description: "Security & companions",
    iconLibrary: FontAwesome6,
    iconName: "horse",
    size: 27,
  },
  {
    value: "pigs",
    label: "Pigs",
    description: "Fast-growing meat animals",
    iconLibrary: FontAwesome5,
    iconName: "piggy-bank",
    size: 25,
  },
  {
    value: "rabbits",
    label: "Rabbits",
    description: "Meat, fast breeders, kid-friendly",
    iconLibrary: FontAwesome5,
    iconName: "rabbit",
    size: 30,
  },
  {
    value: "ducks",
    label: "Ducks",
    description: "Eggs, meat, good with fish ponds",
    iconLibrary: FontAwesome5,
    iconName: "duck",
    size: 30,
  },
];

export const cropOptional: Array<ICropOptions> = [
  {
    label: "Vegetables",
    value: "vegetables",
  },
  {
    label: "Leafy Greens",
    value: "Leafy Greens",
  },
  {
    label: "Fruits Crops",
    value: "fruit-crops",
  },
  {
    label: "Grains",
    value: "grains",
  },
  {
    label: "Pulses",
    value: "pulses",
  },
  {
    label: "Plantation Tree",
    value: "plantation-tree",
  },
  {
    label: "Timber Tree",
    value: "timber-tree",
  },
];
