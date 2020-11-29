import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW,
    // RECEIVE_REVIEW_ERRORS
} from "../actions/review_actions";
import { RECEIVE_TRAIL_REVIEWS } from "../actions/trail_actions"

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_REVIEWS:
        nextState["reviews"] = action.payload.reviews;
        return nextState;
      case RECEIVE_TRAIL_REVIEWS:
        // console.log('receive trail reviews', action.payload)
        // console.log('receive trail reviews', action.payload.reviews)
        // if ('reviews' in action.payload) { 
        //   nextState = action.payload.reviews;
        // }
        // console.log("BADDd", action.payload);
        // console.log("current", nextState);
        if (action.payload.reviews) {
          nextState = action.payload.reviews;
          return nextState;
        } else {
          return state;
        }
      case RECEIVE_REVIEW:
        nextState[action.payload.review.id] = action.payload.review;
        return nextState;
      case REMOVE_REVIEW:
        // delete nextState[action.reviewId];
        // console.log(action.payload);
        delete nextState[action.payload];
        return nextState;
      default:
        return state;
    }
}

export default reviewsReducer;