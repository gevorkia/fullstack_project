import {combineReducers} from 'redux';
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer"
// import other reducers

const rootReducer = combineReducers({
    session: sessionReducer,
    error: errorsReducer
})

export default rootReducer;