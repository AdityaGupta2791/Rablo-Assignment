import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      });
  }, []);

  const handleSearch = (id) => {
    const result = users.filter((user) => user.id.toString() === id);
    setFilteredUsers(result.length > 0 ? result : users);
  };

  const deleteUser = (id) => {
    setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, filteredUsers, handleSearch, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
