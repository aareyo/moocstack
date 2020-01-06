import React, { useState, useEffect } from "react";
import Persons from "./Persons";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import personService from "../services/personService";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: null,
    phone: null
  });
  const [newFilter, setNewFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationStyle, setNotificationStyle] = useState("error");

  useEffect(() => {
    personService.getAll().then(returnedPerson => {
      setPersons(returnedPerson);
    });
  }, []);

  const filterPersonNameChange = event => {
    setNewFilter(event.target.value);
  };

  const handlePersonNameChange = event => {
    setNewPerson({
      name: event.target.value,
      number: newPerson.number
    });
  };

  const handlePersonNumberChange = event => {
    setNewPerson({
      name: newPerson.name,
      number: event.target.value
    });
  };

  const handleDeletePerson = person => {
    let id = person.id;
    const confirm = window.confirm(`Delete ${person.name}`);
    if (confirm) {
      console.log("lala ");
      personService.remove(id).then(() => {
        setPersons(persons.filter(person => person.id !== id));
        setNotificationMessage(`Deleted ${person.name}`)
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
      })
      .catch(error => {
        setNotificationMessage(`Information of ${person.name} has already been removed from server`)
        setTimeout(() => {
          setNotificationMessage("error");
        }, 5000);
      });

    }
  };

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
      const confirm = window.confirm(
        `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
      );

      if (confirm) {
        personService
          .update(alreadyOnList[0].id, newPerson)
          .then(returnedPerson => {
            setPersons(
              persons.map(person =>
                person.id === alreadyOnList[0].id ? returnedPerson : person
              )
            );
          });
      }
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
        })
        .catch(error => {
          setNotificationMessage(`Failed to add '${personObject.name}' to phonebook`)
          setTimeout(() => {
            setNotificationMessage("error");
          }, 5000);
        });
      setNotificationMessage(`Added ${personObject.name}`);
      setNotificationStyle("success")
      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
    }
    setNewPerson("");
  };

  return (
    <div>
      <Notification message={notificationMessage} notificationStyle={notificationStyle} />
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
      <Persons
        persons={persons}
        newFilter={newFilter}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
