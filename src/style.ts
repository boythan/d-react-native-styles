/* eslint-disable no-nested-ternary */
import _ from "lodash";
import {StyleSheet} from "react-native";
import backgroundStyle from "./style/_background";
import borderStyle from "./style/_border";
import flexStyle from "./style/_flex";
import imageStyle from "./style/_image";
import marginPadding from "./style/_padding-margin";
import positionStyle from "./style/_position";
import shadowStyle from "./style/_shadow";
import textStyle from "./style/_text";
import widthHeightStyle from "./style/_width-height";
import CustomStyle from "./style/_style-custom";

export const styles = (...args: any) => {
    let styleList: any[] = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (!arg) continue;

        const argType = typeof arg;

        if (argType === "string" || argType === "number") {
            const argStyles = _.split(arg, " ");
            styleList = styleList.concat(argStyles);
        } else if (Array.isArray(arg)) {
            if (arg.length) {
                // eslint-disable-next-line prefer-spread
                const inner: any = styles.apply(null, arg);
                if (inner) {
                    styleList = styleList.concat(inner);
                }
            }
        } else if (argType === "object") {
            if (arg.toString === Object.prototype.toString) {
                for (const key in arg) {
                    if (_.isBoolean(arg[key]) && arg[key]) {
                        const keyStyles = _.split(key, " ");
                        styleList = styleList.concat(keyStyles);
                    }
                    if (_.isString(arg[key]) || _.isNumber(arg[key])) {
                        styleList.push(arg);
                    }
                }
            } else {
                styleList.push(arg.toString());
            }
        }
    }
    styleList = _.map(styleList, item => {
        const styleType = typeof item;
        if (styleType === "string") {
            return Styles[item];
        }
        return item;
    });
    return styleList;
};

const Styles = StyleSheet.create({
    ...flexStyle,
    ...marginPadding,
    ...backgroundStyle,
    ...borderStyle,
    ...widthHeightStyle,
    ...textStyle,
    ...positionStyle,
    ...imageStyle,
    ...shadowStyle,
    ...CustomStyle.customStyle
});


