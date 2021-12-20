const initialState = {
  loading: false,
  error: null,
  items: [],
};

export default function images(state = initialState, action) {
  switch (action.type) {
    case "FETCH_IMAGES_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_IMAGES_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        items: [...state.items, ...action.payload],
      };
    case "FETCH_IMAGES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
