import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "CREATE_REVIEW";
export const REMOVE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

const receiveReviews = (payload) => {
  return {
    type: RECEIVE_REVIEWS,
    payload
  };
};

const receiveReview = (payload) => {
  return {
    type: RECEIVE_REVIEW,
    payload
  };
};

// payload = reviewId
const removeReview = (payload) => {
  return {
    type: REMOVE_REVIEW,
    payload
  };
};

// payload = errors
const receiveReviewErrors = (payload) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    payload
  };
};

export const clearReviewErrors = () => {
  return {
    type: CLEAR_REVIEW_ERRORS,
  };
};


// thunk action creators
// functions that return other functions. the 1st function, provide parameters needed to make AJAX request
// inner (2nd) function parameter will always be dispatch
// thunk middleware will capture these fxns before they hit our store, see that they're fxns and invoke them with store's dispatch fxn

export const fetchReviews = (id) => dispatch => {
  return ReviewAPIUtil.fetchReviews(id)
    .then((reviews) => dispatch(receiveReviews(reviews))
    // dispatch (regular) action to the store that's gna send these reviews along
    // returns an action with all the reviews in it
  );
};

export const createReview = review => dispatch => {
    return ReviewAPIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
        .fail(errors => dispatch(receiveReviewErrors(errors.responseJSON)))
};

export const updateReview = review => dispatch => {
    return ReviewAPIUtil.updateReview(review)
        .then((review) => dispatch(receiveReview(review)))
        .fail((errors) => dispatch(receiveReviewErrors(errors.responseJSON)));
}

export const deleteReview = reviewId => dispatch => {
    return ReviewAPIUtil.deleteReview(reviewId)
        .then((reviewId) => dispatch(removeReview(reviewId)))
}

export const clearReviewErrors = () => (dispatch) => {
  return dispatch(clearReviewErrors());
};