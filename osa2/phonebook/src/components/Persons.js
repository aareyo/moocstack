import React from 'react'

const Person = ({person}) => {
  return (
    <div>
      <p>{person.name} {person.number}</p>
    </div>
  )
}

const Persons = ({persons, newFilter}) => {

  const filteredPersons = persons.filter(person =>
    person.name.toUpperCase().includes(newFilter.toUpperCase())
  );
  const rows = () => filteredPersons.map(person => <Person key={person.name} person={person} />)
  
  return (
    <div>
      {rows()}
    </div>
  )
}

export default Persons