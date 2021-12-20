const initialState = 1;

export default function numPage(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_NUMPAGE":
      return state + 1;
    default:
      return state;
  }
}
