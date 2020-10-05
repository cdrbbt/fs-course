import React, {useState} from 'react'
import CountryInfo from './CountryInfo'

const CountryList = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const selectCountry = (country) => () => setSelectedCountry(country)

  return (
    <div>
      <ul>
        {countries.map(country => <li key={country.name}>{country.name} <button onClick={selectCountry(country)}>show</button></li>)}
      </ul>
      {selectedCountry ? <CountryInfo country={selectedCountry}/> : null}
    </div>
  )
}

export default CountryList
