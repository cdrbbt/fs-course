import React from 'react';
import ReactDOM from 'react-dom';

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

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => <Course course={course} key={course.id}/>)}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


