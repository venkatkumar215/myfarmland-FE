import { z } from "zod";
import ERROR_CONSTANTS from "../config/constants/errorConstant";

export const mobileSchema = z.object({
  mobileNumber: z
    .string()
    .min(10, ERROR_CONSTANTS.MOBILE_NUMBER_VALIDATIDATION.MOBILE_NUMBER_LENGTH)
    .max(10, ERROR_CONSTANTS.MOBILE_NUMBER_VALIDATIDATION.MOBILE_NUMBER_LENGTH)
    .regex(
      /^[6-9]\d{9}$/,
      ERROR_CONSTANTS.MOBILE_NUMBER_VALIDATIDATION.INVALID_MOBILE_NUMBER
    ),
});

export const otpSchema = z.object({
  otp: z
    .string()
    .length(6, ERROR_CONSTANTS.OTP_VALIDATION.OTP_LENGTH)
    .regex(/^\d{6}$/, ERROR_CONSTANTS.OTP_VALIDATION.INVALID_OTP),
});
export type MobileNumberFormData = z.infer<typeof mobileSchema>;
export type OtpFormData = z.infer<typeof otpSchema>;
