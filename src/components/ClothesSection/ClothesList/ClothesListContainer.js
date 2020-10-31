import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setClothes } from '../../../redux/reducers/clothes-reducer';
import { addItemToCart } from '../../../redux/reducers/cart-reducer';
import ClothesList from './ClothesList';
import { orderBy } from 'lodash';



class ClothesListContainer extends React.Component {
  componentDidMount() {
    Axios.get('/clothes.json')
      .then(response => {
        this.props.setClothes(response.data)
      })
  }
  
  render() {
    return (
      <ClothesList clothes={ this.props.clothes } addItemToCart={ this.props.addItemToCart } />
    );
  }
}

const sortItemsBy = (items, sortBy) => {
  switch (sortBy) {
    case 'all':
      return items;
    case 'priceUp':
      return orderBy(items, 'price', 'desc');
    case 'priceLow':
      return orderBy(items, 'price', 'asc');
    case 'brand':
      return orderBy(items, 'brand', 'asc');
    case 'category':
      return orderBy(items, 'title', 'asc');
    default:
      return items;
  }
}

const filterItems = (items, searchQuery) => 
  items.filter(
    i => 
      i.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      i.brand.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  )


const searchItems = (items, sortBy, searchQuery) => {
  return sortItemsBy(filterItems(items, searchQuery), sortBy)
}

const mapStateToProps = (state) => {
  return {
    clothes: state.clothesList.items && searchItems(state.clothesList.items, state.filter.sortBy, state.filter.searchQuery)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setClothes: (payload) => {
      dispatch(setClothes(payload))
    },
    addItemToCart: (payload) => {
      dispatch(addItemToCart(payload))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ClothesListContainer);