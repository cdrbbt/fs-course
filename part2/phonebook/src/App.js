import React, { useState } from 'react'

const defaultPerson = { name: '', pNumber: '' }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', pNumber: '041-32165478' }
  ])
  const [newPerson, setNewPerson] = useState(defaultPerson)

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newPerson.name)) {
      alert(`${newPerson.name} is arealdy added to the phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewPerson(defaultPerson)
    }
  }

  const nameChange = (event) => setNewPerson({...newPerson, name:event.target.value})
  const numberChange = (event) => setNewPerson({...newPerson, pNumber:event.target.value})

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson.name} onChange={nameChange} />
        </div>
        <div>
          number: <input value={newPerson.pNumber} onChange={numberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.pNumber}</li>)}
      </ul>
    </div>

  )
}

export default App
