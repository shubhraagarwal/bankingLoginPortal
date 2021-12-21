import React, { useState } from "react";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import "./NavbarMenu.css";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className={styles.mainnav}>
        {/* 1st logo part  */}
        <div className={styles.logo}>
          <h2>SASTA SALT</h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink className={styles.fontWhite} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.fontWhite} to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.fontWhite} to="/register">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>

        {/* hamburget menu start  */}
        <div className={styles.hamburgermenu}>
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
