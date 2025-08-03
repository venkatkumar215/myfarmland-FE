import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  spaceBettween: {
    justifyContent: "space-between",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  width100: {
    width: "100%",
  },
  flex1:{
    flex:1
  }
  
});
