import React from 'react'

const Person = ({person, handleDeletePerson}) => {
  return (
    <div>      
      <form onSubmit={() => handleDeletePerson(person)}>
      {person.name} {person.number} <button type="submit" person={person}>delete</button>
          </form>
    </div>
  )
}

const Persons = ({persons, newFilter, handleDeletePerson}) => {
  const filteredPersons = persons.filter(person =>
    person.name.toUpperCase().includes(newFilter.toUpperCase())
  );
  const rows = () => filteredPersons.map(person => 
  <Person key={person.name} person={person} handleDeletePerson={handleDeletePerson} />)
  
  return (
    <div>
      {rows()}
    </div>
  )
}

export default Persons