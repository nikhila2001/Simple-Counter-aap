// importing useState into our component
import {react, useState} from 'react'

// intializing useState into our finction component
function App() {
  const [counter, setCounter] = useState(0); // counter, is current state. setCounter, is update state
  // intial state set to zero.


// increase counter
 const increase = () => {
  setCounter(count => count + 1);
 };

 // decrease counter
  const decrease = () => {
    if(counter > 0) {
      setCounter(count => count - 1);
    }
    
  };

  // reset counter
  const reset = () => {
    setCounter(0);
  }

  return(
    <div className='counter'>
      <h1>React Counter</h1>

      <span className="counter_output">{counter}</span>
      <div className="btn-container">
        <button className="control-btn" onClick={increase}>+</button>
        <button className="control-btn" onClick={decrease}>-</button>
        <button className="control-btn" onClick={reset}>Reset</button>
      </div>
      
    
    </div>
  );
}

export default App;
