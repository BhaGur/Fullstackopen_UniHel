const Person = ({ person, handleDelete }) => {
    return (
      <div>
        {person.name} {person.number} <button value={person.id} onClick={handleDelete}>delete</button>
      </div>
    );
  };

  export default Person;