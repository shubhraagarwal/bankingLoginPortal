import React from "react";
import styles from "../styles/login.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import login from "../assets/login.svg";
function Login() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let navigate = useNavigate();

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios
      .post("https://bankingloginportal.herokuapp.com/login", {
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
    <div>
      <Navbar />
      <div className={styles.Login}>
        <h1>Login</h1>
        <div className={styles.container}>
          <form onSubmit={submitHandler}>
            <br />
            <label className={styles.label}>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <br />
            <label className={styles.label}>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              required
              placeholder="Password"
            />
            <br />
            <button type="submit">Submit</button>
            <Link className={styles.notaUser} to={`/register`}>
              Not an existing user? <span>Register</span>
            </Link>
          </form>
          <img src={login} alt="login" className={styles.img} />
        </div>
      </div>
    </div>
  );
}

export default Login;
