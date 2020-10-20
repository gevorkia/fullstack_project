import React from 'react';
import { connect } from "react-redux";
import SessionForm from "./session_form"
import { loginUser, clearErrors } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const mSTP = state => {
    return {
      errors: state.errors.session,
      formType: "Login",
      navLink: <Link to="/signup">Sign up instead!</Link>,
    };
}

const mDTP = (dispatch) => {
    return {
        processForm: formUser => dispatch(loginUser(formUser)),
        processDemo: formUser => dispatch(loginUser(formUser)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm)