import React from "react";
import { connect } from "react-redux";
import { fetchParkTrails } from "../../actions/park_actions";
import { avgTrailRating } from "../../reducers/selectors/selectors";

const mSTP = (state, ownProps) => {
  return {
    trails: Object.values(state.entities.trails),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchParkTrails: (parkId) => dispatch(fetchParkTrails(parkId)),
  };
};

import NearbyTrailItem from "./nearby_trail_item"

class NearbyTrailsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchParkTrails(this.props.parkId);
    }

    render() {
        const { trails, parkName, currentTrailName, allReviews } = this.props

        const filteredTrails = trails.filter(t => t.name !== currentTrailName)

        return (
          <>
            {filteredTrails.map((trail) => {
              const filteredReviews = allReviews.filter((r) => r.trailId === trail.id)

              return (
                <NearbyTrailItem
                  trail={trail}
                  key={trail.id}
                  parkName={parkName}
                  reviewsLength={filteredReviews.length}
                  avgTrailRating={avgTrailRating(filteredReviews)}
                />
              );
              })}
          </>
        );
    }
}

export default connect(mSTP, mDTP)(NearbyTrailsIndex);
