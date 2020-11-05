import React from 'react'
import classes from './CartSection.module.css'
import OrderInfo from './OrderInfo/OrderInfo';
import OrderForm from './OrderForm/OrderForm';
import { Redirect } from 'react-router-dom';

function CartSection(props) {
  
  if (props.uniqItems.length === 0) {
    return <Redirect to='/' />
  }
  
  return (
    <div className={classes.cartSection}>
      <OrderInfo {...props} />
      <OrderForm />
    </div>
  )
}

export default CartSection
