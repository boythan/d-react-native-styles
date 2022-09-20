/**
 * App Theme - Sizes
 */

const DefaultFont = {
    // iosFont: "Poppins-Regular",
    // androidFont: "Poppins-Reg",
    // iosBoldFont: "Poppins-Bold",
    // androidBoldFont: "Poppins-Bold",

    // iosFont: "Cochin",
    // androidFont: "Cochin",
    // iosBoldFont: "Cochin",
    // androidBoldFont: "Cochin",
    android: {
        baseFontSize: 14,
        family: {
            regular: "system font",
            italic: "system font",

            thin: "system font",
            thinItalic: "system font",

            light: "system font",
            lightItalic: "system font",

            semiBold: "system font",
            semiBoldItalic: "system font",

            medium: "system font",
            mediumItalic: "system font",

            bold: "system font",
            boldItalic: "system font",
        },
    },
    ios: {
        baseFontSize: 14,
        family: {
            regular: "system font",
            italic: "system font",

            thin: "system font",
            thinItalic: "system font",

            light: "system font",
            lightItalic: "system font",

            semiBold: "system font",
            semiBoldItalic: "system font",

            medium: "system font",
            mediumItalic: "system font",

            bold: "system font",
            boldItalic: "system font",
        },
    },
};

export type FontKeyType = keyof typeof DefaultFont;

export default DefaultFont;
