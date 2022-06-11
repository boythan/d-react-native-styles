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
        family: {
            regular: "Cochin",
            italic: "Cochin",

            thin: "Cochin",
            thinItalic: "Cochin",

            light: "Cochin",
            lightItalic: "Cochin",

            semiBold: "Cochin",
            semiBoldItalic: "Cochin",

            medium: "Cochin",
            mediumItalic: "Cochin",

            bold: "Prompt-Bold",
            boldItalic: "Cochin",
        },
        baseFontSize: 12,
    },
    ios: {
        family: {
            regular: "Prompt-Regular",
            italic: "Prompt-Italic",

            thin: "Prompt-Thin",
            thinItalic: "Prompt",

            light: "Prompt-Light",
            lightItalic: "Prompt",

            semiBold: "Prompt-SemiBold",
            semiBoldItalic: "Prompt",

            medium: "Prompt-Medium",
            mediumItalic: "Prompt",

            bold: "Prompt-Bold",
            boldItalic: "Prompt-BoldItalic",
        },
        baseFontSize: 12,
    },
};

export type FontKeyType = keyof typeof DefaultFont;

export default DefaultFont;
