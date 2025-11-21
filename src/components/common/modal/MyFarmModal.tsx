import React, { useMemo } from "react";
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  Image,
} from "react-native";
import { useTheme } from "../../../context/theme/ThemeContext";
import { IThemeType } from "../../../config/type/uiType";
import { useGlobalStyle } from "../../../styles/globalStyle";
import { SvgIcon } from "../svgIcon/SvgIcon";

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
          <View style={styles.modalContent}>
            <View
              style={[
                globalStyle.row,
                globalStyle.pt2,
                globalStyle.alignItemCenter,
              ]}
            >
              {headerName && (
                <Text
                  style={[
                    globalStyle.flex1,
                    {
                      fontSize: 18,
                      fontWeight: "600",
                      color: theme.colors.text.primary,
                    },
                  ]}
                >
                  {headerName}
                </Text>
              )}

              <TouchableOpacity
                onPress={onClose}
                style={[globalStyle.justifyContentEnd, globalStyle.row]}
              >
                <SvgIcon name="close" width={24} height={24} />
              </TouchableOpacity>
            </View>

            {children}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
