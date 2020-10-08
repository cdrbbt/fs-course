import React from 'react'
import Person from './Person'

const PersonList = ({persons, deletePerson}) => {
  return (
    <div>
      <h2>Persons</h2>
      <table>
        <tbody>
          {persons.map(person => <Person person={person} key={person.name} deletePerson={deletePerson}/>)}
        </tbody>
      </table>
    </div>

  )
}

export default PersonList
