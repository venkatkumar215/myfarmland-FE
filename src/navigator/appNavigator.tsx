import React, { useContext, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import HeaderComponent from "../components/header/header";
import { useTheme } from "../context/theme/themeContext";
import { IThemeType } from "../config/type/ui-type";
import BottomNavComponent from "../components/bottomNav/bottomNav";
import { getfarmDetail } from "../api/farmDetail";
import { handleApiError } from "../utilis/api-errorHandler/errorHandler";
import { auth } from "../config/firebaseConfig";
import CreateFarmDetail from "../screens/farmDetail/CreateFarmDetail";
import { AuthContext } from "../context/auth/authContext";

const createStyle = (theme: IThemeType) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      backgroundColor: theme.colors.background.primary,
    },
  });

// Define the main AppNavigator component
// This component will render the tab navigator with the defined tabs
const AppNavigator: React.FC = () => {
  // This hook provides the current theme (light or dark) and its properties
  const theme = useTheme();
  const styles = useMemo(() => createStyle(theme), [theme]);
  const [hasFarmDetail, sethasFarmDetail] = useState<boolean>(false);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    try {

      const payLoad = {
        userId: userId ? userId : "O59SX5T5sVQycMmuutsdV8OgDN63",
      };
      getfarmDetail(payLoad).then((response) => {
        if (response.success && response?.farmDetail) {
          sethasFarmDetail(true);
        } else {
          sethasFarmDetail(false);
          console.log(response.message || "Failed to get farm details");
        }
      });
    } catch (error) {
      // Handle any errors that occur during the API call
      sethasFarmDetail(false);
      const errorMessage = handleApiError(error);
      console.error("Error fetching farm details:", errorMessage);
    }
  }, []);

  // Define styles for the tab bar
  // These styles will be applied to the tab bar and its items

  return (
    <>
      <View style={styles.container}>
        {hasFarmDetail ? (
          <>
            {/* Header component for the app */}
            <HeaderComponent />
            {/* The bottom navigation component will handle the tab navigation */}
            <BottomNavComponent />
          </>
        ) : (
          // If no farm details are available, show the CreateFarmDetail screen
          // This screen allows users to create a new farm detail
          <CreateFarmDetail />
        )}
      </View>
    </>
  );
};

export default AppNavigator;
