import { RECEIVE_TRAIL } from "../actions/trail_actions";
import { RECEIVE_REVIEWS } from "../actions/review_actions";

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_TRAIL:
    case RECEIVE_REVIEWS:
      nextState = action.payload.tags;
      return nextState;
    default:
      return state;
  }
};

export default tagsReducer;
