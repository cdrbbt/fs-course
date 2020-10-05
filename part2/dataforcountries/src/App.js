import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import QueryError from './components/QueryError'
import CountryList from './components/CountryList'
import CountryInfo from './components/CountryInfo'

function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="App">
      <h1>Country information</h1>
      <Filter
        filter={filter}
        filterChange={filterChange} />
      <Info filteredCountries={countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))} />
    </div>
  );
}

const Info = ({ filteredCountries }) => {
  if (filteredCountries.length > 10) {
    return <QueryError errorCode={1} />
  } else if (filteredCountries.length > 1) {
    return <CountryList countries={filteredCountries} />
  } else if (filteredCountries.length === 1)
    return <CountryInfo country={filteredCountries[0]} />
  else return <QueryError errorCode={2} />
}

export default App;
