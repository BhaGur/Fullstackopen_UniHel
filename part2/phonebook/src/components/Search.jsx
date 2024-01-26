const Search = ({ value, onChange }) => {
    return (
      <div>
        filter shown with 
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  };

  export default Search;