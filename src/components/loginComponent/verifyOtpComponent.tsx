import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import MyfarmInput from "../common/input/myfarm-input";
import MyfarmButton from "../common/button/myfarm-button";
import CONSTANTS from "../../config/constants/common-constant";
import MyFarmText from "../common/text/myfarm-text";
import { OtpFormData, otpSchema } from "../../schemas/mobile-schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { verifyOtpApi } from "../../api/otpService";

type Props = {
  mobileNumber: string;
};

const OTP_LENGTH = 6;

const VerifyOtpComponent: React.FC<Props> = ({ mobileNumber }) => {
  const inputsRef = useRef<Array<any>>([]);
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleChange = (text: string, index: number) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = text;

      // Join and update the form field
      const otpString = newOtp.join("");
      setValue("otp", otpString); // Register OTP in form

      return newOtp;
    });

    if (text && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  /**
   * Function to handle form submission
   *
   * @param {OtpFormData} data
   */
  const onSubmit = (data: OtpFormData) => {
    verifyOtp(data.otp);
  };

  // This function prepares the payload and calls the API
  const verifyOtp = async (otp: string) => {
    try {
      const payload = {
        otp: otp.trim(),
        mobile:'+91' + mobileNumber.trim(), // Replace with the actual mobile number
      };
      // Call your API to verify the OTP
      const result = await verifyOtpApi(payload);
      if (result.success) {
        console.log("OTP verified successfully!");
      } else {
        console.log(result.message || "Failed to verify OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleText}>
        <MyFarmText style={styles.textCenter} fontSize={"xxxl"} bold>
          {CONSTANTS.LOG_IN.ENTER_OTP_VERIFY}
        </MyFarmText>
      </View>

      <View style={styles.titleText}>
        <MyFarmText style={styles.textCenter} fontSize={"lg"}>
          {CONSTANTS.LOG_IN.OTP_VERIFY_MESSAGE}
        </MyFarmText>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <View key={index} style={styles.verifyOTPInput}>
            <MyfarmInput
              ref={(ref) => {
                inputsRef.current[index] = ref!;
              }}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              bottomBorder
            />
          </View>
        ))}
      </View>

      {errors.otp && (
        <MyFarmText style={{ color: "red", textAlign: "center" }}>
          {errors.otp.message}
        </MyFarmText>
      )}

      <View style={styles.resendOtpText}>
        <MyFarmText style={styles.textCenter}>
          {CONSTANTS.LOG_IN.DONT_RECEIVE_OTP}
        </MyFarmText>
      </View>

      <View style={styles.buttonContainer}>
        <MyfarmButton
          title={CONSTANTS.LOG_IN.VERIFY_OTP}
          onPress={handleSubmit(onSubmit)}
          bold
        />
      </View>

      <View style={styles.termsContainer}>
        <MyFarmText>
          {CONSTANTS.LOG_IN.AGREE}{" "}
          <MyFarmText bold>{CONSTANTS.LOG_IN.TERMS}</MyFarmText>{" "}
          {CONSTANTS.LOG_IN.AND}{" "}
          <MyFarmText bold>{CONSTANTS.LOG_IN.PRIVACY_POLICY}</MyFarmText>
        </MyFarmText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  otpContainer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
  },
  verifyOTPInput: {
    marginRight: 10,
    marginLeft: 10,
  },
  resendOtpText: {
    marginVertical: 10,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  termsContainer: {
    marginVertical: 10,
  },
});

export default VerifyOtpComponent;
