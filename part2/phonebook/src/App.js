import React, { useState } from 'react'

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
      <h2>Phonebook</h2>
      <div>
        Filter: <input value={filter} onChange={filterChange}/>
      </div>
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson.name} onChange={nameChange} />
        </div>
        <div>
          number: <input value={newPerson.number} onChange={numberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {fileteredList.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>

  )
}

export default App
