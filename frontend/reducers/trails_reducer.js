import { RECEIVE_TRAIL } from "../actions/trail_actions";
import { RECEIVE_PARK_TRAILS } from "../actions/park_actions";

const trailReducer = (state= {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_TRAIL:
        // console.log(action.payload)
        nextState[action.payload.trail.id] = action.payload.trail
        return nextState;
      case RECEIVE_PARK_TRAILS:
        nextState = action.payload.trails;
        return nextState;
      default:
        return state;
    }
}

export default trailReducer;