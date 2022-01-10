import React from 'react';
import './Calculator.css';

function Calculator() {
  return ( 
    <div className="container_calc">
      <div className="buttons">
        <button className="button_num">7</button>
        <button className="button_num">8</button>
        <button className="button_num">9</button>
        <button className="button_op">/</button>
        <button className="button_num">4</button>
        <button className="button_num">5</button>
        <button className="button_num">6</button>
        <button className="button_op">X</button>
        <button className="button_num">1</button>
        <button className="button_num">2</button>
        <button className="button_num">3</button>
        <button className="button_op">-</button>
        <button className="button_clear">C</button>
        <button className="button_num">0</button>
        <button className="button_op">=</button>
        <button className="button_op">+</button>
        
      </div>
    </div>
  );
}
 
export default Calculator;