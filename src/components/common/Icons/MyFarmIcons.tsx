import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

interface Props {
  name: any;
  size?: number;
}

const MyFarmIcons: React.FC<Props> = ({ name, size = 32, ...props }) => {
  return (
    <View>
      <MaterialIcons name={name} size={size} {...props}></MaterialIcons>
    </View>
  );
};

export default MyFarmIcons;
