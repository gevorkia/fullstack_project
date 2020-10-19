import { RECEIVE_PARK } from "../actions/park_actions";

const parksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    // debugger
    switch (action.type) {
        case RECEIVE_PARK:
            // debugger
            nextState[action.park.id] = action.park;
            return nextState;
        default:
            return state;
    }
}

export default parksReducer;