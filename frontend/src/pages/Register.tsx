import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let navigate = useNavigate();
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
        console.log(error);
      });
  }
  return (
    <div className="Register">
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
