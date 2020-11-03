import React from 'react';
import { Route } from 'react-router-dom';
import classes from './App.module.css';
import CartSectionContainer from './components/CartSection/CartSectionContainer';
import ClothesSection from './components/ClothesSection/ClothesSection';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <div className={classes.container}>
      <HeaderContainer />
        <div>
          <Route exact path='/' render={() => <ClothesSection /> } />
          <Route path='/cart' render={() => <CartSectionContainer /> } />
        </div>
    </div>
  );
}

export default App;

