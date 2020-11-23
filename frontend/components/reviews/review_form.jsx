import React from "react";
import { connect } from "react-redux";
import { createReview, clearReviewErrors } from "../../actions/review_actions";
import { closeModal } from "../../actions/modal_actions";

import {
  defaultActivity,
  filteredTagsByType,
} from "../../reducers/selectors/selectors";

const mSTP = (state, ownProps) => {
  console.log('OKASDOKASD', state);
//   debugger;
  return {
    userId: state.session.currentUser.id,
    trailId: ownProps.trailId,
    // errors: Object.values(state.errors.review),
    errors: state.errors.review,
    activity: defaultActivity(state),
    activities: filteredTagsByType(state, "activity"),
  };
};

const mDTP = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: "",
      review: "",
      activity_date: "",
      tag_ids: [],
      userId: this.props.userId,
      trailId: this.props.trailId,
      activity: this.props.activity,
    };

    this.update = this.update.bind(this);
    this.postReview = this.postReview.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  postReview(e) {
    e.preventDefault();

    let newReview = {
      review: {
        rating: this.state.rating,
        review: this.state.review,
        activity_date: this.state.activity_date,
        tag_ids: this.state.tag_ids,
        userId: this.state.userId,
        trailId: this.state.trailId,
      },
    };

    this.props
      .createReview(newReview)
      .then(() => this.props.clearReviewErrors());
  }

  renderErrors() {
    console.log('OKSDFOASKD');
    console.log(this.props.errors);
    if (this.props.errors) {
        return (
        <ul className="review-errors">
            {this.props.errors.map((error, idx) => {
                return (<li key={idx}>{error}</li>);
            })}
        </ul>
        );
    }
  }

  render() {
    return (
      <form className="review-form-modal">
        {/* <div className="review-form-modal" onClick={}> */}
        <div className="review-form-x-wrapper">
          <button className="review-form-x">
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
          <div className="review-trail-name">{this.props.trailName}</div>

          {/* <label htmlFor="rating">Rating</label> */}
          <div className="review-form-body">
            <div className="rating-select-wrapper">
              <div className="rating-select" onChange={this.update("rating")}>
                <input
                  type="radio"
                  id="five"
                  name="rating"
                  value="5"
                  defaultChecked={this.state.rating === 5}
                />
                <label htmlFor="five" className="review-star"></label>
                <input
                  type="radio"
                  id="four"
                  name="rating"
                  value="4"
                  defaultChecked={this.state.rating === 4}
                />
                <label htmlFor="four" className="review-star"></label>
                <input
                  type="radio"
                  id="three"
                  name="rating"
                  value="3"
                  defaultChecked={this.state.rating === 3}
                />
                <label htmlFor="three" className="review-star"></label>
                <input
                  type="radio"
                  id="two"
                  name="rating"
                  value="2"
                  defaultChecked={this.state.rating === 2}
                />
                <label htmlFor="two" className="review-star"></label>
                <input
                  type="radio"
                  id="one"
                  name="rating"
                  value="1"
                  required
                  defaultChecked={this.state.rating === 1}
                />
                <label htmlFor="one" className="review-star"></label>
              </div>
            </div>
            <textarea
              onChange={this.update("review")}
              className="review-text"
              placeholder="Share your thoughts."
              required
              value={this.state.review}
            ></textarea>

            <div className="activity-date-wrapper">
              <div className="review-form-subheader">Activity</div>
              <select
                onChange={this.update("activity")}
                className="activity-dropdown"
                value={this.state.activity}
                required
              >
                {this.props.activities.map((activity) => (
                  <option className="activity-tags" key={activity.id}>
                    {activity.name}
                  </option>
                ))}
              </select>
              <div className="activity-space"></div>
              <input
                onChange={this.update("activity_date")}
                type="date"
                className="activity-date"
                value={this.state.activity_date}
                required
              />
            </div>
            <div className="trail-conditions-wrapper">
              <div className="review-form-subheader">Trail Conditions</div>
              {/* {trailConditionsTags} */}
            </div>
            <div className="review-form-btn-wrapper">
              <div className="cancel-btn">Cancel</div>
              <div className="post-btn" onClick={this.postReview}>
                Post
              </div>
            </div>
            <div>{this.renderErrors()}</div>
          </div>
        </div>
      </form>
    );
  }
}

// export default ReviewForm;
export default connect(mSTP, mDTP)(ReviewForm);


