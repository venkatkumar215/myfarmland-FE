import {
  SendOtpPayload,
  SendOtpResponse,
  VerifyOtpPayload,
  VerifyOtpResponse,
} from "../config/type/api-type/otp-type";
import apiClient from "./apiClient";

export async function sendOtp(
  payload: SendOtpPayload
): Promise<SendOtpResponse> {
  const response = await apiClient.post<SendOtpResponse>(
    "/api/auth/request-otp",
    payload
  );
  return response.data;
}

export async function verifyOtpApi(
  payload: VerifyOtpPayload
): Promise<VerifyOtpResponse> {
  const response = await apiClient.post<VerifyOtpResponse>(
    "/api/auth/verify-otp",
    payload
  );
  return response.data;
}
