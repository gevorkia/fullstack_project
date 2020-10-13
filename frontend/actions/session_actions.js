import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
// export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

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
// export const receiveSessionErrors = (errors) => ({
//   type: RECEIVE_SESSION_ERRORS,
//   errors
// });

// thunk action creators 
export const loginUser = (user) => {
    return dispatch => {
        return SessionAPIUtil.login(user)
            .then( user => {
                return dispatch(receiveCurrentUser(user))
            })
    }
}

export const logoutUser = () => {
    return dispatch => {
        return SessionAPIUtil.logout()
            // anon function below instead of user?
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
    }
}