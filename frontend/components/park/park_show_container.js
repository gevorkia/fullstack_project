import React from "react";
import { connect } from "react-redux";
import ParkShow from "./park_show";
import { fetchPark, fetchParkTrails } from "../../actions/park_actions"

const mSTP = (state, ownProps) => {
    // debugger

    return {
      park: state.entities.parks[ownProps.match.params.parkId],
      trails: Object.values(state.entities.trails)
      //   loading: state.ui.loading.indexLoading,
    };
}

const mDTP = dispatch => {
    return {
        fetchPark: parkId => dispatch(fetchPark(parkId)),
        fetchParkTrails: parkId => dispatch(fetchParkTrails(parkId))
    }
}

export default connect(mSTP, mDTP)(ParkShow);