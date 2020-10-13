import React from 'react';
import { connect } from "react-redux";
import { loginUser } from "../../actions/session_actions";
import Login from "./login"

const mSTP = state => {
    return {
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        loginUser: formUser => dispatch(loginUser(formUser))
    }
}

export default connect(mSTP, mDTP)(Login)