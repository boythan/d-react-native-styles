import { StyleSheet } from 'react-native';
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
const flexValueClass = generateStyleValue({
  flex: 'flex'
}, FLEX_VALUE);
const flexStyle = StyleSheet.create({
  //flex
  'flex-wrap': {
    flexWrap: 'wrap'
  },
  'flex-nowrap': {
    flexWrap: 'nowrap'
  },
  'flex-wrap-reverse': {
    flexWrap: 'wrap-reverse'
  },
  'flex-row': {
    flexDirection: 'row'
  },
  'flex-row-reverse': {
    flexDirection: 'row-reverse'
  },
  'flex-column': {
    flexDirection: 'column'
  },
  'flex-column-reverse': {
    flexDirection: 'column-reverse'
  },
  'flex-center': {
    justifyContent: 'center',
    alignItems: 'center'
  },
  'flex-center-y': {
    flexDirection: 'row',
    alignItems: 'center'
  },
  'flex-center-x': {
    flexDirection: 'column',
    alignItems: 'center'
  },
  // align
  'align-center': {
    alignItems: 'center'
  },
  'align-items-center': {
    alignItems: 'center'
  },
  'align-end': {
    alignItems: 'flex-end'
  },
  'align-items-end': {
    alignItems: 'flex-end'
  },
  'align-start': {
    alignItems: 'flex-start'
  },
  'align-items-start': {
    alignItems: 'flex-start'
  },
  'align-base': {
    alignItems: 'baseline'
  },
  'align-items-base': {
    alignItems: 'baseline'
  },
  'align-stretch': {
    alignItems: 'stretch'
  },
  'align-items-stretch': {
    alignItems: 'stretch'
  },
  'align-self-center': {
    alignSelf: 'center'
  },
  'align-self-end': {
    alignSelf: 'flex-end'
  },
  'align-self-start': {
    alignSelf: 'flex-start'
  },
  'align-self-base': {
    alignSelf: 'baseline'
  },
  'align-self-stretch': {
    alignSelf: 'stretch'
  },
  //justify-content
  'justify-content-center': {
    justifyContent: 'center'
  },
  'justify-content-end': {
    justifyContent: 'flex-end'
  },
  'justify-content-start': {
    justifyContent: 'flex-start'
  },
  'justify-content-between': {
    justifyContent: 'space-between'
  },
  'justify-content-evenly': {
    justifyContent: 'space-evenly'
  },
  'justify-content-around': {
    justifyContent: 'space-around'
  },
  'justify-center': {
    justifyContent: 'center'
  },
  'justify-end': {
    justifyContent: 'flex-end'
  },
  'justify-start': {
    justifyContent: 'flex-start'
  },
  'justify-between': {
    justifyContent: 'space-between'
  },
  'justify-evenly': {
    justifyContent: 'space-evenly'
  },
  'justify-around': {
    justifyContent: 'space-around'
  },
  ...flexValueClass
});
export default flexStyle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdHlsZVNoZWV0IiwiZ2VuZXJhdGVTdHlsZVZhbHVlIiwiRkxFWF9WQUxVRSIsImZsZXhWYWx1ZUNsYXNzIiwiZmxleCIsImZsZXhTdHlsZSIsImNyZWF0ZSIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduU2VsZiJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS9fZmxleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0eWxlU2hlZXR9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQge2dlbmVyYXRlU3R5bGVWYWx1ZX0gZnJvbSAnLi4vbW9kaWZpZXInO1xuXG5leHBvcnQgY29uc3QgRkxFWF9WQUxVRSA9IHtcbiAgMTogMSxcbiAgMjogMixcbiAgMzogMyxcbiAgNDogNCxcbiAgNTogNSxcbiAgNjogNixcbiAgNzogNyxcbiAgODogOCxcbiAgOTogOSxcbiAgMTA6IDEwLFxufTtcblxuY29uc3QgZmxleFZhbHVlQ2xhc3MgPSBnZW5lcmF0ZVN0eWxlVmFsdWUoe2ZsZXg6ICdmbGV4J30sIEZMRVhfVkFMVUUpO1xuXG5jb25zdCBmbGV4U3R5bGUgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIC8vZmxleFxuXG4gICdmbGV4LXdyYXAnOiB7XG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgfSxcblxuICAnZmxleC1ub3dyYXAnOiB7XG4gICAgZmxleFdyYXA6ICdub3dyYXAnLFxuICB9LFxuXG4gICdmbGV4LXdyYXAtcmV2ZXJzZSc6IHtcbiAgICBmbGV4V3JhcDogJ3dyYXAtcmV2ZXJzZScsXG4gIH0sXG5cbiAgJ2ZsZXgtcm93Jzoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICB9LFxuXG4gICdmbGV4LXJvdy1yZXZlcnNlJzoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gIH0sXG5cbiAgJ2ZsZXgtY29sdW1uJzoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuXG4gICdmbGV4LWNvbHVtbi1yZXZlcnNlJzoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXG4gIH0sXG5cbiAgJ2ZsZXgtY2VudGVyJzoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcblxuICAnZmxleC1jZW50ZXIteSc6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcblxuICAnZmxleC1jZW50ZXIteCc6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcblxuICAvLyBhbGlnblxuXG4gICdhbGlnbi1jZW50ZXInOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG4gICdhbGlnbi1pdGVtcy1jZW50ZXInOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG4gICdhbGlnbi1lbmQnOiB7XG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcbiAgfSxcbiAgJ2FsaWduLWl0ZW1zLWVuZCc6IHtcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICB9LFxuICAnYWxpZ24tc3RhcnQnOiB7XG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICB9LFxuICAnYWxpZ24taXRlbXMtc3RhcnQnOiB7XG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICB9LFxuICAnYWxpZ24tYmFzZSc6IHtcbiAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxuICB9LFxuICAnYWxpZ24taXRlbXMtYmFzZSc6IHtcbiAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxuICB9LFxuICAnYWxpZ24tc3RyZXRjaCc6IHtcbiAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gIH0sXG4gICdhbGlnbi1pdGVtcy1zdHJldGNoJzoge1xuICAgIGFsaWduSXRlbXM6ICdzdHJldGNoJyxcbiAgfSxcbiAgJ2FsaWduLXNlbGYtY2VudGVyJzoge1xuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIH0sXG4gICdhbGlnbi1zZWxmLWVuZCc6IHtcbiAgICBhbGlnblNlbGY6ICdmbGV4LWVuZCcsXG4gIH0sXG4gICdhbGlnbi1zZWxmLXN0YXJ0Jzoge1xuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxuICB9LFxuICAnYWxpZ24tc2VsZi1iYXNlJzoge1xuICAgIGFsaWduU2VsZjogJ2Jhc2VsaW5lJyxcbiAgfSxcbiAgJ2FsaWduLXNlbGYtc3RyZXRjaCc6IHtcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgfSxcblxuICAvL2p1c3RpZnktY29udGVudFxuXG4gICdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJzoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgJ2p1c3RpZnktY29udGVudC1lbmQnOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gIH0sXG4gICdqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgfSxcbiAgJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJzoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gICdqdXN0aWZ5LWNvbnRlbnQtZXZlbmx5Jzoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcbiAgfSxcbiAgJ2p1c3RpZnktY29udGVudC1hcm91bmQnOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICB9LFxuXG4gICdqdXN0aWZ5LWNlbnRlcic6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gICdqdXN0aWZ5LWVuZCc6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgfSxcbiAgJ2p1c3RpZnktc3RhcnQnOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgfSxcbiAgJ2p1c3RpZnktYmV0d2Vlbic6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICAnanVzdGlmeS1ldmVubHknOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuICB9LFxuICAnanVzdGlmeS1hcm91bmQnOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICB9LFxuXG4gIC4uLmZsZXhWYWx1ZUNsYXNzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZsZXhTdHlsZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUUEsVUFBUixRQUF5QixjQUF6QjtBQUNBLFNBQVFDLGtCQUFSO0FBRUEsT0FBTyxNQUFNQyxVQUFVLEdBQUc7RUFDeEIsR0FBRyxDQURxQjtFQUV4QixHQUFHLENBRnFCO0VBR3hCLEdBQUcsQ0FIcUI7RUFJeEIsR0FBRyxDQUpxQjtFQUt4QixHQUFHLENBTHFCO0VBTXhCLEdBQUcsQ0FOcUI7RUFPeEIsR0FBRyxDQVBxQjtFQVF4QixHQUFHLENBUnFCO0VBU3hCLEdBQUcsQ0FUcUI7RUFVeEIsSUFBSTtBQVZvQixDQUFuQjtBQWFQLE1BQU1DLGNBQWMsR0FBR0Ysa0JBQWtCLENBQUM7RUFBQ0csSUFBSSxFQUFFO0FBQVAsQ0FBRCxFQUFpQkYsVUFBakIsQ0FBekM7QUFFQSxNQUFNRyxTQUFTLEdBQUdMLFVBQVUsQ0FBQ00sTUFBWCxDQUFrQjtFQUNsQztFQUVBLGFBQWE7SUFDWEMsUUFBUSxFQUFFO0VBREMsQ0FIcUI7RUFPbEMsZUFBZTtJQUNiQSxRQUFRLEVBQUU7RUFERyxDQVBtQjtFQVdsQyxxQkFBcUI7SUFDbkJBLFFBQVEsRUFBRTtFQURTLENBWGE7RUFlbEMsWUFBWTtJQUNWQyxhQUFhLEVBQUU7RUFETCxDQWZzQjtFQW1CbEMsb0JBQW9CO0lBQ2xCQSxhQUFhLEVBQUU7RUFERyxDQW5CYztFQXVCbEMsZUFBZTtJQUNiQSxhQUFhLEVBQUU7RUFERixDQXZCbUI7RUEyQmxDLHVCQUF1QjtJQUNyQkEsYUFBYSxFQUFFO0VBRE0sQ0EzQlc7RUErQmxDLGVBQWU7SUFDYkMsY0FBYyxFQUFFLFFBREg7SUFFYkMsVUFBVSxFQUFFO0VBRkMsQ0EvQm1CO0VBb0NsQyxpQkFBaUI7SUFDZkYsYUFBYSxFQUFFLEtBREE7SUFFZkUsVUFBVSxFQUFFO0VBRkcsQ0FwQ2lCO0VBeUNsQyxpQkFBaUI7SUFDZkYsYUFBYSxFQUFFLFFBREE7SUFFZkUsVUFBVSxFQUFFO0VBRkcsQ0F6Q2lCO0VBOENsQztFQUVBLGdCQUFnQjtJQUNkQSxVQUFVLEVBQUU7RUFERSxDQWhEa0I7RUFtRGxDLHNCQUFzQjtJQUNwQkEsVUFBVSxFQUFFO0VBRFEsQ0FuRFk7RUFzRGxDLGFBQWE7SUFDWEEsVUFBVSxFQUFFO0VBREQsQ0F0RHFCO0VBeURsQyxtQkFBbUI7SUFDakJBLFVBQVUsRUFBRTtFQURLLENBekRlO0VBNERsQyxlQUFlO0lBQ2JBLFVBQVUsRUFBRTtFQURDLENBNURtQjtFQStEbEMscUJBQXFCO0lBQ25CQSxVQUFVLEVBQUU7RUFETyxDQS9EYTtFQWtFbEMsY0FBYztJQUNaQSxVQUFVLEVBQUU7RUFEQSxDQWxFb0I7RUFxRWxDLG9CQUFvQjtJQUNsQkEsVUFBVSxFQUFFO0VBRE0sQ0FyRWM7RUF3RWxDLGlCQUFpQjtJQUNmQSxVQUFVLEVBQUU7RUFERyxDQXhFaUI7RUEyRWxDLHVCQUF1QjtJQUNyQkEsVUFBVSxFQUFFO0VBRFMsQ0EzRVc7RUE4RWxDLHFCQUFxQjtJQUNuQkMsU0FBUyxFQUFFO0VBRFEsQ0E5RWE7RUFpRmxDLGtCQUFrQjtJQUNoQkEsU0FBUyxFQUFFO0VBREssQ0FqRmdCO0VBb0ZsQyxvQkFBb0I7SUFDbEJBLFNBQVMsRUFBRTtFQURPLENBcEZjO0VBdUZsQyxtQkFBbUI7SUFDakJBLFNBQVMsRUFBRTtFQURNLENBdkZlO0VBMEZsQyxzQkFBc0I7SUFDcEJBLFNBQVMsRUFBRTtFQURTLENBMUZZO0VBOEZsQztFQUVBLDBCQUEwQjtJQUN4QkYsY0FBYyxFQUFFO0VBRFEsQ0FoR1E7RUFtR2xDLHVCQUF1QjtJQUNyQkEsY0FBYyxFQUFFO0VBREssQ0FuR1c7RUFzR2xDLHlCQUF5QjtJQUN2QkEsY0FBYyxFQUFFO0VBRE8sQ0F0R1M7RUF5R2xDLDJCQUEyQjtJQUN6QkEsY0FBYyxFQUFFO0VBRFMsQ0F6R087RUE0R2xDLDBCQUEwQjtJQUN4QkEsY0FBYyxFQUFFO0VBRFEsQ0E1R1E7RUErR2xDLDBCQUEwQjtJQUN4QkEsY0FBYyxFQUFFO0VBRFEsQ0EvR1E7RUFtSGxDLGtCQUFrQjtJQUNoQkEsY0FBYyxFQUFFO0VBREEsQ0FuSGdCO0VBc0hsQyxlQUFlO0lBQ2JBLGNBQWMsRUFBRTtFQURILENBdEhtQjtFQXlIbEMsaUJBQWlCO0lBQ2ZBLGNBQWMsRUFBRTtFQURELENBekhpQjtFQTRIbEMsbUJBQW1CO0lBQ2pCQSxjQUFjLEVBQUU7RUFEQyxDQTVIZTtFQStIbEMsa0JBQWtCO0lBQ2hCQSxjQUFjLEVBQUU7RUFEQSxDQS9IZ0I7RUFrSWxDLGtCQUFrQjtJQUNoQkEsY0FBYyxFQUFFO0VBREEsQ0FsSWdCO0VBc0lsQyxHQUFHTjtBQXRJK0IsQ0FBbEIsQ0FBbEI7QUF5SUEsZUFBZUUsU0FBZiJ9