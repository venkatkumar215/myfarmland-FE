import {
  IFarmDetailPayLoad,
  IFarmDetailResponse,
} from "../config/type/apiType/farmDetailType";
import apiClient from "./apiClient";

export async function getfarmDetail(
  payload: IFarmDetailPayLoad
): Promise<IFarmDetailResponse> {
  const response = await apiClient.get(`/api/farms/details/${payload.userId}`);
  return response.data;
}
