// custom components to automate process of allowing people to see certain 
// components when they have the right privileges

import React from 'react';
import {connect} from 'react-redux';
import { Redirect, Route, withRouter } from "react-router-dom";

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUser)
    // will equate to T/F whether we have a current user
})

// <AuthRoute path="" component={} />
// if user is loggedIn, they won't be able to see the component.
// If logged out they will

const Auth = ({ loggedIn, path, component: Component }) =>  (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
)

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )}
    />
)

export const AuthRoute = withRouter(connect(mSTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));