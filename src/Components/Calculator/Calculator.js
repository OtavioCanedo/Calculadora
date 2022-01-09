import React from 'react';
import './Calculator.css';

function Calculator() {
  return ( 
    <div className="container">
      <button class="button_calc">7</button>
      <button class="button_calc">8</button>
      <button class="button_calc">9</button>
      <button class="button_calc">X</button>
      <button class="button_calc">4</button>
      <button class="button_calc">5</button>
      <button class="button_calc">6</button>
      <button class="button_calc">-</button>
      <button class="button_calc">1</button>
      <button class="button_calc">2</button>
      <button class="button_calc">3</button>
      <button class="button_calc">+</button>
      <button class="button_calc">0</button>
      <button class="button_calc"> </button>
      <button class="button_calc">=</button>
    </div>
  );
}
 
export default Calculator;