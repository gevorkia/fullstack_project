import React from "react";
import { connect } from "react-redux";
import {
  createReview,
  updateReview,
} from "../../actions/review_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps) => {
  return {
    
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    // submitReview: (review) => dispatch(createReview(review)),
    // editReview: (review) => dispatch(updateReview(review)),
  };
};



const ReviewModal = (props) => {
  return(
    <div className="modal-background" onClick={props.closeModal}>
      <div
        id="review-modal"
        className="modal-child"
        onClick={(e) => e.stopPropagation()}
      >
          <ReviewForm trail={props.trail} review={props.review}/>
      </div>
    </div>
  );
};

export default connect(mSTP, mDTP)(ReviewModal);
