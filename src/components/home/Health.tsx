import React from "react";
import {
  ScrollView,
  ScrollViewComponent,
  StyleSheet,
  View,
} from "react-native";
import MyFarmText from "../common/text/MyfarmText";
import CONSTANTS from "../../config/constants/commonConstant";
import { useGlobalStyle } from "../../styles/globalStyle";
import MyFarmCard from "../common/card/MyfarmCard";
import { healthMonitorCardDetails } from "../../config/constants/homeConstant";
import { IHealthMonitorType } from "../../config/type/uiType";

interface Props {}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  healthMonitor: {
    flexWrap: "wrap",
  },
  cardWidth: {
    width: 68,
    height: 60,
  },
});

export const Health: React.FC<Props> = () => {
  const globalStyle = useGlobalStyle();
  // This function returns the font icon for the animal
  const getFontIcon = (healthStatus: IHealthMonitorType) => {
    return React.createElement(healthStatus.iconLibrary, {
      name: healthStatus.iconName,
      size: healthStatus.iconSize,
      solid: true,
      color: "white",
    });
  };

  return (
    <View style={[globalStyle.column, styles.container, globalStyle.p2]}>
      <MyFarmText
        style={[globalStyle.column, globalStyle.justifyContentCenter]}
        bold
        fontSize="xl"
      >
        {CONSTANTS.HEALTH_MONITOR}
      </MyFarmText>
      <View
        style={[globalStyle.row, styles.healthMonitor, globalStyle.flexGap2]}
      >
        <ScrollView>
          <View
            style={[
              globalStyle.row,
              styles.healthMonitor,
              globalStyle.flexGap2,
            ]}
          >
            {healthMonitorCardDetails?.length > 0 &&
              healthMonitorCardDetails.map((health, index) => (
                <MyFarmCard
                  key={index}
                  background={
                    health.statusColor ? health.statusColor : "active"
                  }
                  style={[globalStyle.center, styles.cardWidth]}
                >
                  {getFontIcon(health)}
                  <MyFarmText color="secondary" fontSize="sm" bold>
                    {health?.status
                      ? health.status
                      : CONSTANTS.HEALTH_STATUS.HEALTHY}
                  </MyFarmText>
                </MyFarmCard>
              ))}
          </View>
        </ScrollView>

        {/* <MyFarmCard background="active" style={[globalStyle.center, {}]}>
          <MaterialIcons name="goat" size={32} color="white" />
          <MyFarmText color="secondary">Healthy</MyFarmText>
        </MyFarmCard>
        <MyFarmCard
          background="caution"
          style={[globalStyle.center, styles.cardWidth]}
        >
          <Ionicons name="fish" size={28} color="white" />
        
          <MyFarmText color="secondary">caution</MyFarmText>
        </MyFarmCard>
        <MyFarmCard
          background="warning"
          style={[globalStyle.center, styles.cardWidth]}
        >
          <MaterialCommunityIcons name="cow" size={32} color="white" />
         
          <MyFarmText color="secondary">Critical</MyFarmText>
        </MyFarmCard>
        <MyFarmCard
          background="warning"
          style={[globalStyle.center, styles.cardWidth]}
        >
          <MaterialCommunityIcons name="duck" size={24} color="white" />
          
          <MyFarmText color="secondary">Critical</MyFarmText>
        </MyFarmCard> */}
      </View>
    </View>
  );
};
