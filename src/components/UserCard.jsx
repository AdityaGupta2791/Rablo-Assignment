import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(user.id);  
  }

  return (
    <div className="user-card" onClick={()=> navigate(`/user/${user.id}`)}>
      <h3>{user.name}</h3>
      <p><strong>Id: </strong>{user.id}</p>
      <p><strong>Email: </strong>{user.email}</p>
      <p><strong>City: </strong>{user.address.city}</p>
      <div className="user-card-btn">
        <button><strong>Edit</strong></button>
        <button onClick={(e)=>{ e.stopPropagation(); handleDelete(); }}><strong>Delete</strong></button>
      </div>
    </div>
  )
}

export default UserCard;

