import React from 'react';
import classes from './ClothesItem.module.css';

function ClothesItem({item}) {

  function priceWithSpace(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }  

  const price = priceWithSpace(item.price);

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
          <button>В корзину</button>
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

