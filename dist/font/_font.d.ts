export declare class FontClass {
    [key: string]: any;
    fontClass: any;
    constructor();
    /**
     * Load custom set of fonts
     * arguments:
     * fonts - map of keys and font family values e.g {iosFont: Poppins-Regular}
     */
    loadFonts(fonts: any, customFonts?: {}): void;
}
declare const Fonts: FontClass;
export default Fonts;
