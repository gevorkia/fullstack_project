import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h2>{currentUser.firstName}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="nav-bar-btn" to="/signup">
        Sign Up
      </Link>
      <Link className="nav-bar-btn" to="/login">
        Log In
      </Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <h1 className="logo">Path</h1>
      <div>{display}</div>
    </header>
  );
};
