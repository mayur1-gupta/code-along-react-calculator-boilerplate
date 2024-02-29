import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleValueClick = (value) => {
    setDisplay(display + value);
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleValueClick('1')}>1</button>
        <button onClick={() => handleValueClick('2')}>2</button>
        <button onClick={() => handleValueClick('3')}>3</button>
        <button onClick={() => handleValueClick('+')}>+</button>
        <button onClick={() => handleValueClick('4')}>4</button>
        <button onClick={() => handleValueClick('5')}>5</button>
        <button onClick={() => handleValueClick('6')}>6</button>
        <button onClick={() => handleValueClick('-')}>-</button>
        <button onClick={() => handleValueClick('7')}>7</button>
        <button onClick={() => handleValueClick('8')}>8</button>
        <button onClick={() => handleValueClick('9')}>9</button>
        <button onClick={() => handleValueClick('*')}>*</button>
        <button onClick={() => handleValueClick('0')}>0</button>
        <button onClick={() => handleValueClick('.')}>.</button>
        <button onClick={() => calculateResult()}>=</button>
        <button onClick={() => clearDisplay()}>C</button>
        <button onClick={() => handleValueClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
