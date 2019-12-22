import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
        {props.parts.map((part) => <p>{part.name}</p>)}
    </>
  );
}

const Total = (props) => {
  let total = 0;
  
  props.parts.forEach(part => {
    total += part.exercises;
  });

  return (
    <>
      <p>{total}</p>
    </>  
    )  
}

ReactDOM.render(<App />, document.getElementById('root'))
