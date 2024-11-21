import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const user = users.find((user) => user.id.toString() === id);

  if (!user) return <h2>User not found</h2>;

  return (
    <div className="user-details">
      <h2>Details of {user.name}</h2>
      <p><strong>Id: </strong>{user.id}</p>
      <p><strong>Username: </strong>{user.username}</p>
      <p><strong>Email: </strong>{user.email}</p>
      <p><strong>Address: </strong>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <p><strong>Phone: </strong>{user.phone}</p>
      <p><strong>Website: </strong>{user.website}</p>
      <p><strong>Company: </strong>{user.company.name}</p>
    </div>
  );
};

export default UserDetails;
