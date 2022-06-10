import { StyleSheet } from 'react-native';
import Colors from "../color/_color";
import { generateStyleValue } from "../modifier";
export const BACKGROUND_VARIATIONS = {
  bg: 'backgroundColor'
};
const backgroundClass = generateStyleValue(BACKGROUND_VARIATIONS, Colors);
const backgroundStyle = StyleSheet.create({
  'bg-transparent': {
    backgroundColor: 'transparent'
  },
  ...backgroundClass
});
export default backgroundStyle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdHlsZVNoZWV0IiwiQ29sb3JzIiwiZ2VuZXJhdGVTdHlsZVZhbHVlIiwiQkFDS0dST1VORF9WQVJJQVRJT05TIiwiYmciLCJiYWNrZ3JvdW5kQ2xhc3MiLCJiYWNrZ3JvdW5kU3R5bGUiLCJjcmVhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdGhlbWUvX2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdHlsZVNoZWV0fSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IENvbG9ycyBmcm9tICcuLi9jb2xvci9fY29sb3InO1xuaW1wb3J0IHtnZW5lcmF0ZVN0eWxlVmFsdWV9IGZyb20gJy4uL21vZGlmaWVyJztcblxuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkRfVkFSSUFUSU9OUyA9IHtcbiAgYmc6ICdiYWNrZ3JvdW5kQ29sb3InLFxufTtcblxuY29uc3QgYmFja2dyb3VuZENsYXNzID0gZ2VuZXJhdGVTdHlsZVZhbHVlKEJBQ0tHUk9VTkRfVkFSSUFUSU9OUywgQ29sb3JzKTtcblxuY29uc3QgYmFja2dyb3VuZFN0eWxlID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAnYmctdHJhbnNwYXJlbnQnOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICB9LFxuICAuLi5iYWNrZ3JvdW5kQ2xhc3MsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYmFja2dyb3VuZFN0eWxlO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFRQSxVQUFSLFFBQXlCLGNBQXpCO0FBQ0EsT0FBT0MsTUFBUDtBQUNBLFNBQVFDLGtCQUFSO0FBRUEsT0FBTyxNQUFNQyxxQkFBcUIsR0FBRztFQUNuQ0MsRUFBRSxFQUFFO0FBRCtCLENBQTlCO0FBSVAsTUFBTUMsZUFBZSxHQUFHSCxrQkFBa0IsQ0FBQ0MscUJBQUQsRUFBd0JGLE1BQXhCLENBQTFDO0FBRUEsTUFBTUssZUFBZSxHQUFHTixVQUFVLENBQUNPLE1BQVgsQ0FBa0I7RUFDeEMsa0JBQWtCO0lBQ2hCQyxlQUFlLEVBQUU7RUFERCxDQURzQjtFQUl4QyxHQUFHSDtBQUpxQyxDQUFsQixDQUF4QjtBQU9BLGVBQWVDLGVBQWYifQ==