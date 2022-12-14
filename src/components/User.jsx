import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const User = ({ user }) => {
  
  const navigate = useNavigate()
  return (
    <div className="userContainer">
      <img src={user.image} alt={user.id} />
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <button onClick={() => navigate(`/detailuser/${user.id}`)}>Detail User</button>
      <button onClick={() => navigate(`/listproduits/${user.id}`)}>Panier</button>
    </div>
  );
};

export default User;
