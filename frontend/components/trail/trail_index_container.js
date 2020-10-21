import React from "react";
import { connect } from "react-redux";
import TrailIndex from "./trail_index";
import { fetchParkTrails } from "../../actions/park_actions";

const mSTP = (state, ownProps) => {
    // debugger
    return {
      parkId: ownProps.parkId,
      parkName: ownProps.parkName,
      trails: Object.values(state.entities.trails)
    };
}

const mDTP = dispatch => {
    return {
      fetchParkTrails: (parkId) => dispatch(fetchParkTrails(parkId))
    };
}

export default connect(mSTP, mDTP)(TrailIndex);
