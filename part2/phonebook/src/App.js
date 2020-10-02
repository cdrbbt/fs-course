import React, { useState } from 'react'

import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import PersonList from './components/PersonList'

const defaultPerson = { name: '', number: '' }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newPerson, setNewPerson] = useState(defaultPerson)
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newPerson.name)) {
      alert(`${newPerson.name} is arealdy added to the phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewPerson(defaultPerson)
    }
  }

  const nameChange = (event) => setNewPerson({ ...newPerson, name: event.target.value })
  const numberChange = (event) => setNewPerson({ ...newPerson, number: event.target.value })
  const filterChange = (event) => setFilter(event.target.value)
  const fileteredList = persons.filter((person) => person.name.toLowerCase().includes(filter.toLocaleLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        filter={filter}
        filterChange={filterChange}
      />
      <AddPerson
        newPerson={newPerson}
        addPerson={addPerson}
        nameChange={nameChange}
        numberChange={numberChange}
      />
      <PersonList
      persons={fileteredList}
      />
    </div>

  )
}

export default App
