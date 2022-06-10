import { StyleSheet } from 'react-native';
export const POSITION_VARIANTS = ['right', 'left', 'top', 'bottom'];
const positionClass = {};
const zIndexClass = {};

for (let i = 0; i < 101; i++) {
  POSITION_VARIANTS.forEach(key => {
    positionClass[`${key}-${i}`] = {
      [key]: i
    };
  });
}

for (let i = 1; i < 11; i++) {
  zIndexClass[`zIndex-${i}`] = {
    zIndex: i
  };
}

const positionStyle = StyleSheet.create({
  'position-relative': {
    position: 'relative'
  },
  'position-absolute': {
    position: 'absolute'
  },
  'zIndex-1': {
    zIndex: 1
  },
  ...positionClass,
  ...zIndexClass
});
export default positionStyle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdHlsZVNoZWV0IiwiUE9TSVRJT05fVkFSSUFOVFMiLCJwb3NpdGlvbkNsYXNzIiwiekluZGV4Q2xhc3MiLCJpIiwiZm9yRWFjaCIsImtleSIsInpJbmRleCIsInBvc2l0aW9uU3R5bGUiLCJjcmVhdGUiLCJwb3NpdGlvbiJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS9fcG9zaXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdHlsZVNoZWV0fSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgY29uc3QgUE9TSVRJT05fVkFSSUFOVFMgPSBbJ3JpZ2h0JywgJ2xlZnQnLCAndG9wJywgJ2JvdHRvbSddO1xuY29uc3QgcG9zaXRpb25DbGFzczogYW55ID0ge307XG5jb25zdCB6SW5kZXhDbGFzczogYW55ID0ge307XG5mb3IgKGxldCBpID0gMDsgaSA8IDEwMTsgaSsrKSB7XG4gIFBPU0lUSU9OX1ZBUklBTlRTLmZvckVhY2goa2V5ID0+IHtcbiAgICBwb3NpdGlvbkNsYXNzW2Ake2tleX0tJHtpfWBdID0ge1trZXldOiBpfTtcbiAgfSk7XG59XG5cbmZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICB6SW5kZXhDbGFzc1tgekluZGV4LSR7aX1gXSA9IHtcbiAgICB6SW5kZXg6IGksXG4gIH07XG59XG5cbmNvbnN0IHBvc2l0aW9uU3R5bGUgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gICdwb3NpdGlvbi1yZWxhdGl2ZSc6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbiAgJ3Bvc2l0aW9uLWFic29sdXRlJzoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB9LFxuICAnekluZGV4LTEnOiB7XG4gICAgekluZGV4OiAxLFxuICB9LFxuICAuLi5wb3NpdGlvbkNsYXNzLFxuICAuLi56SW5kZXhDbGFzcyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvblN0eWxlO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFRQSxVQUFSLFFBQXlCLGNBQXpCO0FBRUEsT0FBTyxNQUFNQyxpQkFBaUIsR0FBRyxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLEtBQWxCLEVBQXlCLFFBQXpCLENBQTFCO0FBQ1AsTUFBTUMsYUFBa0IsR0FBRyxFQUEzQjtBQUNBLE1BQU1DLFdBQWdCLEdBQUcsRUFBekI7O0FBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEdBQXBCLEVBQXlCQSxDQUFDLEVBQTFCLEVBQThCO0VBQzVCSCxpQkFBaUIsQ0FBQ0ksT0FBbEIsQ0FBMEJDLEdBQUcsSUFBSTtJQUMvQkosYUFBYSxDQUFFLEdBQUVJLEdBQUksSUFBR0YsQ0FBRSxFQUFiLENBQWIsR0FBK0I7TUFBQyxDQUFDRSxHQUFELEdBQU9GO0lBQVIsQ0FBL0I7RUFDRCxDQUZEO0FBR0Q7O0FBRUQsS0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0VBQzNCRCxXQUFXLENBQUUsVUFBU0MsQ0FBRSxFQUFiLENBQVgsR0FBNkI7SUFDM0JHLE1BQU0sRUFBRUg7RUFEbUIsQ0FBN0I7QUFHRDs7QUFFRCxNQUFNSSxhQUFhLEdBQUdSLFVBQVUsQ0FBQ1MsTUFBWCxDQUFrQjtFQUN0QyxxQkFBcUI7SUFDbkJDLFFBQVEsRUFBRTtFQURTLENBRGlCO0VBSXRDLHFCQUFxQjtJQUNuQkEsUUFBUSxFQUFFO0VBRFMsQ0FKaUI7RUFPdEMsWUFBWTtJQUNWSCxNQUFNLEVBQUU7RUFERSxDQVAwQjtFQVV0QyxHQUFHTCxhQVZtQztFQVd0QyxHQUFHQztBQVhtQyxDQUFsQixDQUF0QjtBQWNBLGVBQWVLLGFBQWYifQ==