import React from "react";
import { connect } from "react-redux";
import { fetchPark, fetchParkTrails } from "../../actions/park_actions";
import { avgParkRating } from "../../reducers/selectors/selectors"

// ownProps are props passed from parent to child components, and obtained from url
const mSTP = (state, ownProps) => {

  const parks = state.entities.parks
  const park = state.entities.parks[ownProps.match.params.parkId]
  const reviews = Object.values(state.entities.reviews);

  // console.log(state)
  // console.log("reviews", reviews);
  
  const parkReviews = reviews.filter(o => {
    if (park.id === 1) {
        return [1, 2, 3].includes(o.trailId);
    } else {
        return [4, 5, 6, 7].includes(o.trailId);
    }
  });
  const totalReviews = parkReviews.length;
  const trails = Object.values(state.entities.trails);

  return {
    parks,
    park,
    trails: trails,
    avgParkRating: avgParkRating(parkReviews), 
    totalReviews
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPark: (parkId) => dispatch(fetchPark(parkId)),
    fetchParkTrails: (parkId) => dispatch(fetchParkTrails(parkId)),
  };
};


import TrailIndex from "../trail/trail_index";
import SecNavBar from "../nav_bar/sec_nav_bar";

class ParkShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      this.props.fetchPark(this.props.match.params.parkId);
      this.props.fetchParkTrails(this.props.match.params.parkId);
      
      // console.log(this.props)
      // props may not be present here, console.log in render to obtain info
    }

    render() {
      if (!this.props.park || !this.props.trails) return null;

      const { parks, park, trails, avgParkRating, totalReviews } = this.props;

      const reviewStars = [];

      for (let i = 1; i < 6; i++) {
        const starCSS = avgParkRating >= i ? "filled" : "unfilled";
        reviewStars.push(
          <span key={`stars-${i}`} className={`stars-${starCSS}`}></span>
        );
      } 

      const parkPhotos = this.props.park.photoUrls.map((url, idx) => {
        return (
          <img
            key={`${this.props.park.id}-${idx}`}
            src={url}
            className="park-photo"
          ></img>
        );
      });

      let staticTrailPins = "/";

      trails.forEach((trail, idx) => {
        let trailPin = `pin-s+4D9709(${trail.lng},${trail.lat})`;
        staticTrailPins += trailPin;
        if (idx !== trails.length - 1) {
          staticTrailPins += ",";
        }
      });

      let parkMapZoom = "";

      if (park.name === "Sequoia National Park") {
        parkMapZoom = `8.80`;
      } else if (park.name === "Pfeiffer Big Sur State Park") {
        parkMapZoom = `12.80`;
      }

      return (
        <>
          <SecNavBar 
            // parks={parks} 
            park={park}
          />
          <section className="park-content-wrapper">
            <section className="park-content">
              <div className="photo-carousel-wrapper">
                <div className="photo-carousel">
                  {parkPhotos}
                </div>
              </div>
              <div className="title-wrapper">
                <div className="title">
                  <h1>Best Trails in {park.name}</h1>
                </div>
              </div>
              <div className="ratings-wrapper">
                <span className="stars">{reviewStars}</span>
                <div className="ratings-num">{totalReviews} Reviews</div>
              </div>
              <div className="park-text-wrapper">
                <div className="park-summary">{park.summary}</div>
                <div className="park-desc-header">Description</div>
                <div className="park-desc">{park.description}</div>
              </div>
              <section className="park-tags">
                <></>
              </section>
              <div className="park-static-map">
                <img
                  src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static${staticTrailPins}/${park.lng},${park.lat},${parkMapZoom},0/800x240?access_token=${window.mapboxAPIKey}`}
                  alt="park-map-preview"
                />
              </div>
              <div className="park-links-wrapper">
                <div className="park-links">
                  <a
                    href={`https://www.google.com/maps/dir/Current+Location/${park.lat},${park.lng}`}
                    className="park-action"
                  >
                    <div className="directions-btn"></div>
                    <p className="direction-btn-text">Directions</p>
                  </a>
                </div>
              </div>

              <section className="park-info-wrapper">
                <h2 className="park-info-main-header">Park Information</h2>
                <div className="park-info-details">
                  <div>
                    <article className="park-info-pairs">
                      <h3 className="park-info-header">Acreage</h3>
                      <p className="park-info-subheader">
                        {park.acreage} acres
                      </p>
                    </article>
                    <article>
                      <h3 className="park-info-header">Contact</h3>
                      <p className="park-info-subheader">{park.contact}</p>
                    </article>
                    <article>
                      <h3 className="park-info-header">Website</h3>
                      <a
                        href={`${park.website}`}
                        className="park-info-subheader"
                      >
                        link
                      </a>
                    </article>
                  </div>
                </div>
              </section>
            </section>
            <section className="filters-trails-list-wrapper">
              <div className="filters-trails-list">
                <div className="filters-wrapper">
                  <div className="filters"></div>
                </div>
              </div>
            </section>
            <section>
              <div className="trails-index-wrapper">
                <div className="trails-index">
                  <h2 className="trails-header-text">
                    Top Trails ({trails.length})
                  </h2>
                  <TrailIndex
                    parkId={park.id}
                    parkName={park.name}
                    // trails={trails}
                  />
                </div>
              </div>
            </section>
          </section>
        </>
      );
    }
}

export default connect(mSTP, mDTP)(ParkShow);