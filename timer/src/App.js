import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const inputHandler = (e) => {
    setCounter(e.target.value);
  }


  const startTimer = () => {
    clearInterval(intervalId)
    const newIntervalId = setInterval(() => {
      setCounter(prev => {
        if (prev === 0) {
          clearInterval(intervalId)
          return 0;
        }
        else {
          return prev - 1;
        }
      })
    }, 1000);
    setIntervalId(newIntervalId)
  }

  const stopTimer = () => {
    clearInterval(intervalId)
  }
  return (
    <div>
      <h1>Timer</h1>
      <input onChange={inputHandler} type='number' value={counter} />
      <Button btnText="start" btnHandler={startTimer} />
      <Button btnText="stop" btnHandler={stopTimer} />
    </div>
  );
}

export default App;
