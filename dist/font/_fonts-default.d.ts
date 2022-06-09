/**
 * App Theme - Sizes
 */
declare const DefaultFont: {
    android: {
        family: {
            regular: string;
            italic: string;
            thin: string;
            thinItalic: string;
            light: string;
            lightItalic: string;
            semiBold: string;
            semiBoldItalic: string;
            medium: string;
            mediumItalic: string;
            bold: string;
            boldItalic: string;
        };
        baseFontSize: number;
    };
    ios: {
        family: {
            regular: string;
            italic: string;
            thin: string;
            thinItalic: string;
            light: string;
            lightItalic: string;
            semiBold: string;
            semiBoldItalic: string;
            medium: string;
            mediumItalic: string;
            bold: string;
            boldItalic: string;
        };
        baseFontSize: number;
    };
};
export declare type AppFontKeyType = keyof typeof DefaultFont;
export default DefaultFont;
