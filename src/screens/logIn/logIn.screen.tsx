import React, { useMemo, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useTheme } from "../../context/theme/ThemeContext";
import { IThemeType } from "../../config/type/uiType/themeType";
import { SafeAreaView } from "react-native-safe-area-context";
import VerifyOtpComponent from "../../components/login/VerifyOtp";
import SendOtpComponent from "../../components/login/SendOtp";

const LogIn: React.FC = () => {
  const [verifyOTPFlag, setVerifyOTPFlag] = useState<boolean>(false);
  const [verifyMobileNumber, setVerifyMobileNumber] = useState<string>("");
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logInImage}>
        <Image
          source={require("../../../assets/images/tractor_hill.png")}
          style={styles.image}
        ></Image>
      </View>
      {!verifyOTPFlag && (
        <View style={styles.actionContainer}>
          <SendOtpComponent
            setVerifyOTPFlag={setVerifyOTPFlag}
            setVerifyMobileNumber={setVerifyMobileNumber}
          ></SendOtpComponent>
        </View>
      )}

      {verifyOTPFlag && (
        <View style={styles.actionContainer}>
          <VerifyOtpComponent
            mobileNumber={verifyMobileNumber}
          ></VerifyOtpComponent>
        </View>
      )}
    </SafeAreaView>
  );
};

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    actionContainer: {
      flex: 1,
    },
    container: {
      backgroundColor: theme.colors.background.primary,
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    image: {
      height: "100%",
      resizeMode: "cover",
      width: "100%",
    },
    logInImage: {
      flex: 1,
    },
  });

export default LogIn;
