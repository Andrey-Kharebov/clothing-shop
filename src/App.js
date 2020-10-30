import React from 'react';
import classes from './App.module.css';
import ClothesSection from './components/ClothesSection/ClothesSection';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className={classes.container}>
      <Header />
      <ClothesSection />
    </div>
  );
}

export default App;

