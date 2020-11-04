import React from 'react'
import classes from './OrderForm.module.css'
import masterCard from '../../assets/images/masterCard.png';
import { Field, reset, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { uniqBy } from 'lodash';
import { clearCart } from '../../../redux/reducers/cart-reducer';

function OrderForm(props) {
  const onSubmit = (formData, dispatch) => {
    console.log(formData);
    props.clearCart();
    dispatch(reset('order'));
  }


  return (
    <div className={classes.clientInfo}>
      <OrderReduxForm onSubmit={ onSubmit } {...props} />
    </div>
  )
}

let OrderReduxForm = reduxForm({
  form: 'order'
})(OrderFormBody)


function OrderFormBody(props) {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div className={classes.detailsCard}>
        <h2>Address details</h2>

        <div className={classes.clientContacts}>
          <label>Имя<Field name={'name'} component={'input'}></Field></label>
          <label>Номер телефона<Field name={'phoneNumber'} component={'input'}></Field></label>
          <label>Email<Field name={'email'} component={'input'}></Field></label> 
        </div>
        <div className={classes.clientAddress}> 
          <div className={classes.stateAndCity}>
            <label>Страна<Field name={'state'} component={'input'}></Field></label> 
            <label>Город<Field name={'city'} component={'input'}></Field></label>
          </div>
          <label>Адрес<Field name={'address'} component={'input'}></Field></label>
        </div>
      </div>
      <div className={classes.detailsCard}>
        <h2>Card details</h2>

        <div className={classes.cardView}>
          <div className={classes.masterCardImg}>
            <img src={masterCard} alt="masterCardLogo"/>
          </div>
          <div className={classes.cardNumber}>
            {props.cardValues && props.cardValues.cardNumber ? props.cardValues.cardNumber : '1122 3344 5566 7788'}
          </div>
          <div>
            <div></div>
            <div className={classes.cardViewInfo}>
              <div>{props.cardValues && props.cardValues.nameOnCard ? props.cardValues.nameOnCard : 'Mr. Anderson'}</div>
              <div>{props.cardValues && props.cardValues.month ? props.cardValues.month : '03'}/{props.cardValues && props.cardValues.year ? props.cardValues.year : '99'}</div>
            </div>
          </div>
        </div>
        <div className={classes.cardInfo}>
          <label>Имя на карте<Field name={'nameOnCard'} component={'input'} value={'Leeroy Jenkins'}></Field></label>
          <label>Номер карты<Field name={'cardNumber'} component={'input'}></Field></label>
          <div className={classes.expDataAndCvv}>
            <label>Месяц<Field name={'month'} component={'input'}></Field></label>
            <label>Год<Field name={'year'} component={'input'}></Field></label>
            <label>CVV<Field name={'cvv'} component={'input'}></Field></label>
          </div>
        </div>
        <div className={classes.buy}>
          <button>Оплатить</button>
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    cardValues: state.form.order ? state.form.order.values : null,
    uniqItems: uniqBy(state.cartList.items, i => i.id),
    items: state.cartList.items,
    totalCost: state.cartList.items.reduce((total, item) => total + item.price, 0) 
  }
}

export default connect(mapStateToProps, { clearCart })(OrderForm);

