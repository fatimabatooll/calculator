import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState('')
  // createDigits generates digits for calculator
    const createDigits = () => {
      const digits  = [];
      for (let i = 1; i < 10; i++){
        digits.push(
      <button key={i} onClick={() => handleClick(i)}>{i}</button>
       )
      }
      digits.push(
        <button key='.' onClick={() => handleClick(0)}>0</button>
      )
      digits.push(
        <button key=',' onClick={() => handleClick()}>,</button>
      )
      digits.push(
        <button key='=' onClick={() => handleClick()}>=</button>
      )
      return digits;
    }
    //updates the expression
    const handleClick = (value) => {
         setNumber(number + value);
    }
  return (
    <div className="App">
     <div className='calculator'>
     <div className='display-number'>
      <span>(0)</span>0
      <div className='operators'>
      <button>/</button>
      <button>*</button>
      <button>-</button>
      <button>+</button>
      <button>%</button>

      <button>Del</button>

      </div>
      <div className='digits'>
      {createDigits()}
      </div>
     </div>
       
     </div>
    </div>
  );
}

export default App;
