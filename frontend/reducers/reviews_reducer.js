import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW,
} from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_REVIEWS:
        // console.log("payload", action.payload)
        nextState = action.payload.reviews;
        return nextState;
      case RECEIVE_REVIEW:
        nextState[action.payload.review.id] = action.payload.review;
        return nextState;
      case REMOVE_REVIEW:
        // console.log(action.payload);
        delete nextState[action.payload];
        return nextState;
      default:
        return state;
    }
}

export default reviewsReducer;