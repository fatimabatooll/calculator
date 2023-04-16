import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState('')
  // createDigits generates digits for calculator
    const createDigits = () => {
      const digits  = [];
      for (let i = 1; i < 10; i++){
        digits.push(
      <button  key={i} onClick={() => handleClick(i)}>{i}</button>
       )
      }
      digits.push(
        <button   key='.' onClick={() => handleClick(0)}>0</button>
      )
      digits.push(
        <button  key='.' onClick={() => handleClick('.')}>.</button>
      )
      digits.push(
        <button  key='=' onClick={() => handleEquals()}>=</button>
      )
      return digits;
    }
    //updates the expression
    const handleClick = (value) => {
         setNumber(number + value);
    };
    // handle operator
    const handleOperator = (operator) => {
      if(number ==='')  return
        const lastNum = number.slice(-1);
        if(lastNum === '+' || lastNum === '-' || lastNum === '/' || lastNum === '*' || lastNum === '%'){
          setNumber(number.slice(0. -1) + operator);
        } else {
          setNumber(number + operator)
        }
    }
    const handleEquals = () =>{
      if(number === '') return;
      let result = '';
      try {
        result = eval(number);
      }catch (error){
        result = 'error'
      }
      setNumber(result.toString())
    }
  return (
    <div className="App">
     <div className='calculator'>
     <div className='display-number'>
      {number}
      <div className='operators'>
      <button  onClick={() => handleOperator('/')}>/</button>
      <button  onClick={() => handleOperator('*')}>*</button>
      <button  onClick={() => handleOperator('-')}>-</button>
      <button  onClick={() => handleOperator('+')}>+</button>
      <button  onClick={() => handleOperator('%')}>%</button>
      <button  onClick={() => setNumber(number.slice(0, -1))}>Del</button>

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
