import React from 'react'
import classes from './ClothesSection.module.css';
import ClothesListContainer from './ClothesList/ClothesListContainer';
import SideMenu from './SideMenu/SideMenu';

function ClothesSection() {
  return (
    <div className={classes.clothesSection}>
      <SideMenu />
      <ClothesListContainer />
    </div>
  )
}

export default ClothesSection
