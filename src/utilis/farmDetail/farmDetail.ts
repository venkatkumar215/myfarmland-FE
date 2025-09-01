import { unitOptions } from "../../config/constants/farmDetailConstant";
import { IFarmDetail } from "../../config/type/uiType/farmDetailType";

export function getInitializedFarmDetail(): IFarmDetail {
  return {
    basicDetail: {
      farmLandName: { value: "", valid: false, errorMessage: "" },
      location: { value: "", valid: false, errorMessage: "" },
      totalArea: { value: "", valid: false, errorMessage: "" },
      unit: { value: "", valid: false, errorMessage: "" },
    },
    cropDetail: {
      crop: { value: [], valid: false, errorMessage: "" },
    },
  };
}
