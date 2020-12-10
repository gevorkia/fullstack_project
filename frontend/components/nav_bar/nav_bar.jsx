import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";

const mSTP = (state) => ({
  currentUser: state.session.currentUser,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
});


import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      {/* <h2>{currentUser.firstName}</h2> */}
      <button className="nav-bar-log-out-temp" onClick={logout}>Logout</button>
    </div>
  ) : (
    <>
      <Link className="nav-bar-sign-up" to="/signup">
          Sign Up
      </Link>

      <Link className="nav-bar-log-in" to="/login">
        Log In
      </Link>
     
    </>
  );
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-left"></div>
        <a className="nav-logo-title" href="#/">
          <img
            height="32"
            width="32"
            alt="logo"
            className="logo"
            src={window.favicon}
          />

      
          <h2>MyTrails</h2>
        </a>
        <div className="nav-links">
          <div>{display}</div>
        </div>
      </nav>
    </header>
  );
};

export default connect(mSTP, mDTP)(NavBar);