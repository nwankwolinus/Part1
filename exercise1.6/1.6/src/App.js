import React from 'react';
import { useState } from 'react'
import Header from './components/Header';


function App() {
//save click of each button to its own state
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const handleGoodClick = () => {
  setGood(good + 1)
  const updateGood=good + 1;
  console.log(updateGood);
}
const handleNeutralClick = () => {
  setNeutral(neutral + 1)
  const updateNeutral=neutral + 1;
  console.log(updateNeutral);
}
const handleBadClick = () => {
  setBad(bad + 1)
  const updateBad=bad + 1;
  console.log(updateBad);
}

  return (
    <div>
      <Header/>
      <button onClick = {handleGoodClick}>good</button>
      <button onClick = {handleNeutralClick}>neutral</button>
      <button onClick = {handleBadClick}>bad</button>

      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
}

export default App;
