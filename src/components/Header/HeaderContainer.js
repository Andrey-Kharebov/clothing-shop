import React from 'react'
import { connect } from 'react-redux'
import { toggleActiveCart } from '../../redux/reducers/cart-reducer'
import { setSearchQuery } from '../../redux/reducers/filter-reducer'
import priceSpacing from '../Helpers/priceSpacing'
import Header from './Header'


const HeaderContainer = (props) => {
  const totalCost = priceSpacing(props.totalCost);
  return (
    <Header items={ props.items } totalCost={ totalCost } searchQuery={ props.searchQuery } setSearchQuery={ props.setSearchQuery } activeCart={ props.activeCart } toggleActiveCart={ props.toggleActiveCart } />
  )
}

const thisStateToProps = (state) => {
  return {
    items: state.cartList.items,
    totalCost: state.cartList.items.reduce((total, item) => total + item.price, 0),
    searchQuery: state.filter.searchQuery,
    activeCart: state.cartList.activeCart
  }
}



export default connect(thisStateToProps, { setSearchQuery, toggleActiveCart })(HeaderContainer)

