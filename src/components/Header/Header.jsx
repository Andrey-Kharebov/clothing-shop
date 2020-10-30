import React from 'react';
import classes from './Header.module.css';
import halloween from '../assets/images/halloween.png';

function Header(props) {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h2>
          CLOTHING SHOP 
        </h2>
        <div>
          <img src={halloween} alt='logo' />
          
        </div>
      </div>
      <div className={classes.searchInput}>
        <input placeholder='Я ищу...'></input>
        <div className={classes.searchLoupe}>
          <i className='fas fa-search'></i>
        </div>
      </div>
      { props.items.length 
        ? <div className={classes.cartSection + ' ' + classes.active}>
            <i className="fas fa-shopping-cart"></i>
            <span>({props.items.length}) - {props.totalCost} руб.</span>
          </div>
        : <div className={classes.cartSection}>
            <i className="fas fa-shopping-cart"></i>
            <span>({props.items.length}) - {props.totalCost} руб.</span>
          </div>
      }
    </div>
  );
}

export default Header;