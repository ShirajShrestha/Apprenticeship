import { useEffect, useState } from "react";
import "./githubFinder.css";
import User from "./User";

const GithubFinder = () => {
  const [userName, setUsername] = useState("ShirajShrestha");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const resposeData = await response.json();
    if (resposeData) {
      setUserData(resposeData);
      setLoading(false);
      setUsername("");
    }
  };

  const handleSearch = () => {
    fetchProfile();
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="github-finder-wrapper">
      <div className="input-wrapper">
        <input
          type="text"
          className="search-bar"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search Github Users"
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <div className="profile-wrapper">
        {userData !== null ? <User user={userData} /> : null}
      </div>
    </div>
  );
};

export default GithubFinder;
