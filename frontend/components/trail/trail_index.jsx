import React from "react";
import TrailIndexItem from "./trail_index_item";

class TrailIndex extends React.Component {
    constructor(props) {
        super(props)
    }

     componentDidMount() {
        this.props.fetchParkTrails(this.props.match.params.parkId);
    }

    render() {
        const { trails, parkName } = this.props
        return (
          <ul>
            {trails.map((trail) => (
              <TrailIndexItem
                key={trail.id}
                trail={trail}
                parkName={parkName}
              />
            ))}
          </ul>
        );
    }
}


export default TrailIndex;