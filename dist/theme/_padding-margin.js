import { StyleSheet } from 'react-native';
import Sizes from "../size/_size";
import { generateStyleValue } from "../modifier";
const {
  paddingTiny,
  paddingXSml,
  paddingMedium,
  paddingXXLarge,
  paddingXXXLarge
} = Sizes;
export const PADDING_KEY_PATTERN = new RegExp(`p[ltrbxy]?-([0-9]*)`);
export const PADDING_VARIATIONS = {
  p: 'padding',
  pl: 'paddingLeft',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  px: 'paddingHorizontal',
  py: 'paddingVertical'
};
const MARGIN_VARIATIONS = {
  m: 'margin',
  ml: 'marginLeft',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  mx: 'marginHorizontal',
  my: 'marginVertical'
};
export const MARGIN_PADDING_VALUES = {
  0: 0,
  1: paddingTiny,
  2: paddingXSml,
  3: paddingMedium,
  4: paddingXXLarge,
  5: paddingXXXLarge,
  6: paddingXXXLarge + 4,
  7: paddingXXXLarge + 8,
  8: paddingXXXLarge + 12,
  9: paddingXXXLarge + 16,
  10: paddingXXXLarge + 20
};
const paddingClass = generateStyleValue(PADDING_VARIATIONS, MARGIN_PADDING_VALUES);
const marginClass = generateStyleValue(MARGIN_VARIATIONS, MARGIN_PADDING_VALUES);
const marginPadding = StyleSheet.create({ ...paddingClass,
  ...marginClass
});
export default marginPadding;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdHlsZVNoZWV0IiwiU2l6ZXMiLCJnZW5lcmF0ZVN0eWxlVmFsdWUiLCJwYWRkaW5nVGlueSIsInBhZGRpbmdYU21sIiwicGFkZGluZ01lZGl1bSIsInBhZGRpbmdYWExhcmdlIiwicGFkZGluZ1hYWExhcmdlIiwiUEFERElOR19LRVlfUEFUVEVSTiIsIlJlZ0V4cCIsIlBBRERJTkdfVkFSSUFUSU9OUyIsInAiLCJwbCIsInB0IiwicHIiLCJwYiIsInB4IiwicHkiLCJNQVJHSU5fVkFSSUFUSU9OUyIsIm0iLCJtbCIsIm10IiwibXIiLCJtYiIsIm14IiwibXkiLCJNQVJHSU5fUEFERElOR19WQUxVRVMiLCJwYWRkaW5nQ2xhc3MiLCJtYXJnaW5DbGFzcyIsIm1hcmdpblBhZGRpbmciLCJjcmVhdGUiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdGhlbWUvX3BhZGRpbmctbWFyZ2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3R5bGVTaGVldH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBTaXplcyBmcm9tICcuLi9zaXplL19zaXplJztcbmltcG9ydCB7Z2VuZXJhdGVTdHlsZVZhbHVlfSBmcm9tICcuLi9tb2RpZmllcic7XG5cbmNvbnN0IHtcbiAgcGFkZGluZ1RpbnksXG4gIHBhZGRpbmdYU21sLFxuICBwYWRkaW5nTWVkaXVtLFxuICBwYWRkaW5nWFhMYXJnZSxcbiAgcGFkZGluZ1hYWExhcmdlLFxufSA9IFNpemVzO1xuXG5leHBvcnQgY29uc3QgUEFERElOR19LRVlfUEFUVEVSTiA9IG5ldyBSZWdFeHAoYHBbbHRyYnh5XT8tKFswLTldKilgKTtcblxuZXhwb3J0IGNvbnN0IFBBRERJTkdfVkFSSUFUSU9OUyA9IHtcbiAgcDogJ3BhZGRpbmcnLFxuICBwbDogJ3BhZGRpbmdMZWZ0JyxcbiAgcHQ6ICdwYWRkaW5nVG9wJyxcbiAgcHI6ICdwYWRkaW5nUmlnaHQnLFxuICBwYjogJ3BhZGRpbmdCb3R0b20nLFxuICBweDogJ3BhZGRpbmdIb3Jpem9udGFsJyxcbiAgcHk6ICdwYWRkaW5nVmVydGljYWwnLFxufTtcblxuY29uc3QgTUFSR0lOX1ZBUklBVElPTlMgPSB7XG4gIG06ICdtYXJnaW4nLFxuICBtbDogJ21hcmdpbkxlZnQnLFxuICBtdDogJ21hcmdpblRvcCcsXG4gIG1yOiAnbWFyZ2luUmlnaHQnLFxuICBtYjogJ21hcmdpbkJvdHRvbScsXG4gIG14OiAnbWFyZ2luSG9yaXpvbnRhbCcsXG4gIG15OiAnbWFyZ2luVmVydGljYWwnLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IE1BUkdJTl9QQURESU5HX1ZBTFVFUyA9IHtcbiAgMDogMCxcbiAgMTogcGFkZGluZ1RpbnksXG4gIDI6IHBhZGRpbmdYU21sLFxuICAzOiBwYWRkaW5nTWVkaXVtLFxuICA0OiBwYWRkaW5nWFhMYXJnZSxcbiAgNTogcGFkZGluZ1hYWExhcmdlLFxuICA2OiBwYWRkaW5nWFhYTGFyZ2UgKyA0LFxuICA3OiBwYWRkaW5nWFhYTGFyZ2UgKyA4LFxuICA4OiBwYWRkaW5nWFhYTGFyZ2UgKyAxMixcbiAgOTogcGFkZGluZ1hYWExhcmdlICsgMTYsXG4gIDEwOiBwYWRkaW5nWFhYTGFyZ2UgKyAyMCxcbn07XG5cbmV4cG9ydCB0eXBlIFBhZGRpbmdMaXRlcmFscyA9IGtleW9mIHR5cGVvZiBQQURESU5HX1ZBUklBVElPTlM7XG5leHBvcnQgdHlwZSBOYXRpdmVQYWRkaW5nS2V5VHlwZSA9IHR5cGVvZiBQQURESU5HX1ZBUklBVElPTlNbUGFkZGluZ0xpdGVyYWxzXTtcbmV4cG9ydCB0eXBlIFZhbHVlTGl0ZXJhbHMgPSBrZXlvZiB0eXBlb2YgTUFSR0lOX1BBRERJTkdfVkFMVUVTO1xuXG5jb25zdCBwYWRkaW5nQ2xhc3MgPSBnZW5lcmF0ZVN0eWxlVmFsdWUoXG4gIFBBRERJTkdfVkFSSUFUSU9OUyxcbiAgTUFSR0lOX1BBRERJTkdfVkFMVUVTLFxuKTtcblxuY29uc3QgbWFyZ2luQ2xhc3MgPSBnZW5lcmF0ZVN0eWxlVmFsdWUoXG4gIE1BUkdJTl9WQVJJQVRJT05TLFxuICBNQVJHSU5fUEFERElOR19WQUxVRVMsXG4pO1xuXG5jb25zdCBtYXJnaW5QYWRkaW5nID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAuLi5wYWRkaW5nQ2xhc3MsXG4gIC4uLm1hcmdpbkNsYXNzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1hcmdpblBhZGRpbmc7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVFBLFVBQVIsUUFBeUIsY0FBekI7QUFDQSxPQUFPQyxLQUFQO0FBQ0EsU0FBUUMsa0JBQVI7QUFFQSxNQUFNO0VBQ0pDLFdBREk7RUFFSkMsV0FGSTtFQUdKQyxhQUhJO0VBSUpDLGNBSkk7RUFLSkM7QUFMSSxJQU1GTixLQU5KO0FBUUEsT0FBTyxNQUFNTyxtQkFBbUIsR0FBRyxJQUFJQyxNQUFKLENBQVkscUJBQVosQ0FBNUI7QUFFUCxPQUFPLE1BQU1DLGtCQUFrQixHQUFHO0VBQ2hDQyxDQUFDLEVBQUUsU0FENkI7RUFFaENDLEVBQUUsRUFBRSxhQUY0QjtFQUdoQ0MsRUFBRSxFQUFFLFlBSDRCO0VBSWhDQyxFQUFFLEVBQUUsY0FKNEI7RUFLaENDLEVBQUUsRUFBRSxlQUw0QjtFQU1oQ0MsRUFBRSxFQUFFLG1CQU40QjtFQU9oQ0MsRUFBRSxFQUFFO0FBUDRCLENBQTNCO0FBVVAsTUFBTUMsaUJBQWlCLEdBQUc7RUFDeEJDLENBQUMsRUFBRSxRQURxQjtFQUV4QkMsRUFBRSxFQUFFLFlBRm9CO0VBR3hCQyxFQUFFLEVBQUUsV0FIb0I7RUFJeEJDLEVBQUUsRUFBRSxhQUpvQjtFQUt4QkMsRUFBRSxFQUFFLGNBTG9CO0VBTXhCQyxFQUFFLEVBQUUsa0JBTm9CO0VBT3hCQyxFQUFFLEVBQUU7QUFQb0IsQ0FBMUI7QUFVQSxPQUFPLE1BQU1DLHFCQUFxQixHQUFHO0VBQ25DLEdBQUcsQ0FEZ0M7RUFFbkMsR0FBR3ZCLFdBRmdDO0VBR25DLEdBQUdDLFdBSGdDO0VBSW5DLEdBQUdDLGFBSmdDO0VBS25DLEdBQUdDLGNBTGdDO0VBTW5DLEdBQUdDLGVBTmdDO0VBT25DLEdBQUdBLGVBQWUsR0FBRyxDQVBjO0VBUW5DLEdBQUdBLGVBQWUsR0FBRyxDQVJjO0VBU25DLEdBQUdBLGVBQWUsR0FBRyxFQVRjO0VBVW5DLEdBQUdBLGVBQWUsR0FBRyxFQVZjO0VBV25DLElBQUlBLGVBQWUsR0FBRztBQVhhLENBQTlCO0FBa0JQLE1BQU1vQixZQUFZLEdBQUd6QixrQkFBa0IsQ0FDckNRLGtCQURxQyxFQUVyQ2dCLHFCQUZxQyxDQUF2QztBQUtBLE1BQU1FLFdBQVcsR0FBRzFCLGtCQUFrQixDQUNwQ2dCLGlCQURvQyxFQUVwQ1EscUJBRm9DLENBQXRDO0FBS0EsTUFBTUcsYUFBYSxHQUFHN0IsVUFBVSxDQUFDOEIsTUFBWCxDQUFrQixFQUN0QyxHQUFHSCxZQURtQztFQUV0QyxHQUFHQztBQUZtQyxDQUFsQixDQUF0QjtBQUtBLGVBQWVDLGFBQWYifQ==