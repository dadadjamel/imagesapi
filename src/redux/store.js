import { createStore, compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './index';

const store = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension(),
  )(createStore)(rootReducer);

export default store;