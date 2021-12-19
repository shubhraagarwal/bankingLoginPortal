import React, { ReactElement, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
import axios from "axios";
interface Props {}

export default function Dashboard({}: Props): ReactElement {
  let navigate = useNavigate();
  const [name, setName] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserData();
    } else {
      navigate("/login");
    }
  }, []);

  function getUserData() {
    let token: any = localStorage.getItem("token");
    console.log(token);
    axios
      .get("http://localhost:5000/getUserDetails", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      });
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Hi, {name}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
