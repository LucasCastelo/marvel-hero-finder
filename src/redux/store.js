import { createStore, applyMiddleware } from 'redux';
import heroReducer from './hero/heroReducer';
import thunk from 'redux-thunk';

const store = createStore(heroReducer, applyMiddleware(thunk));

export default store;
