import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const SearchBar = () => {
  const { handleSearch } = useContext(UserContext);
  const [searchId, setSearchId] = useState("");

  const handleSearchClick = () => {
    handleSearch(searchId);
    setSearchId("");
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input 
        type="text" 
        value={searchId}
        placeholder="Search by Id"
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
