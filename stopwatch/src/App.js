import "./App.css";
import Button from "./components/Button";
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const increment = () => {
    clearInterval(intervalId) //clearing the previous interval before adding new interval
    const newIntervalId = setInterval(() => {
      setCounter((prev) => prev + 1)
    }, 1000);
    setIntervalId(newIntervalId)
  }
  const decrement = () => {
    clearInterval(intervalId);
  }

  return (
    <div>
      <h1>Stopwatch Timer</h1>
      <h1>{counter}</h1>
      <Button btnText="start" btnHandler={increment} />
      <Button btnText="stop" btnHandler={decrement} />
    </div>
  );
}

export default App;

//  when we click continuously on start, multiple intervals are getting added to the browser
//  and these multiple intervals are changing the same state bcs of which state behaves weiredly.
