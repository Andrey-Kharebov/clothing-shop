import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './HeaderCart.module.css';

function HeaderCart(props) {
  return (
    <div className={classes.headerCart}>
      
      {props.uniqItems.map(item => {
        let itemCount = 0;
        
        props.items.forEach(element => {
          if (element.id === item.id) {
            itemCount++;
          }
        });

        return (
          <div key={item.id} className={classes.headerCartItem}>
            <div>
              <img src={item.image} alt="headerCartImg"/>
            </div>
            <div className={classes.brandAndTitle}>
              {item.brand} / {item.title} / {itemCount } шт.
            </div>
            <div className={classes.removeItemsButton}>
              <button onClick={() => {props.removeItemFromCart(item.id)}}>Удалить</button>
            </div>
          </div>
        )
      })}
      <div className={classes.headerCartOptions}>
        <NavLink to={'/cart'}>
          <button className={classes.makeAnOrder} onClick={() => {props.toggleActiveCart()}}>Оформить заказ</button>
        </NavLink>
        <button className={classes.clearCart} onClick={() => {props.clearCart()}}>Очистить корзину</button>
      </div>
      <div className={classes.closeHaeaderCart}>
        <i className="far fa-times-circle" onClick={() => {props.toggleActiveCart()}}></i>
      </div>
    </div>
  );
}

export default HeaderCart;