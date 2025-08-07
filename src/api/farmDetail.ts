import {
  IFarmDetailPayLoad,
  IFarmDetailResponse,
} from "../config/type/api-type/farmDetail-type";
import apiClient from "./apiClient";

export async function getfarmDetail(
  payload: IFarmDetailPayLoad
): Promise<IFarmDetailResponse> {
  const response = await apiClient.get(`/api/farms/details/${payload.userId}`);
  return response.data;
}
