import './App.css';
//import React from 'react';
// import counter from './component/counter';
import { Counter } from './component/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p className="App-intro">
        To Simple Counter code work that increment by 3 and decrement by 2  because why not 😉
      </p>
      <Counter />
      </header>
    </div>
  );
}

export default App;
