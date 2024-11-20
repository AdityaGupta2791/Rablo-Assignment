import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./Components/UserCard";
import UserDetails from "./Components/UserDetails";


function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
  }, []);

  const handleSearch = (id) => {
    const result = users.filter((user) => user.id.toString() === id);
    setFilteredUsers(result.length > 0 ? result : users);
  };

  const deleteUser = (id) => {
    setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <h1 className="header">User Dashboard</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SearchBar onSearch={handleSearch} />
                <div className="card-container">
                {users.map((user) => (
                  <UserCard key={user.id} user={user} onDelete={deleteUser} />
                ))}
              </div>
              </div>
            }
          />
          <Route path="/user/:id" element={<UserDetails users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
