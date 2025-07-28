export interface ISendOtpPayload {
  mobile: string;
}

export interface ISendOtpResponse {
  success: boolean;
  message: string;
}

export interface IVerifyOtpPayload {
  mobile: string;
  otp: string;
}

export interface IVerifyOtpResponse {
  success: boolean;
  message: string;
  token?: string; // Optional JWT token if the OTP verification is successful
  userId?: string; // Optional user ID if the OTP verification is successful
}
