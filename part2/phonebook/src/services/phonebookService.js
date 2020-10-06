import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addPerson = (person) => {
  const request = axios.post(baseUrl, person)
  return request.then(response => response.data)
}

const removePerson = (person) => {
  return axios.delete(`${baseUrl}/${person.id}`)
}

const changeNumber = (person) => {
  const request = axios.put(`${baseUrl}/${person.id}`, person)
  return request.then(response => response.data)
}

export default { getPersons, addPerson, removePerson, changeNumber }
