import React from "react";
import { connect } from "react-redux";
import { fetchTrail, fetchTrailReviews } from "../../actions/trail_actions";
import { fetchPark } from "../../actions/park_actions";
import { openModal } from "../../actions/modal_actions";
import { sortedTrailReviews } from "../../reducers/selectors/selectors"

const mSTP = (state, ownProps) => {
  const trail = state.entities.trails[ownProps.match.params.trailId];
  // const reviews = sortedTrailReviews(state, ownProps.match.params.trailId);
  const reviews = sortedTrailReviews(state);
  // debugger
  return {
    trail,
    park: trail ? state.entities.parks[trail.parkId] : null,
    reviews: reviews,
    // reviews: Object.values(state.entities.reviews),
    trailTags: Object.values(state.entities.tags),
    modal: state.ui.modal,
    //   park: state.entities.parks[trail.parkId]
    //   park: state.entities.parks[state.entities.trails[ownProps.match.params.trailId.park_id]]
  };
};

const mDTP = (dispatch) => {
  return {
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId)),
    fetchPark: (parkId) => dispatch(fetchPark(parkId)),
    openModal: (modalType) => dispatch(openModal(modalType)),
  };
};


import { Link } from "react-router-dom";
// import TrailIndexItemDetailMap from "./trail_index_item_detail_map";
import TrailIndex from "./trail_index"
import SecNavBar from "../nav_bar/sec_nav_bar";
import ReviewModal from "../reviews/review_modal";
import ReviewIndex from "../reviews/review_index";


class TrailIndexItemDetail extends React.Component {
  constructor(props) {
    super(props)
    this.trailId = this.props.match.params.trailId;
    console.log("LALA", this.props)
  }


    componentDidMount() {
        // debugger
        this.props.fetchTrail(this.trailId);
        this.props.fetchTrailReviews(this.trailId);

        window.scrollTo(0, 0);
    }
    
    componentDidUpdate() {
        // if (!this.props.park) {
        if (!this.props.park && this.props.trail) {
          this.props.fetchPark(this.props.trail.parkId);
        }
    }

  render() {
    if (!this.props.trail || !this.props.park || !this.props.reviews) return null;


    // console.log('my reviews are ', this.props.reviews);

    // if (!this.props.trail) return null;
    
    const {trail, park, reviews, trailTags, avgRating} = this.props;
    // const {trail} = this.props;
    console.log("trail item detail", this.props);

    const reviewStars = [];

    for (let i = 1; i < 6; i++) {
      const starCSS = avgRating >= i ? "filled" : "unfilled";
      reviewStars.push(
        <span
          key={`stars-${i}`}
          className={`stars-${starCSS}`}
        ></span>
      );
    }


    // const reviewStars = [];
    // for (let i = 1; i < 6; i++) {
    //     reviewStars.push(
    //     <span key={i}>
    //         <img
    //         className="star"
    //         src="https://cdn-assets.alltrails.com/assets/packs/media/icons/icons_stars_active_lrg-940ee31d.svg"
    //         ></img>
    //     </span>
    //     );
    // }

    // const tags = ["Hiking", "Camping", "River", "Forest", "Wildflowers"]
    // console.log(trailTags)
    const mappedTrailTags = trailTags.map((tag, idx) => {
      return (
        <span className="tag" key={`trailTag-${idx}`}>
          <span className="big-rounded-active">{tag.name}</span>
        </span>
      );
    })

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
                  <div className="review-stars">{reviewStars}</div>
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
                    {/* <div className="avg-rating">Reviewstars</div> */}
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
                      {this.props.modal === "create_review" ? (
                        <section className="review-idx-wrapper">
                          <div className="review-idx">
                            <ReviewModal trail={trail} />
                          </div>
                        </section>
                      ) : null}
                    </div>
                  </div>
                  <div className="review-index-wrapper">
                    <ReviewIndex
                      trail={trail}
                      reviews={reviews}
                    />
                  </div>
                </section>
              </article>
              <article className="trail-sidebar">
                <div className="map-preview">
                  <img
                    src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-s+4D9709(${trail.lng},${trail.lat})/${trail.lng},${trail.lat},12,0/150x150@2x?access_token=pk.eyJ1IjoiZ2V2b3JraWEiLCJhIjoiY2tnZ3hrdGxjMDAwdzJ0c2FldnNjYWRnZyJ9.WHAlo3XQoW9zZj9ObJ5qCQ`}
                    // src={`"https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s-l+000(${trail.lng},${trail.lat})/${trail.lng},${trail.lat},12/150x150?access_token=pk.eyJ1IjoiZ2V2b3JraWEiLCJhIjoiY2tnZ3hrdGxjMDAwdzJ0c2FldnNjYWRnZyJ9.WHAlo3XQoW9zZj9ObJ5qCQ`}
                    alt="map-preview"
                  />

                  {/* <span>View Full Map</span> */}
                </div>
                {/* <TrailIndex park={park.id} /> */}
              </article>
            </div>
          </div>
          <article className="trail-sidebar">
            <div className="nearby-trails-wrapper">
              <h2 className="nearby-trails-header"></h2>
            </div>
          </article>
        </div>
      </>
    );
  }
}

export default connect(mSTP, mDTP)(TrailIndexItemDetail);