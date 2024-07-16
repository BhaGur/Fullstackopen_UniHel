import { useState, useEffect } from 'react'
import countriesService from './services/countriesdata'
import SearchField from './components/SearchField'
import QueryContent from './components/QueryContent'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    countriesService
      .getAll()
      .then((allCountries) => {
        setCountries(allCountries);
      });
  }, []);

  const coutriesList = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  const handleShow = (country) => {
    setSearch(country);
  }

  return (
    <div>
      <SearchField
        value={search}
        onChange={handleSearchChange}
      />
      <QueryContent 
        countriesList={coutriesList}
        handleShow={handleShow} 
      />
    </div>
  );
};

export default App;