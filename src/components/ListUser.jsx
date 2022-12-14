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
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://dummyjson.com/users");
      return response.data;
    };
    getData().then((user) => setUser(user.users));
  }, []);


  return (
    <div>
      <h1>Liste des utilisateurs :</h1>
      <div className="listUsers">
        {/* {data.users.map((item) => (
          <User user={item} key={item.id} />
        ))} */}
        {user.map((item) => (
          <User user={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ListUser;
