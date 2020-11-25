import React from "react";
import { connect } from "react-redux";
import TrailIndexItemDetail from "./trail_index_item_detail";
import { fetchTrail } from '../../actions/trail_actions'
import { fetchPark } from '../../actions/park_actions'
import { openModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    const trail = state.entities.trails[ownProps.match.params.trailId];
    // debugger
    return {
      trail,
      park: trail ? state.entities.parks[trail.parkId] : null,
      modal: state.ui.modal,
      //   park: state.entities.parks[trail.parkId]
      //   park: state.entities.parks[state.entities.trails[ownProps.match.params.trailId.park_id]]
    };
}

const mDTP = dispatch => {
    return {
      fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
      fetchPark: (parkId) => dispatch(fetchPark(parkId)),
      openModal: (modalType) => dispatch(openModal(modalType))
    };
}

export default connect(mSTP, mDTP)(TrailIndexItemDetail);
