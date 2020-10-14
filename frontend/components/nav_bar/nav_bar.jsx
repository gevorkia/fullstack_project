import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h2>{currentUser.firstName}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <div className="nav-bar-sign-up-ctn">
        <Link className="nav-bar-sign-up" to="/signup">
          Sign Up
        </Link>
      </div>
      <div className="nav-bar-log-in-ctn">
        <Link className="nav-bar-log-in" to="/login">
          Log In
        </Link>
      </div>  
    </div>
  );
  return (
    <div className="nav-bar"> 
      <header className="nav-bar-title">
        <h1>Trails</h1>
        <div>{display}</div>
      </header>
    </div>
  );
};

export default NavBar
