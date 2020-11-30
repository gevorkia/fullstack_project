import React from "react";
import { Link } from "react-router-dom";

class NearbyTrailItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.trail) return null;
        
        const {trail, parkName, avgRating, reviewsLength} = this.props;

        const reviewStars = [];

        for (let i = 1; i < 6; i++) {
            const starCSS = avgRating >= i ? "filled" : "unfilled";
            reviewStars.push(
            <span
                key={`stars-${i}`}
                className={`r-stars-${starCSS}`}
            ></span>
            );
        }

        return (
          //   <div className="nt-item-wrapper">
          <li className="nt-item-wrapper">
            <Link to={`/trails/${trail.id}`} className="nt-item-link">
              {/* <div className="nt-el"> */}
              <div className="nt-el">
                <img
                  src={trail.coverPhotoUrl}
                  alt={trail.name}
                  className="nt-cover-photo"
                ></img>

                {/* </div> */}
                <div className="nt-info-wrapper">
                  <div className="nt-info">
                    <h2 className="nt-name">{trail.name}</h2>

                    <div className="nt-park-name">{parkName}</div>
                    <div className="nt-info-sub">
                      <div className={`trail-difficulty-${trail.difficulty}`}>
                        {trail.difficulty}
                      </div>
                      <div className="nt-review-stars">{reviewStars}</div>

                      <div className="nt-review-count">({reviewsLength})</div>
                    </div>
                    <div className="nt-length">Length: {trail.length} mi</div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
    }
};

export default NearbyTrailItem;