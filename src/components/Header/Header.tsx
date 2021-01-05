import React from 'react';
import classes from './Header.module.css';
import halloween from '../assets/images/halloween.png';
import HeaderCartContainer from './HeaderCart/HeaderCartContainer';
import { NavLink } from 'react-router-dom';

// TypeScripts imports
import { ItemType } from '../../types/types';

type PropsType = {
  items: Array<ItemType>,
  totalCost: number,
  searchQuery: string,
  activeCart: boolean,

  setSearchQuery: (a: string) => void,
  toggleActiveCart: () => void
}

type OnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => void;

const Header: React.FC<PropsType> = ({items, totalCost, searchQuery, activeCart, setSearchQuery, toggleActiveCart }) => {
  const onChangeInput: OnChangeInput = (event) => {
    setSearchQuery(event.target.value)
  }
  
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <NavLink to={'/'}><h2>CLOTHING SHOP</h2></NavLink>
        <div>
          <img src={halloween} alt='logo' />     
        </div>
      </div>
      <div className={classes.searchInput}>
        <input placeholder='Я ищу...' onFocus={(event) => {event.target.placeholder = ''}} onChange={(event) => {onChangeInput(event)}} value={ searchQuery } />
        <div className={classes.searchLoupe}>
          <i className='fas fa-search'></i>
        </div>
      </div>
      { items.length
        ? <div className={classes.cartSection + ' ' + classes.active}>
            <i className="fas fa-shopping-cart" onClick={() => {toggleActiveCart()}}></i>
            <span onClick={() => {toggleActiveCart()}}>({items.length}) - {totalCost} руб.</span>
            { activeCart ? <HeaderCartContainer /> : '' }
          </div>
        : <div className={classes.cartSection}>
            <i className="fas fa-shopping-cart"></i>
            <span>({items.length}) - {totalCost} руб.</span>
          </div>
      }
    </div>
  );
}

export default Header;