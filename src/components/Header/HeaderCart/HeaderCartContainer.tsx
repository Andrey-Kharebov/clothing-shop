import React from 'react';
import { uniqBy } from 'lodash';
import { connect } from 'react-redux';
import HeaderCart from './HeaderCart';
import { clearCart, removeItemFromCart, toggleActiveCart } from '../../../redux/reducers/cart-reducer';


// TypeScripts imports
import { ItemType } from '../../../types/types';
import { AppStateType } from '../../../redux/store';

type ParentPropsType = {
}

type MapStatePropsType = {
  uniqItems: Array<ItemType>,
  items: Array<ItemType>,
}

type MapDispatchPropsType = {
  clearCart: () => void,
  removeItemFromCart: (id: number) => void,
  toggleActiveCart: () => void
}

type UnitedPropsType = ParentPropsType & MapStatePropsType & MapDispatchPropsType;

const HeaderCartContainer: React.FC<UnitedPropsType> = (props) => {
  return (
    <HeaderCart 
      uniqItems={ props.uniqItems } 
      items={ props.items } 
      clearCart={ props.clearCart } 
      removeItemFromCart={ props.removeItemFromCart } 
      toggleActiveCart={ props.toggleActiveCart } 
    />
  );
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    uniqItems: uniqBy(state.cartList.items, i => i.id),
    items: state.cartList.items
  }
}

export default connect<MapStatePropsType, MapDispatchPropsType, ParentPropsType, AppStateType>(
  mapStateToProps, 
{ clearCart, removeItemFromCart, toggleActiveCart }
)(HeaderCartContainer);

