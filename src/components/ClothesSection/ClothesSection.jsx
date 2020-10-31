import React from 'react'
import classes from './ClothesSection.module.css';
import ClothesListContainer from './ClothesList/ClothesListContainer';
import SideMenuContainer from './SideMenu/SideMenuContainer';

function ClothesSection() {
  return (
    <div className={classes.clothesSection}>
      <SideMenuContainer />
      <ClothesListContainer />
    </div>
  )
}


export default ClothesSection
