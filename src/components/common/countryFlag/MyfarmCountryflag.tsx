import React from "react";
import { View, StyleSheet, Image, ViewProps } from "react-native";

interface Props extends ViewProps {
  countryCode?: string;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  flag: {
    width: 25,
    height: 20,
    marginRight: 10,
  },
});

const flagImages: Record<string, any> = {
  in: require("../../../../assets/flags/in.png"),

  // Add more as needed
};

const MyfarmCountryFlag: React.FC<Props> = ({
  countryCode = "in",
  ...props
}) => {
  const flag = flagImages[countryCode.toLowerCase()] || flagImages["in"]; // fallback to 'in'

  return (
    <View style={[styles.container, props.style]}>
      <Image style={styles.flag} source={flag} />
    </View>
  );
};

export default MyfarmCountryFlag;
