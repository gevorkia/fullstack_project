import React from "react";
import { connect } from "react-redux";
import TrailIndex from "./trail_index";
import { fetchPark } from "../../actions/park_actions";

const mSTP = (state, ownProps) => {
    debugger
    return {
      trails: state.entities.parks[ownProps.match.params.parkId],
    };
}

const mDTP = dispatch => {
    return {
      fetchPark: (parkId) => dispatch(fetchPark(parkId))
    };
}

export default connect(mSTP, mDTP)(TrailIndex);
