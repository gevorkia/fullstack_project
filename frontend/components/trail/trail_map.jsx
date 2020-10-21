import React from "react";
import mapboxgl from "mapbox-gl";

class ParkMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lng: this.props.trail.lng,
            lat: this.props.trail.lat,
        }
    }


    componentDidMount() {
        mapboxgl.accessToken =
          "pk.eyJ1IjoiZ2V2b3JraWEiLCJhIjoiY2tnZ3hrdGxjMDAwdzJ0c2FldnNjYWRnZyJ9.WHAlo3XQoW9zZj9ObJ5qCQ";
        const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
          center: [this.state.lng, this.state.lat], // starting position [lng, lat]
          zoom: 10, // starting zoom
        });
    }

    render() {
        return (
            <div className="map-container" ref="map">
                
            </div>
        )
    }
}

