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

export const removeReviewErrors = () => {
  return {
    type: CLEAR_REVIEW_ERRORS,
  };
};