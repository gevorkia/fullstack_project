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
    
    const {trail} = this.props;

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
                                <div className="review-stars">
                                    {reviewStars}
                                </div>
                                <p className="num-reviews">(102)</p>
                                <div>
                                    <a href="" className="park-name"></a>
                                </div>
                            </div>
                        </div>
                        <div className="trail-photo-wrapper">
                            <img src={trail.coverPhotoUrl} alt="trail-cover-photo"></img>          
                        </div>
                    </div>
                    <div className="trail-photo-sub-bar">
                        <a
                        href={`https://www.google.com/maps/dir/Current+Location/${trail.lat},${trail.lng}`}
                        className="trail-action"
                        ></a>
                    </div>  
                </div>
            </div>
        </>
    )
  }
}

export default TrailIndexItemDetail