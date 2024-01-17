import "./App.css";
import Button from "./components/Button";
import { useState } from 'react';

function App() {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);
  const [intervalIdTwo, setIntervalIdTwo] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const increment = () => {
    clearInterval(intervalId) //clearing the previous interval before adding new interval
    const newIntervalId = setInterval(() => {
      setcounterOne((prev) => prev + 1)
    }, 1000);
    setIntervalId(newIntervalId)
  }
  const decrement = () => {
    clearInterval(intervalId);
  }

  const startTimer = () => {
    setIsTimerOn(true);
    clearInterval(intervalIdTwo);
    const intervalId = setInterval(() => {
      setcounterTwo(prev => prev + 1);
    }, 1000);
    setIntervalIdTwo(intervalId)
  }

  const stopTimer = () => {
    clearInterval(intervalIdTwo)
    setIsTimerOn(false)
  }

  const resetTimer = () => {
    clearInterval(intervalIdTwo)
    setIsTimerOn(false)
    setcounterTwo(0)
  }

  return (
    <div>
      <h1>Stopwatch Timer</h1>
      <h1>{counterOne}</h1>
      <Button btnText="start" btnHandler={increment} />
      <Button btnText="stop" btnHandler={decrement} />
      <h1>Stopwatch Timer with reset</h1>
      <h1>{counterTwo}</h1>
      {isTimerOn ? <Button btnText="stop" btnHandler={stopTimer} /> : <Button btnText="start" btnHandler={startTimer} />}
      <Button btnText="reset" btnHandler={resetTimer} />
    </div>
  );
}

export default App;

//  when we click continuously on start, multiple intervals are getting added to the browser
//  and these multiple intervals are changing the same state bcs of which state behaves weiredly.
