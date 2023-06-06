import React from 'react';
import { useState } from 'react'
import Header from './components/Header';

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return(
    <div>
      <table>
        <tbody><tr><td>{props.goodf}</td><td>{props.good}</td></tr></tbody>    
        <tbody><tr><td>{props.neuf}</td><td>{props.neutral}</td></tr></tbody> 
        <tbody><tr><td>{props.badf}</td><td>{props.bad}</td></tr></tbody>
        <tbody><tr><td>{props.allf}</td><td>{props.total}</td></tr></tbody>
        <tbody><tr><td>{props.avf}</td><td>{props.average}</td></tr></tbody>
        <tbody><tr><td>{props.posf}</td><td>{props.percposf}</td></tr></tbody>
      </table>
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

console.log(total);

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
      <Statistics 
        goodf="good" good={good}
        neuf="neutral" neutral={neutral}
        badf="bad" bad={bad}
        allf="all" total={total}
        avf="average" average={average}
        posf="positive" percposf={percentPos}
      />
    </div>
  );
}

export default App;
