const DefaultColors = {
  primary: '#587C61',
  secondary: 'rgba(211, 15, 15, 0.87)',
  dark: '#0D0F12',

  light: '#FFFFFF',
  white: '#FFFFFF',
  black: '#0D0F12',
  black08: 'rgba(0, 0, 0, 0.8)',
  black04: 'rgba(0, 0, 0, 0.4)',

  error: '#E63B2E',
  success: '#ADC76F',
  warning: '#FF963C',
  disabled: '#9E9EA1',
  muted: '#F5F5F5',

  red: '#E63B2E',
  green: '#33963D',
  blue: '#0000FF',
  yellow: '#FF963C',
  purple: '#791c96',
  pink: '#daa0e8',
  cyan: '#00FFFF',
  grayDark: '#bfbdbd',
  greyDark: '#bfbdbd',
  grey: '#d9d9d9',
  gray: '#d9d9d9',
  greyColor: '#d9d9d9',
  greyLight: '#f2f2f2',
  grayLight: '#f2f2f2',
};

export type ColorKeyType = keyof typeof DefaultColors | 'transparent';

export default DefaultColors;
