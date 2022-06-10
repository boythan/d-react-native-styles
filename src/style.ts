/* eslint-disable no-nested-ternary */
import _ from 'lodash';
import {StyleSheet} from 'react-native';
import backgroundStyle from './theme/_background';
import borderStyle from './theme/_border';
import flexStyle from './theme/_flex';
import imageStyle from './theme/_image';
import marginPadding from './theme/_padding-margin';
import positionStyle from './theme/_position';
import shadowStyle from './theme/_shadow';
import textStyle from './theme/_text';
import widthHeightStyle from './theme/_width-height';

export const styles = (...args: any) => {
  let styleList: any[] = [];

  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    if (!arg) continue;

    let argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      const argStyles = _.split(arg, ' ');
      styleList = styleList.concat(argStyles);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner: any = styles.apply(null, arg);
        if (inner) {
          styleList = styleList.concat(inner);
        }
      }
    } else if (argType === 'object') {
      if (arg.toString === Object.prototype.toString) {
        for (var key in arg) {
          if (_.isBoolean(arg[key]) && arg[key]) {
            const keyStyles = _.split(key, ' ');
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
    var styleType = typeof item;
    if (styleType === 'string') {
      return style[item];
    }
    return item;
  });
  return styleList;
};

const style = StyleSheet.create({
  ...flexStyle,
  ...marginPadding,
  ...backgroundStyle,
  ...borderStyle,
  ...widthHeightStyle,
  ...textStyle,
  ...positionStyle,
  ...imageStyle,
  ...shadowStyle,
});
