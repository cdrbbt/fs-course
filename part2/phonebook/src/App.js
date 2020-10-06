import React, { useState, useEffect } from 'react'

import phonebookService from './services/phonebookService'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import PersonList from './components/PersonList'

const defaultPerson = { name: '', number: '' }

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState(defaultPerson)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    phonebookService.getPersons()
      .then(persons => {
        console.log(persons)
        setPersons(persons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newPerson.name)) {
      alert(`${newPerson.name} is arealdy added to the phonebook`)
    } else {
      phonebookService.addPerson(newPerson)
        .then(person => {
          console.log(person)
          setPersons(persons.concat(person))
          setNewPerson(defaultPerson)
        })

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
