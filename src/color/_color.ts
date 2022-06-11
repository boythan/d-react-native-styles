import _ from "lodash";
import DefaultColors from "./_colors-default";

export class ColorsClass {
  [key: string]: any;

  constructor() {
      Object.assign(this, DefaultColors);
  }

  /**
   * Load custom set of colors
   * arguments:
   * colors - map of keys and colors values e.g {grey10: '#20303C', grey20: '#43515C'}
   */
  loadColors(colors: {[key: string]: string}) {
      _.forEach(colors, (value, key) => {
          this[key] = value;
      });
  }
}

const Colors = new ColorsClass();
Colors.loadColors(DefaultColors);
export default Colors;
