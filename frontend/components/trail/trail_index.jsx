import React from "react";
import { connect } from "react-redux";
import { fetchParkTrails } from "../../actions/park_actions";
import { fetchTrail } from "../../actions/trail_actions";
import { fetchReviews } from "../../actions/review_actions";
import { avgTrailRating } from "../../reducers/selectors/selectors";

const mSTP = (state, ownProps) => {
  const reviews = Object.values(state.entities.reviews);

  return {
    parkId: ownProps.parkId,
    parkName: ownProps.parkName,
    trails: Object.values(state.entities.trails),
    reviews: reviews,
    avgTrailRating: avgTrailRating(reviews),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchParkTrails: (parkId) => dispatch(fetchParkTrails(parkId)),
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    fetchReviews: () => dispatch(fetchReviews()),
  };
};

import TrailIndexItem from "./trail_index_item";

class TrailIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    if (this.props.trails && this.props.reviews.length === 0) {
        this.props.fetchReviews();
    }
  }

  render() {
    const { trails, parkName, avgTrailRating, reviews } = this.props;

    return (
      <ul className="trail-index">
        {trails.map((trail, idx) => (
          <TrailIndexItem
            key={trail.id}
            trail={trail}
            idx={idx}
            parkName={parkName}
            avgTrailRating={avgTrailRating}
            reviews={reviews.filter((r) => r.trailId === trail.id)}
          />
        ))}
      </ul>
    );
  }
}

export default connect(mSTP, mDTP)(TrailIndex);
