import React, { memo } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

// Import SVG files directly as components
import CloseIcon from "../../../../assets/svg/icons/close.svg";
import CreateFarmIcon from "../../../../assets/svg/createFarm.svg";

interface SvgIconProps {
  name: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const iconMap: Record<string, React.FC<SvgProps>> = {
  close: CloseIcon,
  createFarm: CreateFarmIcon,
  // Add more icons here as needed
};

const SvgIconComponent: React.FC<SvgIconProps> = ({
  name,
  width = 24,
  height = 24,
  style,
  color,
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    if (__DEV__) {
      console.warn(`Icon "${name}" not found in iconMap`);
    }
    return null;
  }

  return (
    <IconComponent width={width} height={height} style={style} fill={color} />
  );
};

export const SvgIcon = memo(SvgIconComponent);
