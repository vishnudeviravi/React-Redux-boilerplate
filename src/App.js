import React from 'react';
import cheetah from './assets/cheetah.png';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="badboy3X">
        <img src={cheetah} />
        <h1>Badb<span className='o' >o</span>y3<span className='x' >X</span></h1>
      </header>
    </div>
  );
}

export default App;
