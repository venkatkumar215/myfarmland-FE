import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReactActivityScreen } from "../screens/recentActivity/RecentActivityScreen";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: ReactActivityScreen,
      options: { title: "RecentActivity" },
    },
  },
});

export const RootNavigation = createStaticNavigation(RootStack);
