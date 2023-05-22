import React from 'react';
import Button from './Button';

function Keypad(props) {
  const { handleNumberClick, handleOperatorClick, handleDecimalClick, handleClearClick, handleEqualsClick, handleSqrtClick } = props;
  
  return (
    <div className="keys">
      <Button onClick={() => handleNumberClick(7)} label="7" />
      <Button onClick={() => handleNumberClick(8)} label="8" />
      <Button onClick={() => handleNumberClick(9)} label="9" />
      <Button onClick={() => handleOperatorClick('/')} label="/" />
      <Button onClick={() => handleSqrtClick()} label="sqrt" />

      <Button onClick={() => handleNumberClick(4)} label="4" />
      <Button onClick={() => handleNumberClick(5)} label="5" />
      <Button onClick={() => handleNumberClick(6)} label="6" />
      <Button onClick={() => handleOperatorClick('*')} label="*" />
      <Button onClick={() => handleOperatorClick('^')} label="^" />

      <Button onClick={() => handleNumberClick(1)} label="1" />
      <Button onClick={() => handleNumberClick(2)} label="2" />
      <Button onClick={() => handleNumberClick(3)} label="3" />
      <Button onClick={() => handleOperatorClick('-')} label="-" />
      <Button onClick={() => handleOperatorClick('%')} label="%" />

      <Button onClick={() => handleDecimalClick()} label="." />
      <Button onClick={() => handleNumberClick(0)} label="0" />
      <Button onClick={() => handleEqualsClick()} label="=" />
      <Button onClick={() => handleOperatorClick('+')} label="+" />
      <Button onClick={() => handleClearClick()} label="C" />
    </div>
  );
}

export default Keypad;
