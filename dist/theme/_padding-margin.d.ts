export declare const PADDING_KEY_PATTERN: RegExp;
export declare const PADDING_VARIATIONS: {
    p: string;
    pl: string;
    pt: string;
    pr: string;
    pb: string;
    px: string;
    py: string;
};
export declare const MARGIN_PADDING_VALUES: {
    0: number;
    1: any;
    2: any;
    3: any;
    4: any;
    5: any;
    6: any;
    7: any;
    8: any;
    9: any;
    10: any;
};
export declare type PaddingLiterals = keyof typeof PADDING_VARIATIONS;
export declare type NativePaddingKeyType = typeof PADDING_VARIATIONS[PaddingLiterals];
export declare type ValueLiterals = keyof typeof MARGIN_PADDING_VALUES;
declare const marginPadding: any;
export default marginPadding;
