import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newPerson, setNewPerson ] = useState({
    name: null,
    phone: null
});

const [ newFilter, setNewFilter ] = useState('')

const filterPersonNameChange = (event) => {
  setNewFilter(event.target.value)
}

  const handlePersonNameChange = (event) => {
    setNewPerson({
      name: event.target.value,
      number: newPerson.number
  });
  }

  const handlePersonNumberChange = (event) => {
    setNewPerson({
      name: newPerson.name,
      number: event.target.value
  });
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson.name,
      number: newPerson.number
    }

    const alreadyOnList = persons.filter(person => person.name === personObject.name)

    if (alreadyOnList.length > 0) {
      alert(
        `${personObject.name} is already added to phonebook`
      )
      setNewPerson('')
    } else {
      setPersons(persons.concat(personObject))
      setNewPerson('')
    }
  }

  const rows = () => {

    const filteredPersons = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))

    return (
      filteredPersons.map(person =>
        <Person
          key={person.name}
          person={person}
        />
      )
    )
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with:
          <input value={newFilter} onChange={filterPersonNameChange}/>
          <br></br>
          <h1>add new</h1>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newPerson.name} onChange={handlePersonNameChange}/>
          <br></br>
          number:
          <input value={newPerson.number} onChange={handlePersonNumberChange}/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      {rows()}
    </div>
  )

}

export default App