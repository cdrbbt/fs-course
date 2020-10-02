import React from 'react'

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}
const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Part = (props) => (
  <p>{props.part.name} {props.part.exercises}</p>
)

const Total = ({ course }) => {
  let exercises = course.parts.reduce((acc, part) => acc += part.exercises, 0)
  return (
    <div>
      <p>Total number of exercises {exercises}</p>
    </div>
  )
}

export default Course
