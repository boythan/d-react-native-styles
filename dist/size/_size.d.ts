import { AppSizeKeyType } from './_sizes-default';
export declare class AppSizeClass {
    [key: string]: any;
    constructor();
    /**
     * Load custom set of sizes
     * arguments:
     * sizes - map of keys and size values e.g {inputHeight: 50, buttonHeight: 30}
     */
    loadSizes(sizes: {
        [key in Partial<AppSizeKeyType>]: string | number;
    }): void;
}
declare const Sizes: AppSizeClass;
export default Sizes;
