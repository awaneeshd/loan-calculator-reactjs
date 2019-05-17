import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import LoanCalculator from'./loan-calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoanCalculator />
      </header>
    </div>
  );
}

export default App;
