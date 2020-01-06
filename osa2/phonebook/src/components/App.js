import React, { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./Persons";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import personService from "../services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: null,
    phone: null
  });
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    personService.getAll().then(returnedPerson => {
      setPersons(returnedPerson)
    })
  }, []);

  const filterPersonNameChange = event => {
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

  const handleDeletePerson = (id) => {
    personService.remove(id)
    setPersons(persons.filter(person => person.id !== id))
  }

  const addPerson = event => {
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
    } else {
      personService.create(personObject).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
      });
    }
    setNewPerson("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        value={newFilter}
        filterPersonNameChange={filterPersonNameChange}
      />
      <br></br>
      <h1>add new</h1>
      <PersonForm
        onSubmit={addPerson}
        handlePersonNameChange={handlePersonNameChange}
        handlePersonNumberChange={handlePersonNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} handleDeletePerson={handleDeletePerson} />
    </div>
  );
};

export default App;
