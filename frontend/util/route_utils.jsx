// custom components to automate process of allowing people to see certain 
// components when they have the right privileges

import React from 'react';
import {connect} from 'react-redux';
import { Redirect, Router, withRouter };

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUser)
    // will equate to T/F whether we have a current user
})

// <AuthRoute path="" component={} />

const Auth = ({ loggedIn, path}) => 