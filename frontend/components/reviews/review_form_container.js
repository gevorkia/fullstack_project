import React from "react";
import { connect } from "react-redux";
import { createReview, clearReviewErrors } from "../../actions/review_actions";
import { closeModal } from "../../actions/modal_actions";
import ReviewForm from "./review_form";

import {
  defaultActivity,
  filteredTagsByType,
} from "../../reducers/selectors/selectors";

const mSTP = (state, ownProps) => {
    debugger
  return {
    userId: state.session.currentUser.id,
    trailId: ownProps.trailId,
    selectedActivity: defaultActivity(state),
    activities: filteredTagsByType(state, "activity")
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