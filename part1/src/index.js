import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
        {props.course.parts.map((part) => <p>{part.name}</p>)}
    </>
  );
}

const Total = (props) => {
  let total = 0;
  
  props.course.parts.forEach(part => {
    total += part.exercises;
  });

  return (
    <>
      <p>{total}</p>
    </>  
    )  
}

ReactDOM.render(<App />, document.getElementById('root'))
