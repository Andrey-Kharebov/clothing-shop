import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './reducers/books-reducer';

const middlewares = [thunkMiddleware, logger]

let reducers = combineReducers({
  booksList: booksReducer
})

let store = createStore(reducers, applyMiddleware(...middlewares));

// store.dispatch(addBookAC({id: 3, title: 'Call of Cthulhu'}));
// store.dispatch(addBookAC({id: 4, title: 'Eisenhorn: Xenos'}));

window.store = store;
export default store;

