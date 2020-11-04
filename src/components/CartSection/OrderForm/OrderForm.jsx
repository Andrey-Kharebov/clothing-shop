import React from 'react'
import classes from './OrderForm.module.css'
import masterCard from '../../assets/images/masterCard.png';

function OrderForm(props) {
  return (
    <div className={classes.clientInfo}>
      <div className={classes.detailsCard}>
        <h2>Address details</h2>
        <form>
          <div className={classes.clientContacts}>
            <label>Full name<input type='text' value='Mr. Anderson'></input></label>
            <label>Phone number<input type='text' value='+1 234 567 88 99'></input></label>
            <label>Email address<input type='text' value='jennifer@norton.com'></input></label> 
          </div>
          <div className={classes.clientAddress}> 
            <div className={classes.stateAndCity}>
              <label>State<input type='text' value='Ontario'></input></label>
              <label>City<input type='text' value='Ottawa'></input></label>
            </div>
            <label>Address<input type='text' value='5345 Conatek Road, Suite 5'></input></label> 
          </div>
        </form>
      </div>
      <div className={classes.detailsCard}>
        <h2>Card details</h2>

        <form>
          <div className={classes.cardView}>
            <div className={classes.masterCardImg}>
              <img src={masterCard} alt="masterCardLogo"/>
            </div>
            <div className={classes.cardNumber}>
              1122 3344 5566 7788
            </div>
            <div>
              <div></div>
              <div className={classes.cardViewInfo}>
                <div>Jennifer Norton</div>
                <div>11/12</div>
              </div>
            </div>
          </div>
          <div className={classes.cardInfo}> 
              <label>Name on card<input type='text' value='Jennifer Norton'></input></label>
              <label>Card number<input type='text' value='1122 3344 5566 7788'></input></label>
            <div className={classes.expDataAndCvv}>
              <label>Month<input type='text' value='mm'></input></label> 
              <label>Year<input type='text' value='yyyy'></input></label>
              <label>CVV<input type='text' value='x x x'></input></label> 
            </div>
          </div>
          <div className={classes.buy}>
            <button>Оплатить</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OrderForm;
