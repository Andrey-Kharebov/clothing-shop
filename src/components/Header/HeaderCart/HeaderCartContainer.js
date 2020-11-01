import React from 'react';
import { uniqBy } from 'lodash';
import { connect } from 'react-redux';
import HeaderCart from './HeaderCart';
import { clearCart, removeItemFromCart } from '../../../redux/reducers/cart-reducer';

function HeaderCartContainer(props) {
  return (
    <HeaderCart uniqItems={ props.uniqItems } items={ props.items } clearCart={ props.clearCart } removeItemFromCart={ props.removeItemFromCart } />
  );
}

const mapStateToProps = (state) => {
  return {
    uniqItems: uniqBy(state.cartList.items, i => i.id),
    items: state.cartList.items
  }
}

export default connect(mapStateToProps, { clearCart, removeItemFromCart })(HeaderCartContainer);

