import React from "react";
import { connect } from "react-redux";
import TrailIndex from "./trail_index_item";
import { fetchParkTrails } from "../../actions/park_actions";

const mSTP = (state, ownProps) => {
    debugger
    return {
      trails: state.entities.parks[ownProps.match.params.parkId],
    };
}

const mDTP = dispatch => {
    return {
      fetchParkTrails: (parkId) => dispatch(fetchParkTrails(parkId))
    };
}

export default connect(mSTP, mDTP)(TrailIndex);
