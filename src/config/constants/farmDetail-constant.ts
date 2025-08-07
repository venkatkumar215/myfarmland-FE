import FarmBasicDetail from "../../components/farmDetail/createFarmDetail/farmBasicDetail";
import SetAnimalSize from "../../components/farmDetail/createFarmDetail/setAnimalSize";
import SetFarmSize from "../../components/farmDetail/createFarmDetail/setFarmSize";
import { farmDetailSchema } from "../../schemas/farmDetail-schema";
import { IDropDownOptions } from "../type/ui-type";
import { FarmDetailKey, IStepDetail } from "../type/ui-type/farmDetail-type";
import CONSTANTS from "./common-constant";

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
    id: "farmSizeDetail",
    title: CONSTANTS.FARM_SIZE_DETAIL,
    componentName: SetFarmSize,
  },
  {
    id: "animalSizeDetail",
    title: CONSTANTS.ANIMAL_SIZE_DETAIL,
    componentName: SetAnimalSize,
  },
];

export const unitOptions: Array<IDropDownOptions> = [
  { label: "Acres", value: "Acres" },
  { label: "Cents", value: "Cents" },
];
