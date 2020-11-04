import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import clothesReducer from './reducers/clothes-reducer';
import cartReducer from './reducers/cart-reducer';
import filterReducer from './reducers/filter-reducer';
import { reducer as formReducer } from 'redux-form';

const middlewares = [thunkMiddleware]
// const middlewares = [thunkMiddleware, logger]

let reducers = combineReducers({
  clothesList: clothesReducer,
  cartList: cartReducer,
  filter: filterReducer,
  form: formReducer
})

let store = createStore(reducers, applyMiddleware(...middlewares));

// store.dispatch(addBookAC({id: 3, title: 'Call of Cthulhu'}));
// store.dispatch(addBookAC({id: 4, title: 'Eisenhorn: Xenos'}));

window.store = store;
export default store;

