import React from 'react'

const CountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages:</h2>
      <ul>
        {country.languages.map(language => <ul key={language.name}>{language.name}</ul>)}
      </ul>
      <h2>Flag:</h2>
      <img src={country.flag} alt='flag' height='50' />
    </div>
  )
}

export default CountryInfo