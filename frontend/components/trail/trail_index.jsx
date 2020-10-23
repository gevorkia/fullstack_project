import React from "react";
import TrailIndexItem from "./trail_index_item";


class TrailIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchParkTrails(this.props.parkId);
    }

    render() {
        // debugger
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


export default TrailIndex;