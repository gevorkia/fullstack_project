import React from "react";
import { Link } from "react-router-dom";

class TrailIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.trail) return null;
    
    const {trail, idx, parkName} = this.props;
    console.log(trail);

    const reviewStars = [];
    for (let i = 1; i < 6; i++) {
        reviewStars.push(<span key={i}>
          <img className="star" src="https://cdn-assets.alltrails.com/assets/packs/media/icons/icons_stars_active_lrg-940ee31d.svg"></img>
        </span>)
    }

    return (
      <>
        <div className="trail-el-wrapper">
          <Link to={`/trails/${trail.id}`} className="trail-index-item-link">
            <div className="trail-el">
              <div className="trail-cover-photo">
                <img src={trail.coverPhotoUrl} alt={trail.name} />
              </div>
              <div className="trail-info-wrapper">
                <div className="trail-info">
                  <h2 className="trail-name">
                    #{idx + 1} - {trail.name}
                  </h2>

                  <div className="trail-park-name">{parkName}</div>
                  <div className="trail-info-sub">
                    <div className={`trail-difficulty-${trail.difficulty}`}>{trail.difficulty}</div>
                    <div className="review-stars">{reviewStars}</div>

                    <div className="review-count">(3)</div>
                  </div>
                  <div className="trail-length">Length: {trail.length} mi</div>

                  <p className="trail-summary">{trail.summary}</p>
                  {/* <span className="show-more">Show more</span> */}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default TrailIndexItem;
