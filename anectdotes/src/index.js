import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
    <button onClick={props.handleClick}>{props.text}</button>
    )
}

const MostPoints = ({points, anecdotes}) => {
  let mostPoints = 0;

  for(let i = 0; i < anecdotes.length; i++) {
    if (points[mostPoints] < points[i]) {
      mostPoints = i
    }
  }

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostPoints]}</p>
    </>
  )
}

const Random = (selected, anecdotes) => {
  let random = Math.floor(Math.random() * anecdotes.length)
  while (random === selected) {
    random = Math.floor(Math.random() * anecdotes.length)
  }
  return random
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  let random = Random(selected, anecdotes)

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br></br>
      <Button handleClick={() => vote()} text="vote"/>
      <Button handleClick={() => setSelected(random)} text="next anecdote"/>
      <MostPoints points={points} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
