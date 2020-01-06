import React from 'react'

const Person = ({person, handleButtonDeletePerson}) => {
  return (
    <div>
      {person.name} {person.number} <button onClick={console.log('lulu')}>delete</button>
    </div>
  )
}

const Persons = ({persons, newFilter, handleDeletePerson}) => {

  const filteredPersons = persons.filter(person =>
    person.name.toUpperCase().includes(newFilter.toUpperCase())
  );
  const rows = () => filteredPersons.map(person => 
  <Person key={person.name} person={person} handleButtonDeletePerson={handleDeletePerson} />)
  
  return (
    <div>
      {rows()}
    </div>
  )
}

export default Persons