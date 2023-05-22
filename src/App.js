import React, { useState } from 'react';
import Display from './Components /Display';
import Keypad from './Components /Keypad';

function  App() {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleNumberClick = (number) => {
    setInputValue(inputValue + number);
  };

  const handleOperatorClick = (operator) => {
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(inputValue.slice(-1))) {
      setInputValue(inputValue.slice(0, -1) + operator);
    } else {
      setInputValue(inputValue + operator);
    }
  };

  const handleDecimalClick = () => {
    if (!inputValue.includes('.')) {
      setInputValue(inputValue + '.');
    }
  };

  const handleClearClick = () => {
    setInputValue('');
    setResult(0);
  };

  const handleEqualsClick = () => {
    try {
      setResult(eval(inputValue));
      setInputValue(eval(inputValue).toString());
    } catch (error) {
      setResult(0);
      setInputValue('');
    }
  };

  const handleSqrtClick = () => {
    if (inputValue) {
      setResult(Math.sqrt(parseFloat(inputValue)));
      setInputValue(Math.sqrt(parseFloat(inputValue)).toString());
    }
  };

  return (
    <div className="calculator">
      <Display inputValue={inputValue} result={result} />
      <Keypad
        handleNumberClick={handleNumberClick}
        handleOperatorClick={handleOperatorClick}
        handleDecimalClick={handleDecimalClick}
        handleClearClick={handleClearClick}
        handleEqualsClick={handleEqualsClick}
        handleSqrtClick={handleSqrtClick}
        />

     </div>
  );
}
  export default App;