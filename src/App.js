import React from 'react';
import classes from './App.module.css';
import ClothesSection from './components/ClothesSection/ClothesSection';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <div className={classes.container}>
      <HeaderContainer />
      <ClothesSection />
    </div>
  );
}

export default App;

