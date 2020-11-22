import {combineReducers} from 'redux';
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer"


const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: UiReducer,
});

export default rootReducer;



// the combineReducers function accepts a single argument: an object whose 
// properties will represent properties of our application state, and values that 
// correspond to domain - specific reducing functions.
