import React from 'react'
import { connect } from 'react-redux'
import { setSearchQuery } from '../../redux/reducers/filter-reducer'
import priceSpacing from '../Helpers/priceSpacing'
import Header from './Header'


const HeaderContainer = (props) => {
  const totalCost = priceSpacing(props.totalCost);
  return (
    <Header items={ props.items } totalCost={ totalCost } searchQuery={ props.searchQuery } setSearchQuery={ props.setSearchQuery } />
  )
}

const thisStateToProps = (state) => {
  return {
    items: state.cartList.items,
    totalCost: state.cartList.items.reduce((total, item) => total + item.price, 0),
    searchQuery: state.filter.searchQuery
  }
}


export default connect(thisStateToProps, { setSearchQuery })(HeaderContainer)
