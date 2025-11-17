import {
  IFarmDetailPayLoad,
  IFarmDetailResponse,
} from "../config/type/apiType/farmDetailType";
import apiClient from "./apiClient";

export async function getfarmDetail(
  payload: IFarmDetailPayLoad
): Promise<IFarmDetailResponse> {
  console.log("apicleint");
  console.log(payload.userId);
  const response = await apiClient.get(`/api/farms/details/${payload.userId}`);
  return response.data;
}
