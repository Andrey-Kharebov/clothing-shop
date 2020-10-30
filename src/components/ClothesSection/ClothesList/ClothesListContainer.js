import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setClothes } from '../../../redux/reducers/clothes-reducer';
import ClothesList from './ClothesList';


class ClothesListContainer extends React.Component {
  componentDidMount() {
    Axios.get('/clothes.json')
      .then(response => {
        this.props.setClothes(response.data)
      })
  }
  
  render() {
    return (
      <ClothesList clothes={ this.props.clothes } />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clothes: state.clothesList.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setClothes: (payload) => {
      dispatch(setClothes(payload))
    }
  }
}

;
export default connect(mapStateToProps, mapDispatchToProps)(ClothesListContainer);