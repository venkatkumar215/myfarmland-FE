import { ZodTypeAny } from "zod";
import { IDropDownOptions } from "./common-type";

export interface IStepDetail {
  id: string;
  title: string;
  componentName: React.ComponentType<any>;
  schema?: ZodTypeAny;
}

export interface IAnimalOptions extends IDropDownOptions {
  description: string;
  iconLibrary?: any;
  iconName?: string;
  size?: number;
}

export interface ICropOptions extends IDropDownOptions {}

export interface IBasicFarmDetail {
  farmLandName: {
    value: string;
    valid?: boolean;
    errorMessage?: string | null;
  };
  location?: {
    value: string;
    valid?: boolean;
    errorMessage?: string;
  };
  totalArea: {
    value: string;
    valid?: boolean;
    errorMessage?: string | null;
  };
  unit: {
    value: string;
    valid?: boolean;
    errorMessage?: string | null;
  };
}
export interface ICropFarmDetail {
  crop: {
    value: Array<IDropDownOptions> | [];
    valid?: boolean;
    errorMessage?: string;
  };
}
export interface IAnimalDetail {
  animal: {
    value: Array<IDropDownOptions> | [];
    valid?: boolean;
    errorMessage?: string;
  };
}
export interface IFarmDetail {
  basicDetail: IBasicFarmDetail;
  cropDetail?: ICropFarmDetail;
  animalDetail?: IAnimalDetail;
}

export type FarmDetailKey = keyof IBasicFarmDetail;
export type IFarmDetailKey = keyof IFarmDetail;
