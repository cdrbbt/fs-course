import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(part => 
        <Part key={part.id} part={part}/>
      )}
    </div>
  )
}

const Part = (props) => (
  <p>{props.part.name} {props.part.exercises}</p>
)

// const Total = (props) => {
//   let exercises = 0
//   props.course.parts.forEach(element => {
//     exercises += element.exercises
//   });
//   return (
//     <div>
//       <p>Number of exercises {exercises}</p>
//     </div>
//   )
// }

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


