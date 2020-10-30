import React from 'react';
import priceSpacing from '../../../Helpers/priceSpacing';
import classes from './ClothesItem.module.css';

function ClothesItem({item, ...other}) {
  
  const price = priceSpacing(item.price);

  const addToCart = (payload) => {
    other.addItemToCart(payload)
  }

  return (
    <div className={classes.clothesItem}>
      <div>
        <img src={item.image} alt='img'></img>
      </div>
      <div className={classes.brandAndTitle}>
        {item.brand} / {item.title}
      </div>
      <div className={classes.priceAndButton}>
        <div className={classes.price}>
          {price} <i className="fas fa-ruble-sign"></i>
        </div>
        <div>
          <button onClick={() => {addToCart(item)}}>В корзину</button>
          <div className={classes.hint}>
            <p>Добавить в корзину</p>
            <div className={classes.boxForHint}></div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default ClothesItem

