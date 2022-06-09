/**
 * App Theme - Sizes
 */
const DefaultFont = {
  // iosFont: "Poppins-Regular",
  // androidFont: "Poppins-Reg",
  // iosBoldFont: "Poppins-Bold",
  // androidBoldFont: "Poppins-Bold",
  // iosFont: "Cochin",
  // androidFont: "Cochin",
  // iosBoldFont: "Cochin",
  // androidBoldFont: "Cochin",
  android: {
    family: {
      regular: 'Cochin',
      italic: 'Cochin',
      thin: 'Cochin',
      thinItalic: 'Cochin',
      light: 'Cochin',
      lightItalic: 'Cochin',
      semiBold: 'Cochin',
      semiBoldItalic: 'Cochin',
      medium: 'Cochin',
      mediumItalic: 'Cochin',
      bold: 'Prompt-Bold',
      boldItalic: 'Cochin'
    },
    baseFontSize: 12
  },
  ios: {
    family: {
      regular: 'Prompt-Regular',
      italic: 'Prompt-Italic',
      thin: 'Prompt-Thin',
      thinItalic: 'Prompt',
      light: 'Prompt-Light',
      lightItalic: 'Prompt',
      semiBold: 'Prompt-SemiBold',
      semiBoldItalic: 'Prompt',
      medium: 'Prompt-Medium',
      mediumItalic: 'Prompt',
      bold: 'Prompt-Bold',
      boldItalic: 'Prompt-BoldItalic'
    },
    baseFontSize: 12
  }
};
export default DefaultFont;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0Rm9udCIsImFuZHJvaWQiLCJmYW1pbHkiLCJyZWd1bGFyIiwiaXRhbGljIiwidGhpbiIsInRoaW5JdGFsaWMiLCJsaWdodCIsImxpZ2h0SXRhbGljIiwic2VtaUJvbGQiLCJzZW1pQm9sZEl0YWxpYyIsIm1lZGl1bSIsIm1lZGl1bUl0YWxpYyIsImJvbGQiLCJib2xkSXRhbGljIiwiYmFzZUZvbnRTaXplIiwiaW9zIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZvbnQvX2ZvbnRzLWRlZmF1bHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBcHAgVGhlbWUgLSBTaXplc1xuICovXG5cbmNvbnN0IERlZmF1bHRGb250ID0ge1xuICAvLyBpb3NGb250OiBcIlBvcHBpbnMtUmVndWxhclwiLFxuICAvLyBhbmRyb2lkRm9udDogXCJQb3BwaW5zLVJlZ1wiLFxuICAvLyBpb3NCb2xkRm9udDogXCJQb3BwaW5zLUJvbGRcIixcbiAgLy8gYW5kcm9pZEJvbGRGb250OiBcIlBvcHBpbnMtQm9sZFwiLFxuXG4gIC8vIGlvc0ZvbnQ6IFwiQ29jaGluXCIsXG4gIC8vIGFuZHJvaWRGb250OiBcIkNvY2hpblwiLFxuICAvLyBpb3NCb2xkRm9udDogXCJDb2NoaW5cIixcbiAgLy8gYW5kcm9pZEJvbGRGb250OiBcIkNvY2hpblwiLFxuICBhbmRyb2lkOiB7XG4gICAgZmFtaWx5OiB7XG4gICAgICByZWd1bGFyOiAnQ29jaGluJyxcbiAgICAgIGl0YWxpYzogJ0NvY2hpbicsXG5cbiAgICAgIHRoaW46ICdDb2NoaW4nLFxuICAgICAgdGhpbkl0YWxpYzogJ0NvY2hpbicsXG5cbiAgICAgIGxpZ2h0OiAnQ29jaGluJyxcbiAgICAgIGxpZ2h0SXRhbGljOiAnQ29jaGluJyxcblxuICAgICAgc2VtaUJvbGQ6ICdDb2NoaW4nLFxuICAgICAgc2VtaUJvbGRJdGFsaWM6ICdDb2NoaW4nLFxuXG4gICAgICBtZWRpdW06ICdDb2NoaW4nLFxuICAgICAgbWVkaXVtSXRhbGljOiAnQ29jaGluJyxcblxuICAgICAgYm9sZDogJ1Byb21wdC1Cb2xkJyxcbiAgICAgIGJvbGRJdGFsaWM6ICdDb2NoaW4nLFxuICAgIH0sXG4gICAgYmFzZUZvbnRTaXplOiAxMixcbiAgfSxcbiAgaW9zOiB7XG4gICAgZmFtaWx5OiB7XG4gICAgICByZWd1bGFyOiAnUHJvbXB0LVJlZ3VsYXInLFxuICAgICAgaXRhbGljOiAnUHJvbXB0LUl0YWxpYycsXG5cbiAgICAgIHRoaW46ICdQcm9tcHQtVGhpbicsXG4gICAgICB0aGluSXRhbGljOiAnUHJvbXB0JyxcblxuICAgICAgbGlnaHQ6ICdQcm9tcHQtTGlnaHQnLFxuICAgICAgbGlnaHRJdGFsaWM6ICdQcm9tcHQnLFxuXG4gICAgICBzZW1pQm9sZDogJ1Byb21wdC1TZW1pQm9sZCcsXG4gICAgICBzZW1pQm9sZEl0YWxpYzogJ1Byb21wdCcsXG5cbiAgICAgIG1lZGl1bTogJ1Byb21wdC1NZWRpdW0nLFxuICAgICAgbWVkaXVtSXRhbGljOiAnUHJvbXB0JyxcblxuICAgICAgYm9sZDogJ1Byb21wdC1Cb2xkJyxcbiAgICAgIGJvbGRJdGFsaWM6ICdQcm9tcHQtQm9sZEl0YWxpYycsXG4gICAgfSxcbiAgICBiYXNlRm9udFNpemU6IDEyLFxuICB9LFxufTtcblxuZXhwb3J0IHR5cGUgQXBwRm9udEtleVR5cGUgPSBrZXlvZiB0eXBlb2YgRGVmYXVsdEZvbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRGb250O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUc7RUFDbEI7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBQyxPQUFPLEVBQUU7SUFDUEMsTUFBTSxFQUFFO01BQ05DLE9BQU8sRUFBRSxRQURIO01BRU5DLE1BQU0sRUFBRSxRQUZGO01BSU5DLElBQUksRUFBRSxRQUpBO01BS05DLFVBQVUsRUFBRSxRQUxOO01BT05DLEtBQUssRUFBRSxRQVBEO01BUU5DLFdBQVcsRUFBRSxRQVJQO01BVU5DLFFBQVEsRUFBRSxRQVZKO01BV05DLGNBQWMsRUFBRSxRQVhWO01BYU5DLE1BQU0sRUFBRSxRQWJGO01BY05DLFlBQVksRUFBRSxRQWRSO01BZ0JOQyxJQUFJLEVBQUUsYUFoQkE7TUFpQk5DLFVBQVUsRUFBRTtJQWpCTixDQUREO0lBb0JQQyxZQUFZLEVBQUU7RUFwQlAsQ0FWUztFQWdDbEJDLEdBQUcsRUFBRTtJQUNIZCxNQUFNLEVBQUU7TUFDTkMsT0FBTyxFQUFFLGdCQURIO01BRU5DLE1BQU0sRUFBRSxlQUZGO01BSU5DLElBQUksRUFBRSxhQUpBO01BS05DLFVBQVUsRUFBRSxRQUxOO01BT05DLEtBQUssRUFBRSxjQVBEO01BUU5DLFdBQVcsRUFBRSxRQVJQO01BVU5DLFFBQVEsRUFBRSxpQkFWSjtNQVdOQyxjQUFjLEVBQUUsUUFYVjtNQWFOQyxNQUFNLEVBQUUsZUFiRjtNQWNOQyxZQUFZLEVBQUUsUUFkUjtNQWdCTkMsSUFBSSxFQUFFLGFBaEJBO01BaUJOQyxVQUFVLEVBQUU7SUFqQk4sQ0FETDtJQW9CSEMsWUFBWSxFQUFFO0VBcEJYO0FBaENhLENBQXBCO0FBMERBLGVBQWVmLFdBQWYifQ==