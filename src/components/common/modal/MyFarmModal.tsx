import React, { useMemo } from "react";
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useTheme } from "../../../context/theme/ThemeContext";
import { IThemeType } from "../../../config/type/uiType";
import { useGlobalStyle } from "../../../styles/globalStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import MyFarmText from "../text/MyFarmText";

interface Props {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  height?: number; // Height should be in percentage of the window height
  headerName?: string;
}

const { height: windowHeight } = Dimensions.get("window");

const createStyle = (theme: IThemeType, height?: number) =>
  StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "flex-end",
    },
    modalContent: {
      backgroundColor: theme.colors.background.primary,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: height ? (height / 100) * windowHeight : windowHeight * 0.5,
      padding: 10,
    },
  });

export const MyFarmModal: React.FC<Props> = ({
  visible,
  onClose,
  children,
  height,
  headerName,
}) => {
  const theme = useTheme();
  const globalStyle = useGlobalStyle();
  const styles = useMemo(() => createStyle(theme, height), [theme, height]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={[styles.modalContent, globalStyle.column]}>
            <View
              style={[
                globalStyle.row,
                globalStyle.pt2,
                globalStyle.alignItemCenter,
              ]}
            >
              {headerName && (
                <View style={globalStyle.flex2}>
                  <MyFarmText fontBold fontSize="lg">
                    {headerName}
                  </MyFarmText>
                </View>
              )}
              <View style={globalStyle.flex1}>
                <TouchableOpacity
                  onPress={onClose}
                  style={[globalStyle.justifyContentEnd, globalStyle.row]}
                >
                  <Ionicons name="close" size={16}   color="black" />
                </TouchableOpacity>
              </View>
            </View>

            {children}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
