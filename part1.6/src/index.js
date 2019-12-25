import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = ({good, neutral, bad, text}) => {
  let sum = good + neutral + bad
  let average = good - bad / (good + neutral + bad)
  let positive = good / (neutral + bad + good) * 100

  return (
    <>
    <p>Sum {sum}</p>
    <p>Average {average}</p>
    <p>positive {positive}</p>
    </>
  )
}
    

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = [good, neutral, bad]
console.log(feedback)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics feedback={feedback} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)