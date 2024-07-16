import CountryDetails from "./CountryDetails";

const QueryContent = ({ countriesList, handleShow }) => {
  if (countriesList.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countriesList.length === 1) {
    return <CountryDetails country={countriesList} />;
  } else {
    return (
      <div>
        {countriesList.map((country) => {
          return (<div key={country.name.common}>{country.name.common}
          <button type='button' onClick={() => handleShow(country.name.common)}>show</button>
          </div>);
        })}
      </div>
    );
  }
};
export default QueryContent;