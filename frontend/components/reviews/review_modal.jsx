import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ReviewForm from "./review_form";

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
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
          <ReviewForm trail={props.trail} review={props.review} isEditing={props.isEditing} />
      </div>
    </div>
  );
};

export default connect(null, mDTP)(ReviewModal);
