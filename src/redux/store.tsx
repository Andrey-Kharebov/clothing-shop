import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import logger from 'redux-logger';
import clothesReducer from './reducers/clothes-reducer';
import cartReducer from './reducers/cart-reducer';
import filterReducer from './reducers/filter-reducer';
import { reducer as formReducer } from 'redux-form';

const middlewares = [thunkMiddleware]
// const middlewares = [thunkMiddleware, logger]

let rootReducer = combineReducers({
  clothesList: clothesReducer,
  cartList: cartReducer,
  filter: filterReducer,
  form: formReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

let store = createStore(rootReducer, applyMiddleware(...middlewares));

// @ts-ignore
window.store = store;

export default store;

