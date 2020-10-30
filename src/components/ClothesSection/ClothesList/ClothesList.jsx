import React from 'react';
import ClothesItem from './ClothesItem/ClothesItem';
import classes from './ClothesList.module.css';

function ClothesList(props) {
  return (
    <div className={classes.clothesList}>
      <ul>
        { !props.clothes 
          ? 'Loading...'
          : props.clothes.map(item => {
            return (
              <li key={ item.id }>
                <ClothesItem item={ item } />
              </li>
            )
        })}
      </ul>
    </div>
  )
}

export default ClothesList
