/**
 * App Theme - Sizes
 */
declare const DefaultFont: {
    android: {
        baseFontSize: number;
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
    };
    ios: {
        baseFontSize: number;
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
    };
};
export declare type FontKeyType = keyof typeof DefaultFont;
export default DefaultFont;
