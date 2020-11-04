import React from 'react'
import classes from './CartSection.module.css'
import OrderInfo from './OrderInfo/OrderInfo';
import OrderForm from './OrderForm/OrderForm';

function CartSection(props) {
  return (
    <div className={classes.cartSection}>
      <OrderInfo {...props} />
      <OrderForm />
    </div>
  )
}

export default CartSection
