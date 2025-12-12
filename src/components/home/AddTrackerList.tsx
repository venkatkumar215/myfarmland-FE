import React from "react";
import { Text, View } from "react-native";
import { useGlobalStyle } from "../../styles/globalStyle";
import { addActivityListConstant } from "../../config/constants/addActivityConstant";
import MyFarmText from "../common/text/MyFarmText";

const AddTrackerList: React.FC = () => {
  const globalStyle = useGlobalStyle();
  return (
    <View style={[globalStyle.pt2, globalStyle.column, globalStyle.flexGap2]}>
      {addActivityListConstant.map((item, index) => (
        <View key={index} style={[globalStyle.row, globalStyle.flexGap1]}>
          <item.iconLibrary name={item.iconName} size={item.size} />
          <MyFarmText fontSize="md" fontBold>{item.name}</MyFarmText>
        </View>
      ))}
    </View>
  );
};

export default AddTrackerList;
