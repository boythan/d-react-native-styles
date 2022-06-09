/* eslint-disable no-plusplus */
import {StyleSheet} from 'react-native';
import {generateStyleValue} from '../modifier';
import Sizes from '../size/_size';

const widthClass: any = {};
const heightClass: any = {};
for (let i = 0; i <= 200; i += 5) {
  widthClass[`width-${i}`] = {
    width: i,
  };
  heightClass[`height-${i}`] = {
    height: i,
  };
}

const sizeClass: any = {};
for (let i = 0; i <= 200; i += 5) {
  sizeClass[`size-${i}`] = {
    width: i,
    height: i,
  };
}

const WIDTH_HEIGHT_PERCENTAGE_VALUE = {
  0: '0%',
  25: '25%',
  50: '50%',
  75: '75%',
  100: '100%',
};

const widthPercentageClass = generateStyleValue(
  {w: 'width'},
  WIDTH_HEIGHT_PERCENTAGE_VALUE,
);

const heightPercentageClass = generateStyleValue(
  {h: 'height'},
  WIDTH_HEIGHT_PERCENTAGE_VALUE,
);

const widthHeightStyle = StyleSheet.create({
  'h-full': {
    height: Sizes.screenHeight,
  },
  'height-full': {
    height: Sizes.screenHeight,
  },
  'h-auto': {
    height: 'auto',
  },
  'height-auto': {
    height: 'auto',
  },
  'w-full': {
    width: Sizes.screenWidth,
  },
  'width-full': {
    width: Sizes.screenWidth,
  },
  'w-auto': {
    width: 'auto',
  },
  'width-auto': {
    width: 'auto',
  },
  ...widthClass,
  ...heightClass,
  ...sizeClass,
  ...widthPercentageClass,
  ...heightPercentageClass,
});

export default widthHeightStyle;
