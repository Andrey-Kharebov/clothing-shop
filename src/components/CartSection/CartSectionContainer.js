import { uniqBy } from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import { clearCart, removeItemFromCart } from '../../redux/reducers/cart-reducer';
import CartSection from './CartSection';

function CartSectionContainer(props) {
  return (
    <CartSection uniqItems={ props.uniqItems } items={ props.items } clearCart={ props.clearCart } removeItemFromCart={ props.removeItemFromCart } totalCost={ props.totalCost } />
  )
}

const mapStateToProps = (state) => {
  return {
    uniqItems: uniqBy(state.cartList.items, i => i.id),
    items: state.cartList.items,
    totalCost: state.cartList.items.reduce((total, item) => total + item.price, 0) 
  }
}


export default connect(mapStateToProps, {clearCart, removeItemFromCart})(CartSectionContainer)

