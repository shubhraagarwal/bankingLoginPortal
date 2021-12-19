import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import styles from "../styles/register.module.css";
import { Link } from "react-router-dom";
function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  let navigate = useNavigate();
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/register", {
        name,
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
        navigate("/login");
      })
      .catch(function (error) {
        alert("User already exists");
      });
  }
  return (
    <div className={styles.Register}>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Name"
        />
        <br />
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <button type="submit">Submit</button>
        <Link to={`/login`}>Already a user? Login</Link>
      </form>
    </div>
  );
}

export default Register;
