import React from "react";


class ParkShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
    }

    render() {
        return (
            <>
                null
            </>
        )
    }
}

export default ParkShow;