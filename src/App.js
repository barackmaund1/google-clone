import React from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    // BEM
    <div className="app">
       <h1>Hey Clever Programmer,let build google clone 🚀 </h1>
      {/* Home (the one with the search on)*/}
        <Home/>
      {/*Search (The result page)*/ }
    </div>
  );
}

export default App;
