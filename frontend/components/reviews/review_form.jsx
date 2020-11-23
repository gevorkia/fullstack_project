import React from "react";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          rating: "",
          reviewText: "",
          activity_date: "",
          tagIds: [],
          userId: this.props.userId,
          trailId: this.props.trailId,
          selectedActivity: this.props.selectedActivity
        };

    }

    render() {
        return (
          <div className="review-form-modal">
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
                  <div
                    className="rating-select"
                    // onChange={this.handleInput("rating")}
                  >
                    <input
                      type="radio"
                      id="five"
                      name="rating"
                      value="5"
                      //   defaultChecked={this.state.rating === 5}
                    />
                    <label htmlFor="five" className="review-star"></label>

                    <input
                      type="radio"
                      id="four"
                      name="rating"
                      value="4"
                      //   defaultChecked={this.state.rating === 4}
                    />
                    <label htmlFor="four" className="review-star"></label>

                    <input
                      type="radio"
                      id="three"
                      name="rating"
                      value="3"
                      //   defaultChecked={this.state.rating === 3}
                    />
                    <label htmlFor="three" className="review-star"></label>

                    <input
                      type="radio"
                      id="two"
                      name="rating"
                      value="2"
                      //   defaultChecked={this.state.rating === 2}
                    />
                    <label htmlFor="two" className="review-star"></label>

                    <input
                      type="radio"
                      id="one"
                      name="rating"
                      value="1"
                      required
                      //   defaultChecked={this.state.rating === 1}
                    />
                    <label htmlFor="one" className="review-star"></label>
                  </div>

                  <textarea
                    className="review-text"
                    placeholder="Share your thoughts."
                    required
                    value={this.state.reviewText}
                    // onChange={this.handleInput("review")}
                  ></textarea>

                  <div className="activity-date-wrapper">
                    <div className="review-form-subheader">Activity</div>
                    <select
                      id="activity"
                      value={this.state.selectedActivity}
                      required
                    //   onChange={this.handleInput("selectedActivity")}
                    >
                      {this.props.activities.map((activity) => (
                        <option key={activity.id} value={activity.id}>
                          {activity.name}
                        </option>
                      ))}
                    </select>
                    <div className="activity-dropdown"></div>
                  </div>
                  <div className="trail-conditions-wrapper">
                    <div className="review-form-subheader">
                      Trail Conditions
                    </div>
                    {/* {trailConditionsTags} */}
                  </div>
                  <div className="review-form-submit"></div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ReviewForm;


