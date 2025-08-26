export interface IFontSizeType {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}
export interface IThemeType {
  dark: boolean;
  colors: {
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    btn: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    btnText: {
      primary: string;
      secondary: string;
    };
    icon: {
      active: string;
      inactive: string;
    };
    inputText: {
      primary: string;
      secondary: string;
    };
    error: {
      primary: string;
    };
    border: { primary: string; secondary: string };
  };
  fonts: {
    fontSize: IFontSizeType;
    fontFamily: string;
    color?: {
      primary: string;
    };
  };
}
