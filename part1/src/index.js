import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content1 = {part: part1, exercises: exercises1};
  const content2 = {part: part2, exercises: exercises2};
  const content3 = {part: part3, exercises: exercises3};

  const content = [content1, content2, content3];

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
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
    
    const parts = props.content.map((content) =>
    <p>{content.part}</p>
  );
    return (
        <>
        <p>{parts}</p>
        </>
    );
}

const Total = (props) => {
    return (
        <>
        <p>{props.content[0].exercises + props.content[1].exercises + props.content[2].exercises}</p>
        </>  
    )  
}

ReactDOM.render(<App />, document.getElementById('root'))
