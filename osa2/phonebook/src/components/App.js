import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Persons from "./Persons";
import Filter from "./Filter";
import PersonForm from "./PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [newPerson, setNewPerson] = useState({
    name: null,
    phone: null
  });

  const [newFilter, setNewFilter] = useState("");

  const filterPersonNameChange = (event) => {
    setNewFilter(event.target.value);
  };

  const handlePersonNameChange = (event) => {
    setNewPerson({
      name: event.target.value,
      number: newPerson.number
    });
  };

  const handlePersonNumberChange = (event) => {
    setNewPerson({
      name: newPerson.name,
      number: event.target.value
    });
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newPerson.name,
      number: newPerson.number
    };

    const alreadyOnList = persons.filter(
      person => person.name === personObject.name
    );

    if (alreadyOnList.length > 0) {
      alert(`${personObject.name} is already added to phonebook`);
      setNewPerson("");
    } else {
      setPersons(persons.concat(personObject));
      setNewPerson("");
    }
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} filterPersonNameChange={filterPersonNameChange} />
      <br></br>
      <h1>add new</h1>
      <PersonForm
        onSubmit={addPerson}
        handlePersonNameChange={handlePersonNameChange}
        handlePersonNumberChange={handlePersonNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  );
};

export default App;
