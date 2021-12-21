import axios from "../../config/axios";

export const fetchImagesThunk = () => {
  return async (dispatch, getState) => {
    // Set loading to true
    dispatch({ type: "FETCH_IMAGES_REQUEST" });

    try {
      const response = await axios.get(
        `/list?page=${getState().numPage}&limit=15`
      );
      dispatch({ type: "FETCH_IMAGES_SUCCESS", payload: response.data });
    } catch (error) {
      // Set error
      dispatch({ type: "FETCH_IMAGES_FAILURE", payload: error.message });
    }
  };
};
