import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import logger from 'redux-logger';
import clothesReducer from './reducers/clothes-reducer.tsx';
import cartReducer from './reducers/cart-reducer.tsx';
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

window.store = store;
export default store;

