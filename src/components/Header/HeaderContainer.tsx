import React from 'react'
import { connect } from 'react-redux';

// Could not find a declaration file for module 'react-redux'
// Salvation: npm install --save-dev @types/react-redux

import { toggleActiveCart } from '../../redux/reducers/cart-reducer'
import { setSearchQuery } from '../../redux/reducers/filter-reducer'
import priceSpacing from '../Helpers/priceSpacing'
import Header from './Header'

// TypeScripts imports
import { ItemType } from '../../types/types';
import { AppStateType } from '../../redux/store';

type ParentPropsType = {
}

type MapStatePropsType = {
  activeCart: boolean,
  items: Array<ItemType>,
  searchQuery: string,
  totalCost: number
}

type MapDispatchPropsType = {
  setSearchQuery: (a: string) => any,
  toggleActiveCart: () => void
}

type UnitedPropsType = ParentPropsType & MapStatePropsType & MapDispatchPropsType;

const HeaderContainer: React.FC<UnitedPropsType> = ({activeCart, items, searchQuery, setSearchQuery, toggleActiveCart, totalCost}) => {
  
  const spacedTotalCost = priceSpacing(totalCost);
  return (
    <Header 
      items={ items } 
      totalCost={ spacedTotalCost } 
      searchQuery={ searchQuery } 
      setSearchQuery={ setSearchQuery } 
      activeCart={ activeCart } 
      toggleActiveCart={ toggleActiveCart } 
    />
  )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    items: state.cartList.items,
    totalCost: state.cartList.items.reduce((total: number, item: ItemType) => total + item.price, 0),
    searchQuery: state.filter.searchQuery,
    activeCart: state.cartList.activeCart
  }
}



export default connect<MapStatePropsType, MapDispatchPropsType, ParentPropsType, AppStateType>(
  mapStateToProps, { setSearchQuery, toggleActiveCart }
)(HeaderContainer)
