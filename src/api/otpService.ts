import {
  ISendOtpPayload,
  ISendOtpResponse,
  IVerifyOtpPayload,
  IVerifyOtpResponse,
} from "../config/type/api-type/otp-type";
import apiClient from "./apiClient";

export async function sendOtp(
  payload: ISendOtpPayload
): Promise<ISendOtpResponse> {
  const response = await apiClient.post<ISendOtpResponse>(
    "/api/auth/request-otp",
    payload
  );
  return response.data;
}

export async function verifyOtpApi(
  payload: IVerifyOtpPayload
): Promise<IVerifyOtpResponse> {
  const response = await apiClient.post<IVerifyOtpResponse>(
    "/api/auth/verify-otp",
    payload
  );
  return response.data;
}
