import React from 'react';
import { Castles, Cities, Touristplaces, Brand, Featureone, Story, Squares } from './components';
import { Blog, Features, Updates, Header, Bar } from './containers';
import './App.css';

const App=() => {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Bar />
      <Brand />
      <Header />
    </div>
    <Featureone />
    <Touristplaces />
    <Blog />
    <Features />
    <Cities />
    <Updates />
    <Castles />
    </div>
  )
}

export default App;
