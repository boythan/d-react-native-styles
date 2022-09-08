import { Platform } from "react-native";
import DefaultFont from "./_fonts-default";

export class FontClass {
    [key: string]: any;
    fontClass: any;

    constructor() {
        Object.assign(this, DefaultFont);
    }

    /**
     * Load custom set of fonts
     * arguments:
     * fonts - map of keys and font family values e.g {iosFont: Poppins-Regular}
     */
    loadFonts(fonts: any, customFonts = {}) {
        const defaultFontOS = (DefaultFont as any)[Platform.OS];
        const defaultFontFamily = defaultFontOS.family;
        const defaultBaseFontSize = defaultFontOS.baseFontSize;

        const fontConfig = fonts[Platform.OS] ?? defaultFontOS;
        const fontConfigFamily = fontConfig?.family ?? defaultFontFamily;

        const fontBold = fontConfigFamily.bold ?? defaultFontFamily?.bold;
        const fontMedium = fontConfigFamily.medium ?? defaultFontFamily?.medium;
        const fontSemiBold =
            fontConfigFamily.semiBold ?? defaultFontFamily?.semiBold;
        const fontRegular =
            fontConfigFamily.regular ?? defaultFontFamily?.regular;
        const fontLight = fontConfigFamily.light ?? defaultFontFamily?.light;

        const baseSize = fontConfig.baseFontSize || defaultBaseFontSize;

        this.fontClass = {
            ...this.fontClass,

            h0: {
                fontSize: baseSize * 2,
                fontFamily: fontBold,
            },
            h1: {
                fontSize: baseSize * 1.8,
                fontFamily: fontBold,
            },
            h2: {
                fontSize: baseSize * 1.6,
                fontFamily: fontBold,
            },
            h3: {
                fontSize: baseSize * 1.4,
                fontFamily: fontMedium,
            },
            h4: {
                fontSize: baseSize * 1.2,
                fontFamily: fontSemiBold,
            },
            h5: {
                fontSize: baseSize,
                fontFamily: fontSemiBold,
            },

            label: {
                fontSize: baseSize,
                fontFamily: fontSemiBold,
            },

            "text-large": {
                fontSize: baseSize * 1.4,
                fontFamily: fontRegular,
            },
            "text-medium": {
                fontSize: baseSize * 1.2,
                fontFamily: fontRegular,
            },

            text: {
                fontSize: baseSize,
                fontFamily: fontRegular,
            },

            "text-small": {
                fontSize: baseSize * 0.8,
                fontFamily: fontRegular,
            },

            ...customFonts,
        };
    }
}

const Fonts = new FontClass();
Fonts.loadFonts(DefaultFont);

export default Fonts;
