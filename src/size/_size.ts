import _ from "lodash";
import DefaultSize, {SizeKeyType} from "./_sizes-default";

export class AppSizeClass {
  [key: string]: any;

  constructor() {
      Object.assign(this, DefaultSize);
  }

  /**
   * Load custom set of sizes
   * arguments:
   * sizes - map of keys and size values e.g {inputHeight: 50, buttonHeight: 30}
   */
  loadSizes(sizes: {[key in Partial<SizeKeyType>]: string | number}) {
      _.forEach(sizes, (value, key) => {
          this[key] = value;
      });
  }
}

const Sizes = new AppSizeClass();
Sizes.loadSizes(DefaultSize);

export default Sizes;
