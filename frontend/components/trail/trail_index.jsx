import React from "react";
import { connect } from "react-redux";
import { fetchParkTrails } from "../../actions/park_actions";
import { fetchTrail } from "../../actions/trail_actions";

const mSTP = (state, ownProps) => {
  // debugger
  return {
    parkId: ownProps.parkId,
    parkName: ownProps.parkName,
    trails: Object.values(state.entities.trails),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchParkTrails: (parkId) => dispatch(fetchParkTrails(parkId)),
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
  };
};


import TrailIndexItem from "./trail_index_item";

class TrailIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchParkTrails(this.props.parkId);
        this.props.fetchTrail(this.props.match.params.trailId);
    }

    render() {
        // debugger
        // console.log(this.props.trail)
        const { trails, parkName } = this.props
        return (
          <ul className="trail-index">
            {trails.map((trail, idx) => (
                <TrailIndexItem
                    key={trail.id}
                    trail={trail}
                    idx={idx}
                    parkName={parkName}
                />
            ))}
          </ul>
        );
    }
}

export default connect(mSTP, mDTP)(TrailIndex);