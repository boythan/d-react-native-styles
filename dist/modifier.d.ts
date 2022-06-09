import { ColorSchemeName } from "react-native";
import { ColorKeyType } from "./color/_colors-default";
export interface IGetThemeColorProps {
    colorLightMode?: ColorKeyType;
    colorDarkMode?: ColorKeyType;
    colorScheme: ColorSchemeName;
}
export declare const generateStyleValue: (variants: any, values: any, defaultValues?: any) => any;
export declare const getColorValue: (color?: string) => any;
export declare const getThemeColor: ({ colorDarkMode, colorLightMode, colorScheme, }: IGetThemeColorProps) => ColorKeyType;
declare const _default: {
    generateStyleValue: (variants: any, values: any, defaultValues?: any) => any;
    getColorValue: (color?: string | undefined) => any;
};
export default _default;
