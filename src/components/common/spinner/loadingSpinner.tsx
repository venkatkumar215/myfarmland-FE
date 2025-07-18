import React from "react";
import { ActivityIndicator, View } from "react-native";

interface Props {
  visible: boolean;
}

export const LoadingSpinner: React.FC<Props> = ({ visible }) => {
  return (
    visible && (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6F8C52" />
      </View>
    )
  );
};
