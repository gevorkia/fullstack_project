import React from "react";

class TrailIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPark(this.props.match.params.parkId);
  }

  render() {
    return <>null</>;
  }
}

export default TrailIndex;
