import React from "react";

import axios from "axios";
import { useNavigate } from "react-router";

function Login() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let navigate = useNavigate();

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then(function (response: any) {
        console.log(response);
        let data = response.data;
        if (data.user) {
          localStorage.setItem("token", data.user);
          console.log(data.user);

          alert("Login successful");
          navigate("/dashboard");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("please try again");
      });
  }
  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
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

export default Login;
