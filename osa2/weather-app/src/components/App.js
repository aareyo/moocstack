import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countrys from './Countrys';

const App = () => {
  const [countrys, setCountrys] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountrys(response.data)
    })
  })

  const handleSearchInputChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      find countries
      <input type='text' onChange={handleSearchInputChange}></input>
      <Countrys countrys={countrys} filter={filter} />
    </div>
  )

}

export default App;
