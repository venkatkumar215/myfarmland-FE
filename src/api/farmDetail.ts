import {
  IFarmDetailPayLoad,
  IFarmDetailResponse,
} from "../config/type/api-type/farmDetail-type";
import apiClient from "./apiClient";

export async function getfarmDetail(
  payload: IFarmDetailPayLoad
): Promise<IFarmDetailResponse> {
  console.log('payload',payload)
  const response = await apiClient.get(`/api/farms/details/${payload.userId}`);
  return response.data;
}
