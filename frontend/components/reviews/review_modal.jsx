import React from "react";
import { closeModal } from "../../actions/modal_actions";
import ReviewForm from "./review_form";

const ReviewModal = (props) => {
  return props.modal !== "upload" ? null : (
    <div className="modal-background" onClick={props.closeModal}>
      <div
        id="upload-modal"
        className="modal-child"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-form">
          <div className="x">
            <div onClick={props.closeModal}>&#10006;</div>
          </div>
          <h2 id="modal-header" className="ui header">
            Write a Review
          </h2>
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;