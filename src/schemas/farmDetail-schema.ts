import { z } from "zod";
import ERROR_CONSTANTS from "../config/constants/error-constant";

export const farmDetailSchema = z.object({
  farmLandName: z.object({
    value: z.string().trim().min(1, ERROR_CONSTANTS.FARM_DETAIL.REQUIRED),
  }),
  location: z.object({
    value: z.string().trim().min(1, ERROR_CONSTANTS.FARM_DETAIL.REQUIRED),
  }),
  totalArea: z.object({
    value: z.string().trim().min(1, ERROR_CONSTANTS.FARM_DETAIL.REQUIRED),
  }),
  unit: z.object({
    value: z
      .string()
      .trim()
      .min(1, ERROR_CONSTANTS.FARM_DETAIL.REQUIRED)
      .optional(),
  }),
});

export type FarmDetailSchema = z.infer<typeof farmDetailSchema>;
