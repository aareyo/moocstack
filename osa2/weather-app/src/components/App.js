import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  },[])

  const handleSearchInputChange = (event) => {
    setFilter(event.target.value)
  }

  const handleShowDetails = (country) => {
    return () => { setFilter(country.name) }
  }

  const showCountries = () => {
    const filteredCountries = countries.filter(country =>
      country.name.toUpperCase().includes(filter.toUpperCase())
    )

    if (filteredCountries.length > 10) {
      return (
        <div>
          <p>Too many matches, specify another filter</p>
        </div>
      );
    }

    if (filteredCountries.length < 10 && filteredCountries.length > 1) {
      return filteredCountries.map(country => (
          <div key={country.name}>
          {country.name} <button onClick={handleShowDetails(country)}>show</button>
        </div>
        ))
    }
  
     if (filteredCountries.length === 1) {
      const rows = () =>
      filteredCountries.map(country => (
          <Country key={country.name} country={country} />
      ));
      return <div>{rows()}</div>
    }
  }

  
  return (
    <div>
      find countries
      <input type='text' onChange={handleSearchInputChange}></input>
      {showCountries()}
    </div>
  )


}

export default App;
