import Person from './Person'

const Persons = ({ filteredPersons, handleDelete }) => {
    return (
      <div>
        {filteredPersons.map((person) => (
          <Person 
            key={person.id} 
            person={person} 
            handleDelete ={() => handleDelete(person.id)}
          />
        ))}
      </div>
    );
  };

  export default Persons;