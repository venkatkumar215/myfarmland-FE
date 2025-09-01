// CustomCheckbox.tsx
import React, { useMemo, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../../context/theme/ThemeContext";
import { IThemeType } from "../../../config/type/uiType";

interface Props {
  label?: string;
  handlePress?: (event: boolean) => void;
}

const MyFarmCheckBox: React.FC<Props> = ({ label, handlePress }) => {
  const [checked, setChecked] = useState(false);

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setChecked(!checked);
        handlePress?.(!checked);
      }}
    >
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MyFarmCheckBox;

const createStyles = (theme: IThemeType) =>
  StyleSheet.create({
    checkbox: {
      alignItems: "center",
      borderColor: theme.colors.btn.primary,
      borderRadius: 4,
      borderWidth: 2,
      height: 24,
      justifyContent: "center",
      marginRight: 12,
      width: 24,
    },
    checked: {
      backgroundColor: theme.colors.btn.primary,
    },
    checkmark: {
      color: "#fff",
      fontSize: 16,
    },
    container: {
      alignItems: "center",
      flexDirection: "row",
      marginVertical: 8,
    },
    label: {
      fontSize: 16,
    },
  });
