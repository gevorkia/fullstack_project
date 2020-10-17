import {connect} from "react-redux";
import SessionForm from "./session_form"
import { createNewUser, clearErrors, loginUser } from "../../actions/session_actions";
import React from "react";
import { Link } from "react-router-dom";

const mSTP = state => {
    return {
        errors: state.errors.session,     
        formType: 'Sign Up',
        navLink: <Link to="/login">Log in</Link>,
    }
}

const mDTP = (dispatch) => {
    return {
      processForm: (formUser) => dispatch(createNewUser(formUser)),
      processDemo: (formUser) => dispatch(loginUser(formUser)),
      clearErrors: () => dispatch(clearErrors()),
    };
}

export default connect(mSTP, mDTP)(SessionForm);