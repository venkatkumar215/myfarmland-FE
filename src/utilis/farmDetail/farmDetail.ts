import { unitOptions } from "../../config/constants/farmDetail-constant";
import { IFarmDetail } from "../../config/type/ui-type/farmDetail-type";

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
