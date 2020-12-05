import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { deleteReview } from "../../actions/review_actions";

const mSTP = (state, ownProps) => {
    return {
      currentUser: state.session.currentUser
        ? state.session.currentUser.id
        : "",
      modal: state.ui.modal,
    };
};

const mDTP = (dispatch) => {

    return {
      openModal: (modalType, id) => dispatch(openModal(modalType, id)),
      deleteReview: reviewId => dispatch(deleteReview(reviewId))
    };
};

import ReviewModal from "../reviews/review_modal";


class ReviewIndexItem extends React.Component {
    constructor(props) {
      super(props)
      this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(e) {
      e.preventDefault();
      const confirmAlert = confirm("Are you sure you want to delete this review?");

      // console.log(this.props.review.id)

      if (confirmAlert) {
        this.props.deleteReview(this.props.review.id)
      }

    }

    render() {
        // console.log("review_index_item", this.props)

        const {review, currentUser, trail} = this.props;

        let reviewTagCloud = [];

        if (review.tags !== undefined) {
            reviewTagCloud = Object.values(review.tags).map(tag => {
               return (
                <span className="r-tag" key={tag.id}>{tag.name}</span>
               )
            })
        }

        const reviewStars = [];
    
        for (let i = 1; i < 6; i++) {
            const starCSS = review.rating >= i ? "filled" : "unfilled";
            reviewStars.push(
                <span key={`stars-${i}`} className={`stars-${starCSS}`}></span>
            )
        }
        
        const reviewDate = new Date(review.activityDate);

        const reviewer = review[review.userId]
        // console.log("review index item", this.props)
        // console.log("review", review)
        // console.log("reviewer", reviewer)

        const reviewActions =
      
            currentUser === reviewer.id ? (
              <span>
                <div className="r-delete" onClick={this.handleDelete}>
                  Delete
                </div>
                |
                <div
                  className="r-edit"
                  onClick={() => this.props.openModal("edit_review", review.id)}
                >
                  Edit
                </div>
                {this.props.modal &&
                this.props.modal.modalType === "edit_review" && this.props.modal.id === review.id ? (
                  <section className="review-idx-wrapper">
                    <div className="review-idx">
                      <ReviewModal trail={trail} review={review} />
                    </div>
                  </section>
                ) : null}
              </span>
            ) : null
     
        const profilePicture = reviewer.profilePicture ? (
          <img
            src={reviewer.profilePicture}
            alt={`${reviewer.firstName} ${reviewer.lastName}`}
          ></img>
        ) : (
          <img src={window.hiker} alt="demo-user"></img>
        );

        return (
          <>
            <div className="review-idx-item-wrapper"></div>
            <div className="review-idx-item-header">
              <div className="r-user-photo">
                {profilePicture}
              </div>
              <div className="r-user-name-wrapper">
                {" "}
                <div className="r-user-name">
                  {reviewer.firstName}&nbsp;{reviewer.lastName}
                </div>
              </div>
              <div className="r-star-date-wrapper">
                <span className="stars">{reviewStars}</span>
                <span className="r-activity-date">
                  {new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    day: "numeric",
                  }).format(reviewDate)}
                  , {reviewDate.getFullYear()}
                </span>
              </div>
              <div className="r-tag-wrapper">{reviewTagCloud}</div>
            </div>
            <div className="r-review-txt-wrapper">
              <p className="r-review-txt">{review.review}</p>
            </div>
            <div className="r-edit-delete-wrapper">
              {reviewActions}
            </div>
          </>
        );
    }
    
}

export default connect(mSTP, mDTP)(ReviewIndexItem);