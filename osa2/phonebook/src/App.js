import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newPerson, setNewPerson ] = useState('')

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson,
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

  const rows = () => persons.map(person =>
    <Person
      key={person.name}
      person={person}
    />
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input 
            value={newPerson}
            onChange={handlePersonChange}
          />
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