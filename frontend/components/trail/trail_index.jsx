import React from "react";
import { connect } from "react-redux";
import { fetchParkTrails } from "../../actions/park_actions";
import { fetchTrail, fetchTrailReviews } from "../../actions/trail_actions";
import { avgTrailRating } from "../../reducers/selectors/selectors";

const mSTP = (state, ownProps) => {
  const reviews = Object.values(state.entities.reviews);

  // debugger
  return {
    parkId: ownProps.parkId,
    parkName: ownProps.parkName,
    trails: Object.values(state.entities.trails),
    reviews: reviews,
    avgRating: avgTrailRating(reviews),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchParkTrails: (parkId) => dispatch(fetchParkTrails(parkId)),
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId)),
  };
};

import TrailIndexItem from "./trail_index_item";

class TrailIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    
    // this.props.fetchParkTrails(this.props.parkId);
    // this.props.fetchTrail(this.props.match.params.trailId);
    // if (this.props.park) {
    // this.props.fetchTrailReviews(this.props.match.params.trailId);
    // }
  }

  componentDidUpdate() {
    // console.log("props s are", this.props);

    if (this.props.trails && this.props.reviews.length === 0) {
      // console.log("bingoogoo");
      Object.keys(this.props.trails).forEach((trailId) => {
        // console.log('nice trailild is ', trailId)
        this.props.fetchTrailReviews(this.props.trails[trailId].id);
      });
      //   console.log("ijijijijihguyfdfgd");
      //   this.props.fetchTrail(this.props.match.params.trailId);
      //   this.props.fetchTrailReviews(this.props.match.params.trailId);
      //   //   this.props.fetchPark(this.props.trail.parkId);
    }
  }

  render() {
    // debugger
    // console.log(this.props);
    const { trails, parkName, avgRating, reviews } = this.props;

    return (
      <ul className="trail-index">
        {trails.map((trail, idx) => (
          <TrailIndexItem
            key={trail.id}
            trail={trail}
            idx={idx}
            parkName={parkName}
            avgRating={avgRating}
            reviews={reviews}
          />
        ))}
      </ul>
    );
  }
}

export default connect(mSTP, mDTP)(TrailIndex);
