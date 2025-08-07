import React, { Children } from "react";
import { StyleSheet, View } from "react-native";
import { globalStyle } from "../../../styles/globalStyle";

interface Props {
  children: React.ReactNode;
}
const styles = StyleSheet.create({
  cardContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
    padding: 5,
  },
});
const MyfarmCard: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={(styles.cardContainer, globalStyle.column)}>{children}</View>
  );
};

export default MyfarmCard;
