import { useState, useEffect } from 'react'
import countriesService from './services/countriesdata'
import SearchField from './components/SearchField'
import QueryContent from './components/QueryContent'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    countriesService.getAll().then((allCountries) => {
      setCountries(allCountries);
    });
  }, []);

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  const handleSearchChange = (e) => setSearch(e.target.value);

  return (
    <div>
      <SearchField
        value={search}
        onChange={handleSearchChange}
      />
      <QueryContent filteredCountries={filteredCountries} />
    </div>
  );
};

export default App;