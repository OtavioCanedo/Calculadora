import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState('');

  function inputNumber(e) {
    if (firstNumber === 0){
      setFirstNumber(e.target.value);
    }
    else {
      setFirstNumber(firstNumber + e.target.value);
    }
  }

  function clear() {
    setFirstNumber(0);
  }

  function operatorCalc(e) {
    setOperator(e.target.value);
    setSecondNumber(firstNumber);
    setFirstNumber(0);
  }
  
  function result() {
    if (operator === '/') {
      setFirstNumber(parseFloat(secondNumber) / parseFloat(firstNumber));
    }
    else if (operator === 'X') {
      setFirstNumber(parseFloat(secondNumber) * parseFloat(firstNumber));
    } 
    else if (operator === '-') {
      setFirstNumber(parseFloat(secondNumber) - parseFloat(firstNumber));
    }
    else if (operator === '+') {
      setFirstNumber(parseFloat(secondNumber) + parseFloat(firstNumber));
    }
  }

  return ( 
    <div className="container_calc">
      <h1 className="num">{firstNumber}</h1>
        <button className="button_clear" onClick={clear}>C</button>
        <button className="button_hidden">()</button> 
        <button className="button_hidden">%</button>
        <button className="button_op" onClick={operatorCalc} value="/">/</button>
        <button className="button_num" onClick={inputNumber} value={7}>7</button>
        <button className="button_num" onClick={inputNumber} value={8}>8</button>
        <button className="button_num" onClick={inputNumber} value={9}>9</button>
        <button className="button_op" onClick={operatorCalc} value="X">X</button>
        <button className="button_num" onClick={inputNumber} value={4}>4</button>
        <button className="button_num" onClick={inputNumber} value={5}>5</button>
        <button className="button_num" onClick={inputNumber} value={6}>6</button>
        <button className="button_op" onClick={operatorCalc} value="-">-</button>
        <button className="button_num" onClick={inputNumber} value={1}>1</button>
        <button className="button_num" onClick={inputNumber} value={2}>2</button>
        <button className="button_num" onClick={inputNumber} value={3}>3</button>
        <button className="button_op" onClick={operatorCalc} value="+">+</button>
        <button className="button_hidden">+/-</button>
        <button className="button_num" onClick={inputNumber} value={0}>0</button>
        <button className="button_hidden">.</button>
        <button className="button_op" onClick={result}>=</button>
    </div>
  );
}
 
export default Calculator;