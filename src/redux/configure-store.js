import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let middlewares = [];

// create store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;