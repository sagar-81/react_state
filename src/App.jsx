import { useState } from 'react'
import './App.css'
import LikeButton from './component/LikeButton';
import Lottery from './component/Lottery';
import MultipleForms from './component/Multiple';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevVal) => {
      return prevVal + 1;
    });
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      {/* <h1>{count}</h1>
      <div><button onClick={increment}>Add</button> <button onClick={decrement}>Sub</button></div> */}

      <MultipleForms />
    </>
  )
}

export default App
