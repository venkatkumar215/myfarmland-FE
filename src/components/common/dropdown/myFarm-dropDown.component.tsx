import React, { useMemo, useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import MyFarmText from "../text/myfarm-text";
import MyfarmInput from "../input/myfarm-input";
import { useTheme } from "../../../context/theme/themeContext";
import { IDropDownOptions, IThemeType } from "../../../config/type/ui-type";
import { globalStyle } from "../../../styles/globalStyle";

import MyFarmIcons from "../Icons/myFarm-Icons";

interface IOptions {
  label: string;
  value: string;
}

interface Props {
  title?: string;
  titleBold?: boolean;
  options: Array<IOptions>;
  initialValue?: IOptions;
  onSelect?: (selected: IOptions) => void; // optional callback
  enableStar?: boolean;
  value?: string;
}

const createStyle = (
  theme: IThemeType,
  selectedIndex?: number | null,
  currentIndex?: number
) =>
  StyleSheet.create({
    title: {
      marginBottom: 0,
    },
    dropdownContainer: {
      padding: 0,
      margin: 0,
    },
    dropDownOptionsContainer: {
      marginTop: -7,
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 4,
      paddingVertical: 4,
    },
    dropDownOption: {
      paddingVertical: 10,
      paddingHorizontal: 12,
      backgroundColor: selectedIndex === currentIndex ? "#e0e0e0" : "white", // light gray when selected
    },
    dropDownIcons: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },
    dropDownInputContainer: {},
  });

const MyFarmLandDropDown: React.FC<Props> = ({
  title,
  titleBold,
  options,
  onSelect,
  initialValue,
  enableStar = false,
  value,
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showDropDown, setshowDropDown] = useState<boolean>(false);

  const theme = useTheme();

  const dynamicStyle = createStyle(theme, selectedIndex);
  const [selectedDropDown, setselectedDropDown] =
    useState<IDropDownOptions | null>(
      initialValue?.label ? initialValue : null
    );

  return (
    <View style={[globalStyle.column]}>
      {title && (
        <View style={createStyle(theme, null, -1).title}>
          <MyFarmText
            fontSize="lg"
            bold={titleBold}
            enableStar={enableStar}
            {...props}
          >
            {title}
          </MyFarmText>
        </View>
      )}

      <View style={[globalStyle.column, dynamicStyle.dropDownInputContainer]}>
        {/* Input Field (optional usage, currently dummy) */}
        <Pressable
          accessible
          accessibilityLabel={`Select ${title}`}
          style={[globalStyle.row]}
          onPress={() => setshowDropDown(!showDropDown)}
        >
          <MyfarmInput
            value={selectedDropDown?.label || value || "Select an option"}
            readOnly
            rightIcon={
              <Pressable onPress={() => setshowDropDown(!showDropDown)}>
                <MyFarmIcons
                  name={
                    showDropDown ? "keyboard-arrow-up" : "keyboard-arrow-down"
                  }
                  size={28}
                />
              </Pressable>
            }
            {...props}
          />
        </Pressable>

        {/* Dropdown Options */}
        {showDropDown && (
          <View
            style={[
              globalStyle.column,
              createStyle(theme, null, -1).dropDownOptionsContainer,
            ]}
          >
            {options.map((option, index) => {
              const styles = createStyle(theme, selectedIndex, index);
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    setSelectedIndex(index);
                    onSelect?.(option);
                    setselectedDropDown(option);
                    setshowDropDown(!showDropDown);
                  }}
                  style={styles.dropDownOption}
                >
                  <MyFarmText bold fontSize="md" {...props}>
                    {option.label}
                  </MyFarmText>
                </Pressable>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};

export default MyFarmLandDropDown;
