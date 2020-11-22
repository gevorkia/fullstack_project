import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW,
    RECEIVE_REVIEW_ERRORS
} from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_REVIEWS:
        nextState["reviews"] = action.payload.reviews
        return nextState
      case RECEIVE_REVIEW:
        nextState[action.payload.review.id] = action.payload.review
        return nextState;
      case REMOVE_REVIEW:
          delete nextState[action.reviewId]
          return nextState;
      default:
        return state;
    }
}

export default reviewsReducer;