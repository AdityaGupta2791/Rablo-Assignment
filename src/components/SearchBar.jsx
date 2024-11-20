import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchId, setSearchId] = useState("");

  const handleSearch = () => {
    onSearch(searchId);
    setSearchId("");
  };
  
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input 
        type="text" 
        value={searchId}
        placeholder="Search by Id"
        onChange={(e)=>setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar;


