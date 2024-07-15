import CountryDetails from "./CountryDetails";

const QueryContent = ({ filteredCountries }) => {
  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (filteredCountries.length === 1) {
    return <CountryDetails country={filteredCountries} />;
  } else {
    return (
      <div>
        {filteredCountries.map((country) => {
          return <div key={country.name.common}>{country.name.common}</div>;
        })}
      </div>
    );
  }
};
export default QueryContent;