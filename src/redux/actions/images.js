import axios from 'axios';
import * as type from '../types';

// export function getImages(images) {
//   return { 
//     type: type.GET_IMAGES,
//     payload: images,
//   }
// }

export const fetchImages = () => {
  return async (dispatch, getState) => {

    dispatch({ type: 'FETCH_IMAGES_REQUEST' })

    try {
      
      const response = await axios.get(`https://picsum.photos/v2/list?page=${getState.numpage}&limit=15`)
      dispatch({ type: 'FETCH_IMAGES_SUCCESS', payload: response.data })

    } catch (error) {
      dispatch({ type: 'FETCH_IMAGES_FAILURE' })

    }
  }
}