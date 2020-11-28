import React from "react";
import { connect } from "react-redux";
import { deleteReview } from "../../actions/review_actions";

const mSTP = (state, ownProps) => {
    return {
        
    };
};

const mDTP = (dispatch) => {

    return {
        deleteReview: reviewId => dispatch(deleteReview(reviewId))
    };
};

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // console.log("review_index_item", this.props)
        const {review} = this.props;

        let reviewTagCloud = [];

        if (review.tags !== undefined) {
            reviewTagCloud = Object.values(review.tags).map(tag => {
               return (
                <span className="r-tag">{tag.name}</span>
               )
            })
        }

        const reviewStars = [];
    
        for (let i = 1; i < 6; i++) {
            const starCSS = review.rating >= i ? "filled" : "unfilled";
            reviewStars.push(
                <span key={`r-stars-${i}`} className={`r-stars-${starCSS}`}></span>
            )
        }
        
        const reviewDate = new Date(review.activityDate);

        const reviewer = review[review.userId]

        return (
          <>
            <div className="review-idx-item-wrapper"></div>
            <div className="review-idx-item-header">
              <div className="r-user-photo">
                <img
                  src={reviewer.profilePicture}
                  alt={`${reviewer.firstName} ${reviewer.lastName}`}
                ></img>
              </div>
              <div className="r-user-name-wrapper">
                {" "}
                <div className="r-user-name">
                  {reviewer.firstName}&nbsp;{reviewer.lastName}
                </div>
              </div>
              <div className="r-star-date-wrapper">
                <span className="r-stars">{reviewStars}</span>
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
          </>
        );
    }
    
}

export default connect(mSTP, mDTP)(ReviewIndexItem);