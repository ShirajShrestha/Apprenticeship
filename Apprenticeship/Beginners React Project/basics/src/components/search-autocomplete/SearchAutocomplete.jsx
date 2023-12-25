import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const SearchAutocomplete = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const handleClick = (e) => {
    console.log(e.target.textContent);
    setDropdown(false);
    setSearchParams(e.target.innerText);
    setFilteredUsers([]);
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const responseData = await response.json();
      console.log(responseData);
      if (responseData && responseData.users && responseData.users.length) {
        setUsers(responseData.users.map((item) => item.firstName));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(filteredUsers);

  return (
    <div className="search-autocomplete-wrapper">
      <div className="searchbox">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <input
            type="text"
            value={searchParams}
            onChange={handleChange}
            placeholder="Search users here.."
          />
        )}
      </div>
      {dropdown && (
        <Suggestions data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
};

export default SearchAutocomplete;
