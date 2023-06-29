/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-nested-ternary */
import _ from "lodash";
import { StyleSheet } from "react-native";

export const styles = (...args: any) => {
    let styleList: any[] = [];
    const allStyles = Styles.styles;

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
    styleList = _.map(styleList, (item) => {
        const styleType = typeof item;
        if (styleType === "string") {
            return allStyles[item];
        }
        return item;
    });
    return styleList;
};

// const Styles = StyleSheet.create({
//     ...flexStyle,
//     ...marginPadding,
//     ...backgroundStyle,
//     ...borderStyle,
//     ...widthHeightStyle,
//     ...textStyle,
//     ...positionStyle,
//     ...imageStyle,
//     ...shadowStyle,
//     ...CustomStyle.customStyle,
// });

class StylesClass {
    [key: string]: any;
    styles: any;

    // constructor() {}

    initStyles() {
        const backgroundStyle = require("./style/_background");
        const borderStyle = require("./style/_border");
        const flexStyle = require("./style/_flex");

        const imageStyle = require("./style/_image");
        const marginPadding = require("./style/_padding-margin");
        const positionStyle = require("./style/_position");
        const shadowStyle = require("./style/_shadow");
        const textStyle = require("./style/_text");
        const widthHeightStyle = require("./style/_width-height");
        const CustomStyle = require("./style/_style-custom");

        this.styles = StyleSheet.create({
            ...flexStyle.default,
            ...marginPadding.default,
            ...backgroundStyle.default,
            ...borderStyle.default,
            ...widthHeightStyle.default,
            ...textStyle.default,
            ...positionStyle.default,
            ...imageStyle.default,
            ...shadowStyle.default,
            ...CustomStyle.customStyle,
        });
    }
}

const Styles = new StylesClass();

export const initStyles = () => {
    Styles.initStyles();
};

export default Styles;
