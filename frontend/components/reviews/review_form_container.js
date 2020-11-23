import React from "react";
import { connect } from "react-redux";
import { createReview, clearReviewErrors } from "../../actions/review_actions";
import { closeModal } from "../../actions/modal_actions";
import ReviewForm from "./review_form";

const mSTP = (state) => {
  return {
    userId: state.session.currentUser.id,
  };
};

const mDTP = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP,mDTP)(ReviewForm);