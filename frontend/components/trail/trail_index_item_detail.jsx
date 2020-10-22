import React from "react";
import { Link } from "react-router-dom";
import TrailIndexItemDetailMapContainer from "./trail_index_item_detail_map_container";

class TrailIndexItemDetail extends React.Component {
  constructor(props) {
    super(props)
  }


    componentDidMount() {
        // debugger
        this.props.fetchTrail(this.props.match.params.trailId);
        // this.props.fetchPark(this.props.trail.parkId);
        window.scrollTo(0, 0);
    }
    
    componentDidUpdate() {
        if (!this.props.park) {
            this.props.fetchPark(this.props.trail.parkId);
        }
    }

  render() {
    if (!this.props.trail || !this.props.park) return null;
    // if (!this.props.trail) return null;
    
    const {trail, park} = this.props;
    // const {trail} = this.props;

    const reviewStars = [];
    for (let i = 1; i < 6; i++) {
        reviewStars.push(
        <span key={i}>
            <img
            className="star"
            src="https://cdn-assets.alltrails.com/assets/packs/media/icons/icons_stars_active_lrg-940ee31d.svg"
            ></img>
        </span>
        );
    }

    // const tags = ["Hiking", "Camping", "River", "Forest", "Wildflowers", `Nature+{ }+trips`]

    // tags.name.map(tag => {
    //   return (
    //     <span className="tag">
    //       <span className="big-rounded-active">tag</span>
    //     </span>
    //   );
    // })

    return (
      <>
        {/* secondary nav */}
        <div className="trail-index-item-detail-wrapper">
          <div className="trail-index-item-detail">
            <div className="trail-photo-header">
              <div className="trail-photo-header-content">
                <div className="trail-name-header">{trail.name}</div>
                <div className="trail-summary-info">
                  <span className="trail-difficulty">{trail.difficulty}</span>
                  <div className="review-stars">{reviewStars}</div>
                  <p className="num-reviews">(2)</p>
                </div>
                <div className="park-name-wrapper">
                  <Link to={`/parks/${park.id}`} className="park-name">
                    {park.name}
                  </Link>
                </div>
              </div>
              <div className="trail-photo-wrapper">
                <img src={trail.coverPhotoUrl} alt="trail-cover-photo"></img>
              </div>
            </div>
            <div></div>
            <div className="trail-action-bar">
              <ul className="trail-action-bar-items">
                <li className="trail-directions">
                  <a
                    href={`https://www.google.com/maps/dir/Current+Location/${trail.lat},${trail.lng}`}
                    className="directions-btn-link"
                  >
                    <div className="direction-btn-nav-text">Directions</div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="trail-content-wrapper">
              <article className="trail-content">
                <div className="trail-summary-detail">{trail.summary}</div>
                <section className="trail-stats">
                  <>
                    <div className="distance-wrapper">
                      <span className="stats-label">Length</span>
                      <span className="stats-label-data">
                        {trail.length} mi
                      </span>
                    </div>
                    <div className="elevation-wrapper">
                      <span className="stats-label">Elevation</span>
                      <span className="stats-label-data">
                        {trail.elevationGain} ft
                      </span>
                    </div>
                    <div className="route-type-wrapper">
                      <span className="stats-label">Route type</span>
                      <span className="stats-label-data">
                        {trail.routeType}
                      </span>
                    </div>
                  </>
                </section>
                <section className="tag-cloud">
                  {/* {tags} */}
                  <span className="tag">
                    <span className="big-rounded-active">Camping</span>
                  </span>
                  <span className="tag">
                    <span className="big-rounded-active">Hiking</span>
                  </span>
                  <span className="tag">
                    <span className="big-rounded-active">Backpacking</span>
                  </span>
                  <span className="tag">
                    <span className="big-rounded-active">River</span>
                  </span>
                  <span className="tag">
                    <span className="big-rounded-active">Forest</span>
                  </span>
                  <span className="tag">
                    <span className="big-rounded-active">Wildflowers</span>
                  </span>
                  <span className="tag">
                    <span className="big-rounded-active">Nature Trips</span>
                  </span>
                  <span className="tag">
                    <span className="big-rounded-active">Walking</span>
                  </span>
                  <span className="tag">
                    <span className="big-rounded-active">Wildlife</span>
                  </span>
                </section>
                <section className="trail-subcontent">
                  <div className="trail-subcontent-tabs">
                    <div className="trail-subcontent-tabs-desc">
                      Description
                    </div>
                  </div>
                  <div className="trail-subcontent-description">
                    {trail.description}
                  </div>
                  <div className="trail-subcontent-tabs">
                    <div className="weather">Weather</div>
                    <div className="uv-index">UV Index</div>
                    <div className="daylight">Daylight</div>
                  </div>
                  <div className="weather-widget">
                    Weather widget goes here!
                  </div>
                </section>
                <section>
                  <div className="trail-subcontent-tabs">
                    <div className="trail-reviews">
                      Reviews
                    </div>
                  </div>
                </section>
              </article>
              <article className="trail-sidebar">sidebar</article>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TrailIndexItemDetail;