const Person = ({ person, index }) => {
    return (
      <div key={index}>
        {person.name} {person.number}
      </div>
    );
  };

  export default Person;