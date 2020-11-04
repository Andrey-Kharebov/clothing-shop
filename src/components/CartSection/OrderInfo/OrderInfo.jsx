import React from 'react'
import priceSpacing from '../../Helpers/priceSpacing';
import classes from './OrderInfo.module.css'

function OrderInfo(props) {
  const totalCost = priceSpacing(props.totalCost);
  return (
    <div className={classes.orderInfo}>
      <h2>Shopping Cart</h2>

      <div className={classes.cartList}>
        {props.uniqItems.map(item => {
          let itemCount = 0;
          
          props.items.forEach(element => {
            if (element.id === item.id) {
              itemCount++;
            }
          });

          const itemPrice = priceSpacing(item.price);
          const totalItemPrice = priceSpacing(item.price * itemCount);

          return (
            <div key={item.id} className={classes.cartItem}>
              <div>
                <img src={item.image} alt="headerCartImg"/>
              </div>
              <div className={classes.itemInfo}>
                <div className={classes.brandAndTitle}>
                  {item.title} {item.brand} / {itemPrice} руб. / {itemCount } шт.
                </div>
                <div className={classes.totalItemPrice}>
                  <i className="fas fa-ruble-sign"></i> {totalItemPrice}
                </div>
              </div>
              <div className={classes.removeItemsButton}>
                <i className="far fa-times-circle" onClick={() => {props.removeItemFromCart(item.id)}}></i>
              </div>
            </div>
          )
        })}
      </div>
      <div className={classes.subTotal}>
        <div className={classes.subTotalTitle}>
          Итого:
        </div>
        <div className={classes.subTotalPrice}>
          <i className="fas fa-ruble-sign"></i> {totalCost}
        </div>
      </div>
    </div>
  )
}

export default OrderInfo; 
