import React from 'react';
import './Calculator.css';

function Calculator() {
  return ( 
    <div className="container_calc">
      <div className="buttons">
        <button className="button_calc">0</button>
        <button className="button_calc">1</button>
        <button className="button_calc">2</button>
        <button className="button_calc">3</button>
        <button className="button_calc">4</button>
        <button className="button_calc">5</button>
        <button className="button_calc">6</button>
        <button className="button_calc">7</button>
        <button className="button_calc">8</button>
        <button className="button_calc">9</button>
        <button className="button_calc">/</button>
        <button className="button_calc">X</button>
        <button className="button_calc">-</button>
        <button className="button_calc">+</button>
        <button className="button_calc">=</button>
        <button className="button_calc">.</button>
        <button className="button_calc">C</button>
      </div>
    </div>
  );
}
 
export default Calculator;