import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./Components/UserCard";
import UserDetails from "./Components/UserDetails";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <h1 className="header">User Dashboard</h1>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <SearchBar />
                  <div className="card-container">
                    <UserCard />
                  </div>
                </div>
              }
            />
            <Route path="/user/:id" element={<UserDetails />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
