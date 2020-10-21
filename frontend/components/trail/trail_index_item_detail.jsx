import React from "react";
import TrailIndexItemDetailMapContainer from "./trail_index_item_detail_map_container";

class TrailIndexItemDetail extends React.Component {
  constructor(props) {
    super(props)
  }


    componentDidMount() {
        // debugger
        this.props.fetchTrail(this.props.match.params.trailId);
    }

  render() {
    if (!this.props.trail) return null;
    
    const {trail} = this.props

    return (
    <>
        {trail.name}
    </>
    )
  }
}

export default TrailIndexItemDetail