import React from "react";
import { connect } from "react-redux";
import { fetchParkTrails } from "../../actions/park_actions";

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
        // console.log(this.props.trails);
        const { trails, parkName, reviewsLength } = this.props


        return (
            <ul>
                {trails.map(trail => (
                    <NearbyTrailItem 
                        trail={trail} 
                        key={trail.id}
                        parkName={parkName}
                        reviewsLength={reviewsLength}
                    />
                ))}
            </ul>
        )
    }
}

export default connect(mSTP, mDTP)(NearbyTrailsIndex);
