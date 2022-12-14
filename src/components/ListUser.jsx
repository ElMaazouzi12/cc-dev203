import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/CartSlice";
import { getUser } from "../redux/UserSlice";
import User from "./User";

const ListUser = () => {
  const data = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getCart());
  }, [dispatch]);

  console.log(data);

  return (
    <div>
      <h1 style={{ paddingLeft: "1rem" }}>Liste des utilisateurs :</h1>
      <div className="listUsers">
        {data.users &&
          data.users.map((item) => <User user={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default ListUser;
