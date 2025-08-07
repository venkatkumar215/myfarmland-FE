import { IFarmDetail } from "../../config/type/ui-type/farmDetail-type";
import { isEmptyObject } from "../common/comon";

export function getInitializedFarmDetail(): IFarmDetail {
  return {
    basicDetail: {
      farmLandName: { value: "", valid: false, errorMessage: "" },
      location: { value: "", valid: false, errorMessage: "" },
      totalArea: { value: "", valid: false, errorMessage: "" },
      unit: { value: "", valid: false, errorMessage: "" },
    },
  };
}
