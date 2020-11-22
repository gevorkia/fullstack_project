import React from "react";
import { connect } from "react-redux";
import {
//   fetchReviews,
  createReview,
  updateReview,
//   deleteReview,
} from "../../actions/review_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import ReviewModal from "./review_modal"

const mSTP = (state) => {
    return {
        modal: state.ui.modal
    };
};

const mDTP = (dispatch) => {
    return {
      openModal: (type) => dispatch(openModal(type)),
      closeModal: () => dispatch(closeModal()),
      submitReview: (review) => dispatch(createReview(review)),
      editReview: (review) => dispatch(updateReview(review))
    };
}

export default connect(mSTP, mDTP)(ReviewModal);