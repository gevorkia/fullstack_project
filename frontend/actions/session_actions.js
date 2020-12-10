import * as SessionAPIUtil from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

// action creators 

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
    // takes in user as payload
    // user => user: user (value is properties the user has with it)
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

// takes in an array
export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
  // errors: errors
});

export const clearSessionErrors = () => ({
    type: RECEIVE_CLEAR_SESSION_ERRORS
});

// thunk action creators 
export const loginUser = (user) => {
    return dispatch => {
        return SessionAPIUtil.login(user)
            .then( user => {
                return dispatch(receiveCurrentUser(user))
            })
            .fail ( errors => {
                return dispatch(receiveSessionErrors(errors.responseJSON))
            })
    }
}

export const logoutUser = () => {
    return dispatch => {
        return SessionAPIUtil.logout()
            .then( () => {
                return dispatch(logoutCurrentUser())
            })
    }
}

export const createNewUser = (user) => {
    return dispatch => {
        return SessionAPIUtil.signup(user)
            .then(user => {
                return dispatch(receiveCurrentUser(user))
            })
            .fail(errors => {
                return dispatch(receiveSessionErrors(errors.responseJSON))
            })
    }
}

export const clearErrors = () => dispatch => {
    return dispatch(clearSessionErrors());
}