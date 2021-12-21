import React from "react";
import { Link } from "react-router-dom";
import lottie from "./assets/agreement.svg";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      {/* <nav className={styles.nav}>
        <h1>SASTA SALT</h1>
        <div>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/login">
            Login
          </Link>
          <Link className={styles.link} to="/register">
            <button>Signup</button>
          </Link>
        </div>
      </nav> */}
      <div className={styles.body}>
        <div className={styles.bodyText}>
          <h2>Truly Borderless Banking.</h2>
          <p>
            Salt provides businesses with a one-stop portal to manage
            multi-currency accounts, payments, collections, and expenses
            worldwide.
          </p>
          <Link className={styles.link} to="/register">
            <button className={styles.getStarted}>Get started</button>
          </Link>
        </div>
        <img src={lottie} alt="lottie" />
      </div>
    </div>
  );
}

export default App;
