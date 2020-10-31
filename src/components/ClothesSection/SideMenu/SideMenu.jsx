import React from 'react'
import classes from './SideMenu.module.css';

function SideMenu(props) {
  const changeActiveSortBy = (name) => {
    props.setActiveSortBy(name)
  }

  return (
    <div className={classes.sideMenu}>
      <span>Сортировать по:</span>
      <ul>
        <li>
          <label className={classes.inputContainer}>
            <input type="radio" name="all" checked={props.activeSortBy === 'all'} onChange={() => {changeActiveSortBy('all')}} /> Все
            <span className={classes.checkmark}></span>
          </label>
        </li>
        <li>
          <label className={classes.inputContainer}>
            <input type="radio" name="priceUp" checked={props.activeSortBy === 'priceUp'} onChange={() => {changeActiveSortBy('priceUp')}} /> Цене (дорогие)
            <span className={classes.checkmark}></span>
          </label>
        </li>
        <li>
          <label className={classes.inputContainer}>
            <input type="radio" name="priceLow" checked={props.activeSortBy === 'priceLow'} onChange={() => {changeActiveSortBy('priceLow')}} /> Цене (дешевые)
            <span className={classes.checkmark}></span>
          </label>
        </li>
        <li>
          <label className={classes.inputContainer}>
            <input type="radio" name="brand" checked={props.activeSortBy === 'brand'} onChange={() => {changeActiveSortBy('brand')}} /> Бренду
            <span className={classes.checkmark}></span>
          </label>
        </li>
        <li>
          <label className={classes.inputContainer}>
            <input type="radio" name="category" checked={props.activeSortBy === 'category'} onChange={() => {changeActiveSortBy('category')}} /> Категории
            <span className={classes.checkmark}></span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu
