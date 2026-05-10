import { StyleSheet } from "react-native";
import { generateStyleValue } from "../modifier";
export const FLEX_VALUE = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10
};
export const DISPLAY_VALUE = {
  flex: "flex",
  none: "none"
};
const flexValueClass = generateStyleValue({
  flex: "flex"
}, FLEX_VALUE);
const displayValueClass = generateStyleValue({
  display: "display"
}, DISPLAY_VALUE);
const flexStyle = StyleSheet.create({
  //flex
  "flex-wrap": {
    flexWrap: "wrap"
  },
  "flex-nowrap": {
    flexWrap: "nowrap"
  },
  "flex-wrap-reverse": {
    flexWrap: "wrap-reverse"
  },
  "flex-row": {
    flexDirection: "row"
  },
  "flex-row-reverse": {
    flexDirection: "row-reverse"
  },
  "flex-column": {
    flexDirection: "column"
  },
  "flex-column-reverse": {
    flexDirection: "column-reverse"
  },
  "flex-center": {
    justifyContent: "center",
    alignItems: "center"
  },
  "flex-center-y": {
    flexDirection: "row",
    alignItems: "center"
  },
  "flex-center-x": {
    flexDirection: "column",
    alignItems: "center"
  },
  // align
  "align-center": {
    alignItems: "center"
  },
  "align-items-center": {
    alignItems: "center"
  },
  "align-end": {
    alignItems: "flex-end"
  },
  "align-items-end": {
    alignItems: "flex-end"
  },
  "align-start": {
    alignItems: "flex-start"
  },
  "align-items-start": {
    alignItems: "flex-start"
  },
  "align-base": {
    alignItems: "baseline"
  },
  "align-items-base": {
    alignItems: "baseline"
  },
  "align-stretch": {
    alignItems: "stretch"
  },
  "align-items-stretch": {
    alignItems: "stretch"
  },
  "align-self-center": {
    alignSelf: "center"
  },
  "align-self-end": {
    alignSelf: "flex-end"
  },
  "align-self-start": {
    alignSelf: "flex-start"
  },
  "align-self-base": {
    alignSelf: "baseline"
  },
  "align-self-stretch": {
    alignSelf: "stretch"
  },
  //justify-content
  "justify-content-center": {
    justifyContent: "center"
  },
  "justify-content-end": {
    justifyContent: "flex-end"
  },
  "justify-content-start": {
    justifyContent: "flex-start"
  },
  "justify-content-between": {
    justifyContent: "space-between"
  },
  "justify-content-evenly": {
    justifyContent: "space-evenly"
  },
  "justify-content-around": {
    justifyContent: "space-around"
  },
  "justify-center": {
    justifyContent: "center"
  },
  "justify-end": {
    justifyContent: "flex-end"
  },
  "justify-start": {
    justifyContent: "flex-start"
  },
  "justify-between": {
    justifyContent: "space-between"
  },
  "justify-evenly": {
    justifyContent: "space-evenly"
  },
  "justify-around": {
    justifyContent: "space-around"
  },
  ...flexValueClass,
  ...displayValueClass
});
export default flexStyle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdHlsZVNoZWV0IiwiZ2VuZXJhdGVTdHlsZVZhbHVlIiwiRkxFWF9WQUxVRSIsIkRJU1BMQVlfVkFMVUUiLCJmbGV4Iiwibm9uZSIsImZsZXhWYWx1ZUNsYXNzIiwiZGlzcGxheVZhbHVlQ2xhc3MiLCJkaXNwbGF5IiwiZmxleFN0eWxlIiwiY3JlYXRlIiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25TZWxmIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0eWxlL19mbGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVN0eWxlVmFsdWUgfSBmcm9tIFwiLi4vbW9kaWZpZXJcIjtcblxuZXhwb3J0IGNvbnN0IEZMRVhfVkFMVUUgPSB7XG4gICAgMTogMSxcbiAgICAyOiAyLFxuICAgIDM6IDMsXG4gICAgNDogNCxcbiAgICA1OiA1LFxuICAgIDY6IDYsXG4gICAgNzogNyxcbiAgICA4OiA4LFxuICAgIDk6IDksXG4gICAgMTA6IDEwLFxufTtcbmV4cG9ydCBjb25zdCBESVNQTEFZX1ZBTFVFID0ge1xuICAgIGZsZXg6IFwiZmxleFwiLFxuICAgIG5vbmU6IFwibm9uZVwiLFxufTtcblxuY29uc3QgZmxleFZhbHVlQ2xhc3MgPSBnZW5lcmF0ZVN0eWxlVmFsdWUoeyBmbGV4OiBcImZsZXhcIiB9LCBGTEVYX1ZBTFVFKTtcblxuY29uc3QgZGlzcGxheVZhbHVlQ2xhc3MgPSBnZW5lcmF0ZVN0eWxlVmFsdWUoXG4gICAgeyBkaXNwbGF5OiBcImRpc3BsYXlcIiB9LFxuICAgIERJU1BMQVlfVkFMVUVcbik7XG5cbmNvbnN0IGZsZXhTdHlsZSA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICAvL2ZsZXhcblxuICAgIFwiZmxleC13cmFwXCI6IHtcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgIH0sXG5cbiAgICBcImZsZXgtbm93cmFwXCI6IHtcbiAgICAgICAgZmxleFdyYXA6IFwibm93cmFwXCIsXG4gICAgfSxcblxuICAgIFwiZmxleC13cmFwLXJldmVyc2VcIjoge1xuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwLXJldmVyc2VcIixcbiAgICB9LFxuXG4gICAgXCJmbGV4LXJvd1wiOiB7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgfSxcblxuICAgIFwiZmxleC1yb3ctcmV2ZXJzZVwiOiB7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93LXJldmVyc2VcIixcbiAgICB9LFxuXG4gICAgXCJmbGV4LWNvbHVtblwiOiB7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcblxuICAgIFwiZmxleC1jb2x1bW4tcmV2ZXJzZVwiOiB7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uLXJldmVyc2VcIixcbiAgICB9LFxuXG4gICAgXCJmbGV4LWNlbnRlclwiOiB7XG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIH0sXG5cbiAgICBcImZsZXgtY2VudGVyLXlcIjoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIH0sXG5cbiAgICBcImZsZXgtY2VudGVyLXhcIjoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIH0sXG5cbiAgICAvLyBhbGlnblxuXG4gICAgXCJhbGlnbi1jZW50ZXJcIjoge1xuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgXCJhbGlnbi1pdGVtcy1jZW50ZXJcIjoge1xuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgXCJhbGlnbi1lbmRcIjoge1xuICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsXG4gICAgfSxcbiAgICBcImFsaWduLWl0ZW1zLWVuZFwiOiB7XG4gICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1lbmRcIixcbiAgICB9LFxuICAgIFwiYWxpZ24tc3RhcnRcIjoge1xuICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICB9LFxuICAgIFwiYWxpZ24taXRlbXMtc3RhcnRcIjoge1xuICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICB9LFxuICAgIFwiYWxpZ24tYmFzZVwiOiB7XG4gICAgICAgIGFsaWduSXRlbXM6IFwiYmFzZWxpbmVcIixcbiAgICB9LFxuICAgIFwiYWxpZ24taXRlbXMtYmFzZVwiOiB7XG4gICAgICAgIGFsaWduSXRlbXM6IFwiYmFzZWxpbmVcIixcbiAgICB9LFxuICAgIFwiYWxpZ24tc3RyZXRjaFwiOiB7XG4gICAgICAgIGFsaWduSXRlbXM6IFwic3RyZXRjaFwiLFxuICAgIH0sXG4gICAgXCJhbGlnbi1pdGVtcy1zdHJldGNoXCI6IHtcbiAgICAgICAgYWxpZ25JdGVtczogXCJzdHJldGNoXCIsXG4gICAgfSxcbiAgICBcImFsaWduLXNlbGYtY2VudGVyXCI6IHtcbiAgICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgXCJhbGlnbi1zZWxmLWVuZFwiOiB7XG4gICAgICAgIGFsaWduU2VsZjogXCJmbGV4LWVuZFwiLFxuICAgIH0sXG4gICAgXCJhbGlnbi1zZWxmLXN0YXJ0XCI6IHtcbiAgICAgICAgYWxpZ25TZWxmOiBcImZsZXgtc3RhcnRcIixcbiAgICB9LFxuICAgIFwiYWxpZ24tc2VsZi1iYXNlXCI6IHtcbiAgICAgICAgYWxpZ25TZWxmOiBcImJhc2VsaW5lXCIsXG4gICAgfSxcbiAgICBcImFsaWduLXNlbGYtc3RyZXRjaFwiOiB7XG4gICAgICAgIGFsaWduU2VsZjogXCJzdHJldGNoXCIsXG4gICAgfSxcblxuICAgIC8vanVzdGlmeS1jb250ZW50XG5cbiAgICBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIjoge1xuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB9LFxuICAgIFwianVzdGlmeS1jb250ZW50LWVuZFwiOiB7XG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgfSxcbiAgICBcImp1c3RpZnktY29udGVudC1zdGFydFwiOiB7XG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICB9LFxuICAgIFwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIjoge1xuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgfSxcbiAgICBcImp1c3RpZnktY29udGVudC1ldmVubHlcIjoge1xuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIixcbiAgICB9LFxuICAgIFwianVzdGlmeS1jb250ZW50LWFyb3VuZFwiOiB7XG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIH0sXG5cbiAgICBcImp1c3RpZnktY2VudGVyXCI6IHtcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgICBcImp1c3RpZnktZW5kXCI6IHtcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgICB9LFxuICAgIFwianVzdGlmeS1zdGFydFwiOiB7XG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICB9LFxuICAgIFwianVzdGlmeS1iZXR3ZWVuXCI6IHtcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIH0sXG4gICAgXCJqdXN0aWZ5LWV2ZW5seVwiOiB7XG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwiLFxuICAgIH0sXG4gICAgXCJqdXN0aWZ5LWFyb3VuZFwiOiB7XG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIH0sXG5cbiAgICAuLi5mbGV4VmFsdWVDbGFzcyxcbiAgICAuLi5kaXNwbGF5VmFsdWVDbGFzcyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmbGV4U3R5bGU7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFVBQVQsUUFBMkIsY0FBM0I7QUFDQSxTQUFTQyxrQkFBVDtBQUVBLE9BQU8sTUFBTUMsVUFBVSxHQUFHO0VBQ3RCLEdBQUcsQ0FEbUI7RUFFdEIsR0FBRyxDQUZtQjtFQUd0QixHQUFHLENBSG1CO0VBSXRCLEdBQUcsQ0FKbUI7RUFLdEIsR0FBRyxDQUxtQjtFQU10QixHQUFHLENBTm1CO0VBT3RCLEdBQUcsQ0FQbUI7RUFRdEIsR0FBRyxDQVJtQjtFQVN0QixHQUFHLENBVG1CO0VBVXRCLElBQUk7QUFWa0IsQ0FBbkI7QUFZUCxPQUFPLE1BQU1DLGFBQWEsR0FBRztFQUN6QkMsSUFBSSxFQUFFLE1BRG1CO0VBRXpCQyxJQUFJLEVBQUU7QUFGbUIsQ0FBdEI7QUFLUCxNQUFNQyxjQUFjLEdBQUdMLGtCQUFrQixDQUFDO0VBQUVHLElBQUksRUFBRTtBQUFSLENBQUQsRUFBbUJGLFVBQW5CLENBQXpDO0FBRUEsTUFBTUssaUJBQWlCLEdBQUdOLGtCQUFrQixDQUN4QztFQUFFTyxPQUFPLEVBQUU7QUFBWCxDQUR3QyxFQUV4Q0wsYUFGd0MsQ0FBNUM7QUFLQSxNQUFNTSxTQUFTLEdBQUdULFVBQVUsQ0FBQ1UsTUFBWCxDQUFrQjtFQUNoQztFQUVBLGFBQWE7SUFDVEMsUUFBUSxFQUFFO0VBREQsQ0FIbUI7RUFPaEMsZUFBZTtJQUNYQSxRQUFRLEVBQUU7RUFEQyxDQVBpQjtFQVdoQyxxQkFBcUI7SUFDakJBLFFBQVEsRUFBRTtFQURPLENBWFc7RUFlaEMsWUFBWTtJQUNSQyxhQUFhLEVB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