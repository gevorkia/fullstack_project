import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import trailsReducer from "./trails_reducer";
import parksReducer from "./parks_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  trails: trailsReducer,
  parks: parksReducer,
});

export default entitiesReducer;
