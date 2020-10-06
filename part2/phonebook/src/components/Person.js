import React from 'react'

const Person = ({person, deletePerson}) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td><button onClick={deletePerson(person)}>remove</button></td>
    </tr>
  )
}

export default Person
