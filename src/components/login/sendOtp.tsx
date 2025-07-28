import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import MyFarmText from "../common/text/myfarm-text";
import CONSTANTS from "../../config/constants/common-constant";
import MyfarmCountryFlag from "../common/countryFlag/myfarm-countryflag";
import { Controller, useForm } from "react-hook-form";
import MyfarmInput from "../common/input/myfarm-input";
import MyfarmButton from "../common/button/myfarm-button";
import { z } from "zod";
import {
  MobileNumberFormData,
  mobileSchema,
} from "../../schemas/mobileNumber-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISendOtpPayload } from "../../config/type/api-type/otp-type";
import { sendOtp } from "../../api/otpService";
import { handleApiError } from "../../utilis/api-errorHandler/errorHandler";
import { useTheme } from "../../context/theme/themeContext";
import { IThemeType } from "../../config/type/ui-type/theme-type";

type Props = {
  setVerifyOTPFlag: React.Dispatch<React.SetStateAction<boolean>>;
  setVerifyMobileNumber: React.Dispatch<React.SetStateAction<string>>;
};

/**
 *
 * SendOtpComponent is a component that allows users to enter their mobile number and request an OTP.
 *
 * @param {IThemeType} theme
 * @returns {*}
 */
const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flex: 2,
    },
    titleText: {
      marginVertical: 5,
    },
    textCenter: {
      textAlign: "center",
    },
    mobileText: {
      marginVertical: 20,
    },
    mobileNumberContainer: {
      display: "flex",
      flexDirection: "row",
      textAlignVertical: "center",
      width: "75%",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainer: {
      marginVertical: 10,
    },
    termsContainer: {
      display: "flex",
      flexDirection: "row",

      marginVertical: 10,
    },
  });

const SendOtpComponent: React.FC<Props> = ({
  setVerifyOTPFlag,
  setVerifyMobileNumber,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MobileNumberFormData>({
    resolver: zodResolver(mobileSchema),
  });

  /**
   * Description placeholder
   * Function to handle form submission
   * It sends the mobile number to the backend to request an OTP.
   * @param {MobileNumberFormData} data
   */
  const onSubmit = (data: MobileNumberFormData): void => {
    sendOTP(data.mobileNumber);
  };

  /**
   * Description placeholder
   * Function to send OTP to the provided mobile number.
   * It constructs a payload with the mobile number and calls the `sendOtp` API service.
   * @async
   * @param {string} mobile
   * @returns {*}
   */
  const sendOTP = async (mobile: string) => {
    const payload: ISendOtpPayload = {
      mobile: "+91" + mobile.trim(),
    };

    try {
      const result = await sendOtp(payload);
      if (result.success) {
        setVerifyOTPFlag(true);
        setVerifyMobileNumber(mobile);
        console.log("OTP sent successfully!");
      } else {
        console.log(result.message || "Failed to send OTP");
      }
    } catch (error) {
      const errorMessage = handleApiError(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleText}>
        <MyFarmText style={styles.textCenter} fontSize={"xxxl"} bold>
          {CONSTANTS.LOG_IN.WELCOME_MY_FARM}
        </MyFarmText>
      </View>
      <View style={styles.titleText}>
        <MyFarmText style={styles.textCenter} fontSize={"lg"}>
          {CONSTANTS.LOG_IN.WELCOME_MY_FARM_MESSAGE}{" "}
        </MyFarmText>
      </View>
      <View style={styles.mobileText}>
        <MyFarmText style={styles.textCenter} bold fontSize={"xxxl"}>
          {CONSTANTS.LOG_IN.ENTER_MOBILE_NUMBER}
        </MyFarmText>
      </View>
      <View style={styles.mobileNumberContainer}>
        <MyfarmCountryFlag></MyfarmCountryFlag>
        <Controller
          control={control}
          name="mobileNumber"
          render={({ field: { onChange, value } }) => (
            <MyfarmInput
              placeholder={CONSTANTS.LOG_IN.ENTER_MOBILE_NUMBER}
              keyboardType="number-pad"
              errorFlag={!!errors.mobileNumber}
              errorMessage={errors?.mobileNumber?.message}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <MyfarmButton
          title={CONSTANTS.LOG_IN.SEND_OTP}
          onPress={handleSubmit(onSubmit)}
          bold
        ></MyfarmButton>
      </View>
      <View style={styles.termsContainer}>
        <MyFarmText>{CONSTANTS.LOG_IN.AGREE} </MyFarmText>
        <MyFarmText bold>{CONSTANTS.LOG_IN.TERMS} </MyFarmText>
        <MyFarmText> {CONSTANTS.LOG_IN.AND} </MyFarmText>
        <MyFarmText bold>{CONSTANTS.LOG_IN.PRIVACY_POLICY}</MyFarmText>
      </View>
    </View>
  );
};

export default SendOtpComponent;
