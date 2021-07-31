import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../Search/Index";
import Navbar from "./style.module.css";
import Profile from "../Profile/Profile";

function Index({ handleSearch, handleClick }) {
  const Token = useSelector(state => state.token.token);

  return (
    <header>
      <Link className={Navbar.logo} to="/">
        JOFY
      </Link>
      {Token !== "" ? (
        <>
          <div>
            <Search handleSubmit={handleSearch} />
          </div>
          <Profile />
        </>
      ) : (
        <div className={Navbar.navLeft}>
          <ul>
            <li>Premium</li>
            <li>About</li>
            <li>Support</li>
            <li onClick={handleClick}>
              <div className={Navbar.btnAuth}>SIGN IN</div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Index;
