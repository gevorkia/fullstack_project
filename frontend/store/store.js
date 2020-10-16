import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preLoadedState = {}) => {
  return createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;

// if (process.env.NODE_ENV !== "production") {
//   // must use 'require' (import only allowed at top of file)
//   const { logger } = require("redux-logger");
//   middlewares.push(logger);
// }

// "devDependencies": {
//   "redux-logger": "^3.0.6"
// }