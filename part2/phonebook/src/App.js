import React, { useState, useEffect } from 'react'

import phonebookService from './services/phonebookService'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import PersonList from './components/PersonList'
import Notification from './components/Notification'

const defaultPerson = { name: '', number: '' }
const defaultNotification = {message:null, error:false}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState(defaultPerson)
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(defaultNotification)

  useEffect(() => {
    phonebookService.getPersons()
      .then(persons => {
        console.log(persons)
        setPersons(persons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.find(person => person.name === newPerson.name)
    if (person) {
      window.confirm(`Update ${newPerson.name}'s number?`) ?
        phonebookService.changeNumber({...person, number:newPerson.number}).then(person => {
          const newPersons = [...persons]
          newPersons[newPersons.findIndex(p => p.id === person.id)] = person
          setPersons(newPersons)
          setNewPerson(defaultPerson)
          setNotification({message: `Updated ${person.name}'s number`, error:false})
          setTimeout(() => setNotification(defaultNotification), 5000)
        }).catch(error => {
          console.log(error)
          setNotification({message: `${person.name} information has been already deleted from server`, error:true})
          setTimeout(() => setNotification(defaultNotification), 5000)
          setPersons(persons.filter(p => p.id !== person.id))
        }) :
        console.log('cancel update')
    } else {
      phonebookService.addPerson(newPerson)
        .then(person => {
          setPersons(persons.concat(person))
          setNewPerson(defaultPerson)
          setNotification({message: `Added ${person.name}`, error:false})
          setTimeout(() => setNotification(defaultNotification), 5000)
        })
    }
  }

  const deletePerson = (person) => () => {
    const confirmation = window.confirm(`Delete ${person.name}?`)
    if (confirmation) {
      phonebookService.removePerson(person).then(() => setPersons(persons.filter(p => p.id !== person.id)))
      setNotification({message: `Removed ${person.name}`, error:false})
          setTimeout(() => setNotification(defaultNotification), 5000)
    }
  }

  const nameChange = (event) => setNewPerson({ ...newPerson, name: event.target.value })
  const numberChange = (event) => setNewPerson({ ...newPerson, number: event.target.value })
  const filterChange = (event) => setFilter(event.target.value)
  const fileteredList = persons.filter((person) => person.name.toLowerCase().includes(filter.toLocaleLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification 
      notification={notification}/>
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
        deletePerson={deletePerson}
      />
    </div>

  )
}

export default App
