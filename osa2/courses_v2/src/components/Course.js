import React from 'react'

const Header = ({course}) => {
    return (
      <>
        <h2>{course.name}</h2>
      </>
    )
  }

  const Part = ({part}) => {
    return (
    <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Content = ({course}) => {
    const rows = () => course.parts.map(part =>
        <Part 
          key={part.id}
          part={part}
        />
      )

    return (
      <div>
        {rows()}
      </div>
    );
  }
  
  const Total = ({course}) => {
    const total = 
    course.parts.map(part => part.exercises).reduce((accumulator, curval) => accumulator + curval)
  
    return (
      <>
        <p> total of {total} exercises</p>
      </>  
      )  
  }

  const Course = ({course}) => {
    return (
        <div>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      )
    }

export default Course