import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserCard = () => {
  const { filteredUsers, deleteUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDelete = (id, e) => {
    e.stopPropagation(); 
    deleteUser(id);
  };

  return (
    <>
      {filteredUsers.map((user) => (
        <div className="user-card" key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
          <h3>{user.name}</h3>
          <p><strong>Id: </strong>{user.id}</p>
          <p><strong>Email: </strong>{user.email}</p>
          <p><strong>City: </strong>{user.address.city}</p>
          <div className="user-card-btn">
            <button><strong>Edit</strong></button>
            <button onClick={(e) => handleDelete(user.id, e)}><strong>Delete</strong></button>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCard;
