import React from 'react'
import classes from './SideMenu.module.css';

function SideMenu() {
  return (
    <div className={classes.sideMenu}>
      <span>Сортировать по:</span>
      <ul>
        <li>
          <label className={classes.inputContainer}>
            <input type="radio" name="radio" /> Все
            <span className={classes.checkmark}></span>
          </label>
        </li>
        <li>
          <label className={classes.inputContainer}>
            <input type="radio" name="radio" /> Цене (дорогие)
            <span className={classes.checkmark}></span>
          </label>
        </li>
        <li>
          <label className={classes.inputContainer}>
            <input type="radio" name="radio" /> Цене (дешевые)
            <span className={classes.checkmark}></span>
          </label>
        </li>
        <li>
          <label className={classes.inputContainer}>
            <input type="radio" name="radio" /> Бренду
            <span className={classes.checkmark}></span>
          </label>
        </li>
        <li>
          <label className={classes.inputContainer}>
            <input type="radio" name="radio" /> Категории
            <span className={classes.checkmark}></span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu
