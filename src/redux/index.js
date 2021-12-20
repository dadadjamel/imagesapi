import { combineReducers } from 'redux';
import images from './reducers/images';
import numpage from './reducers/numpage';

const rootReducer = combineReducers({
    images: images,
    numpage: numpage,
});

export default rootReducer;