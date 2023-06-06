import React from 'react';
import { useState } from 'react'
import Header from './components/Header';

const Statistics = (props) => {
  return(
    <div>
      <p>{props.desc} {props.value}</p>
    </div>
  )
}

function App() {
//save click of each button to its own state
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const [total, setTotal] = useState(0)

const handleGoodClick = () => {
  setGood(good + 1)
  const updateGood=good + 1;
  setTotal(updateGood+neutral+bad)
  console.log(updateGood);
}
const handleNeutralClick = () => {
  setNeutral(neutral + 1)
  const updateNeutral=neutral + 1;
  setTotal(good+updateNeutral+bad)
  console.log(updateNeutral);
}
const handleBadClick = () => {
  setBad(bad + 1)
  const updateBad=bad + 1;
  setTotal(good+neutral+updateBad)
  console.log(updateBad);
}

const average = total/3;
// eslint-disable-next-line no-useless-concat
const percentPos = (good/total)* 100 + " " + "%";

  return (
    <div>
      <Header/>
      <button onClick = {handleGoodClick}>good</button>
      <button onClick = {handleNeutralClick}>neutral</button>
      <button onClick = {handleBadClick}>bad</button>
      <h1>Statistics</h1>
      <Statistics desc="good" value={good}/>
      <Statistics desc="neutral" value={neutral}/>
      <Statistics desc="bad" value={bad}/>
      <Statistics desc="all" value={total}/>
      <Statistics desc="average" value={average}/>
      <Statistics desc="positive" value={percentPos}/>
    </div>
  );
}

export default App;
