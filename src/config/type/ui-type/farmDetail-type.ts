import { ZodTypeAny } from "zod";

export interface IStepDetail {
  id: string;
  title: string;
  componentName: React.ComponentType<any>;
  schema?: ZodTypeAny;
}

export interface IBasicFarmDetail {
  farmLandName: {
    value: string;
    valid?: boolean;
    errorMessage?: string | null;
  };
  location?: {
    value: string | null;
    valid?: boolean;
    errorMessage?: string ;
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

export interface IFarmDetail {
  basicDetail: IBasicFarmDetail;
}

export type FarmDetailKey = keyof IBasicFarmDetail;
export type IFarmDetailKey = keyof IFarmDetail;
