import React from 'react'
import { connect } from 'react-redux';
import { setSortBy } from '../../../redux/reducers/filter-reducer';
import SideMenu from './SideMenu';

function SideMenuContainer(props) {
  return (
    <SideMenu activeSortBy={ props.activeSortBy } setActiveSortBy={ props.setSortBy } />
  )
}

const mapStateToProps = (state) => {
  return {
    activeSortBy: state.filter.sortBy
  }
}

export default connect(mapStateToProps, { setSortBy })(SideMenuContainer)
