export declare class ColorsClass {
    [key: string]: any;
    constructor();
    /**
     * Load custom set of colors
     * arguments:
     * colors - map of keys and colors values e.g {grey10: '#20303C', grey20: '#43515C'}
     */
    loadColors(colors: {
        [key: string]: string;
    }): void;
}
declare const Colors: ColorsClass;
export default Colors;
