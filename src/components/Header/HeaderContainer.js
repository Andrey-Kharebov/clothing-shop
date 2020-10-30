import React from 'react'
import { connect } from 'react-redux'
import priceSpacing from '../Helpers/priceSpacing'
import Header from './Header'

const HeaderContainer = (props) => {
  const totalCost = priceSpacing(props.totalCost);
  return (
    <Header items={ props.items } totalCost={ totalCost } />
  )
}

const thisStateToProps = (state) => {
  return {
    items: state.cartList.items,
    totalCost: state.cartList.totalCost
  }
}

export default connect(thisStateToProps, {})(HeaderContainer)
