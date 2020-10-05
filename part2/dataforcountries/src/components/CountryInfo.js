import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CountryInfo = ({ country }) => {

  const [weather, setWeather] = useState(null)


  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_WEATHER_KEY,
      query: country.capital
    }
    axios
      .get('http://api.weatherstack.com/current', { params })
      .then(response => {
        console.log(response)
        setWeather(response.data)
      })
  }, [country.capital])

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Population: {country.population}</p>
      <h2>Languages:</h2>
      <ul>
        {country.languages.map(language => <ul key={language.name}>{language.name}</ul>)}
      </ul>
      <h2>Flag:</h2>
      <img src={country.flag} alt='flag' height='50' />
      <p>Capital: {country.capital}</p>
      {weather ? <p>Weather: {weather.current.temperature}</p> : null}
      {weather ? <img src={weather.current.weather_icons[0]} alt='weather icon' /> : null}
      {weather ? <p>Wind {weather.current.wind_speed} mph in {weather.current.wind_dir} direction</p> : null}
    </div>
  )
}

export default CountryInfo