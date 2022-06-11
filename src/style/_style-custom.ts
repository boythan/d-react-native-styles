import _ from "lodash";

export class StylesClass {
  [key: string]: any;

  constructor() {
      Object.assign(this.customStyle, {});
  }


  loadStyles(styles: any) {
      _.forEach(styles, (value, key) => {
          this.customStyle[key] = value;
      });
  }
}

const Styles = new StylesClass();
Styles.loadStyles({});

export default Styles;
