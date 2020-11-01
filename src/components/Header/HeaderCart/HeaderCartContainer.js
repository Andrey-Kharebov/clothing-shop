import React from 'react';
import { uniqBy } from 'lodash';
import { connect } from 'react-redux';
import HeaderCart from './HeaderCart';
import { clearCart, removeItemFromCart, toggleActiveCart } from '../../../redux/reducers/cart-reducer';

function HeaderCartContainer(props) {
  return (
    <HeaderCart uniqItems={ props.uniqItems } items={ props.items } clearCart={ props.clearCart } removeItemFromCart={ props.removeItemFromCart } toggleActiveCart={ props.toggleActiveCart } />
  );
}

const mapStateToProps = (state) => {
  return {
    uniqItems: uniqBy(state.cartList.items, i => i.id),
    items: state.cartList.items
  }
}

export default connect(mapStateToProps, { clearCart, removeItemFromCart, toggleActiveCart })(HeaderCartContainer);

