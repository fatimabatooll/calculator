import logo from './logo.svg';
import './App.css';

function App() {
    
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

      <button>Del</button>

      </div>
      <div className='digits'>
      <button>0</button>
      <button>.</button>
      <button>=</button>
       
      </div>
     </div>
       
     </div>
    </div>
  );
}

export default App;
