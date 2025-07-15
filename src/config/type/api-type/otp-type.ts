export interface SendOtpPayload {
  mobile: string;
}

export interface SendOtpResponse {
  success: boolean;
  message: string;
}

export interface VerifyOtpPayload {
  mobile: string;
  otp: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  token?: string; // Optional JWT token if the OTP verification is successful
  userId?: string; // Optional user ID if the OTP verification is successful
}
