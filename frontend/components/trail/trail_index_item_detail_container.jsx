import React from "react";
import { connect } from "react-redux";
import TrailIndexItemDetail from "./trail_index_item_detail";
import { fetchTrail } from '../../actions/trail_actions'

const mSTP = (state, ownProps) => {
    return {
      trail: state.entities.trails[ownProps.match.params.trailId],
    };
}

const mDTP = dispatch => {
    return {
        fetchTrail: trailId => dispatch(fetchTrail(trailId))
    }
}

export default connect(mSTP, mDTP)(TrailIndexItemDetail);