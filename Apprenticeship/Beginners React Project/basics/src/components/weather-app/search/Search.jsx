import "../weather.css";
const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter a city "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn-search" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
