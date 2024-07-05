import React, { useState, useEffect } from 'react';
import Search from './components/Search'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);

  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }
  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    const isNameExist = persons.find(person => person.name.toLowerCase() === personObject.name.toLocaleLowerCase());
    const updateContact = {...isNameExist, number: newNumber}

    if (isNameExist) {
      if (isNameExist.number != personObject.number) {
        if (
          window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
          )
        )
         personService
          .update(isNameExist.id, updateContact)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === updatedPerson.id ? updatedPerson : person
              )
            )
            setNewName('')
            setNewName('')
            setNotification({status: 'success', text: `${personObject.name} update with new number`});
            setTimeout(() => setNotification(null), 5000);
          })
          .catch((error) => {
            console.log(error);
            setNotification({ status: 'error', text: `This ${personObject.name} has already been removed from the server`})
          })
      } 
    
    } else {
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
        setNotification({status: 'success', text:`${personObject.name} added`});
        setTimeout(() => setNotification(null), 5000);
      })
      .catch((error) => {
        console.log(error)
        setNotification({status: 'error', text: `Adding failed`})
        setTimeout(() => setNotification(null), 5000);
      })     
    }   
  };

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    const confirmDelete = window.confirm(`Delete ${person.name} ?`)

    if (confirmDelete) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {notification} />
      <Search value={searchTerm} onChange={handleSearch} />

      <h2>add a new</h2>

      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete}/>
    </div>
  );
};
export default App;