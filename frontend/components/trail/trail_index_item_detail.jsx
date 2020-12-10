import React from "react";
import { connect } from "react-redux";
import { fetchPark } from "../../actions/park_actions";
import { fetchTrail } from "../../actions/trail_actions";
import { fetchReviews } from "../../actions/review_actions";
import { openModal } from "../../actions/modal_actions";
import { sortedTrailReviews } from "../../reducers/selectors/selectors"
import { avgTrailRating } from "../../reducers/selectors/selectors";


const mSTP = (state, ownProps) => {
  // console.log("trail_detail ownProps", ownProps);

  const trail = state.entities.trails[ownProps.match.params.trailId];
  const reviews = sortedTrailReviews(state);
  const filteredReviews = trail ? reviews.filter((r) => r.trailId === trail.id) : [];
  const trailReviews = filteredReviews ? Object.values(filteredReviews) : [];

  return {
    trail,
    park: trail ? state.entities.parks[trail.parkId] : null,
    allReviews: reviews,
    reviews: trail ? filteredReviews : null,
    modal: state.ui.modal,
    avgTrailRating: avgTrailRating(trailReviews),
    currentUser: state.session.currentUser
  };
};

const mDTP = (dispatch) => {
  return {
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchPark: (parkId) => dispatch(fetchPark(parkId)),
    openModal: (modalType, id) => dispatch(openModal(modalType, id)),
  };
};


import { Link } from "react-router-dom";
import SecNavBar from "../nav_bar/sec_nav_bar";
import ReviewModal from "../reviews/review_modal";
import ReviewIndex from "../reviews/review_index";
import NearbyTrailsIndex from "./nearby_trails_index";


class TrailIndexItemDetail extends React.Component {
  constructor(props) {
    super(props)
    this.trailId = this.props.match.params.trailId;
    // console.log(this.trailId)
  }


    componentDidMount() {
        this.props.fetchTrail(this.trailId);
        this.props.fetchReviews();

        window.scrollTo(0, 0);
    }
    
    componentDidUpdate() {
        // if (!this.props.park) {
        if (!this.props.park && this.props.trail) {
          this.props.fetchPark(this.props.trail.parkId);
        }

        // if (!this.props.trail) {
        //   this.props.fetchTrail(this.trailId);
        //   this.props.fetchReviews();
        // }
    }

  render() {
    if (!this.props.trail || !this.props.park || !this.props.reviews) return null;
    
    const {trail, park, allReviews, reviews, avgTrailRating} = this.props;
    
    const reviewStars = [];

    for (let i = 1; i < 6; i++) {
      const starCSS = avgTrailRating >= i ? "filled" : "unfilled";
      reviewStars.push(
        <span
          key={`stars-${i}`}
          className={`stars-${starCSS}`}
        ></span>
      );
    }

    let mappedTrailTags = [];
    
    if (trail.tags) {
      const trailTags = Object.values(trail.tags);
  
      mappedTrailTags = trailTags.map((tag, idx) => {
        return (
          <span className="tag" key={`trailTag-${idx}`}>
            <span className="big-rounded-active">{tag.name}</span>
          </span>
        );
      })
    }

    const writeReview = (
      <>
        {this.props.currentUser ? (
          <div className="trail-review-btn-wrapper">
            <div className="review-blurb">
              Share your thoughts about the trail so others know what
              to expect!
            </div>
            <button
              className="trail-review-btn"
              onClick={() => this.props.openModal("create_review")}
            >
              Write Review
            </button>
            {/* only render review modal if modal state is set to "create_review" modal type */}
            {this.props.modal &&
            this.props.modal.modalType === "create_review" ? (
              <section className="review-idx-wrapper">
                <div className="review-idx">
                  <ReviewModal trail={trail} isEditing={false} />
                </div>
              </section>
            ) : null}
          </div>
          ) : null} 
      </>
    )    

    return (
      <>
        <div className="trail-index-item-detail-wrapper">
          <SecNavBar park={park} />
          <div className="trail-index-item-detail">
            <div className="trail-photo-header">
              <div className="trail-photo-header-content">
                <div className="trail-name-header">{trail.name}</div>
                <div className="trail-summary-info">
                  <span className={`trail-diff-${trail.difficulty}`}>
                    {trail.difficulty}
                  </span>
                  <div className="stars">{reviewStars}</div>
                  <p className="num-reviews">({reviews.length})</p>
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
                      <span className="stats-label">Elevation gain</span>
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
                <section className="tag-cloud">{mappedTrailTags}</section>
                <section className="trail-subcontent">
                  <div className="trail-subcontent-tabs">
                    <div className="trail-subcontent-tabs-desc">
                      Description
                    </div>
                  </div>
                  <div className="trail-subcontent-description">
                    {trail.description}
                  </div>
                </section>
                <section>
                  <div className="trail-subcontent-tabs">
                    <div className="trail-reviews">Reviews</div>
                  </div>
                  <div className="reviews-subheader-wrapper">
                    {writeReview}
                  </div>
                  <div className="review-index-wrapper">
                    <ReviewIndex trail={trail} reviews={reviews} />
                  </div>
                </section>
              </article>
              <article className="trail-sidebar">
                <div className="map-preview">
                  <img
                    src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-s+4D9709(${trail.lng},${trail.lat})/${trail.lng},${trail.lat},13.5,0/400x300@2x?access_token=${window.mapboxAPIKey}`}
                    alt="map-preview"
                  />

                  {/* <span>View Full Map</span> */}
                </div>
                <section className="nearby-trails-sidebar">
                  <div className="nearby-trails-sidebar-wrapper">
                    <div className="nearby-trails">Nearby Trails</div>
                    <div className="nearby-trails-index">
                      <NearbyTrailsIndex
                        parkId={park.id}
                        parkName={park.name}
                        allReviews={allReviews}
                        currentTrailName={trail.name}
                      />
                    </div>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mSTP, mDTP)(TrailIndexItemDetail);