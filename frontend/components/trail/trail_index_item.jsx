import React from "react";

class TrailIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.fetchParkTrails(this.props.match.params.parkId);
  // }

  render() {
    if (!this.props.trail) return null;
    
    const {trail} = this.props;
    console.log(trail);

    const reviewStars = [];
    for (let i = 1; i < 6; i++) {
        reviewStars.push(<span key={i}>
          <img className="star" src="https://cdn-assets.alltrails.com/assets/packs/media/icons/icons_stars_active_lrg-940ee31d.svg"></img>
        </span>)
    }

    // const parkTrails = park.trails.map((trail,idx) => {
    //   return (
    //       <div className="trail-el">
    //         <div className="trail-cover-photo">{trail.coverPhoto}</div>
    //         <div className="trail-info-wrapper">
    //           <div className="trail-info">
    //             {/* <h2 className="trail-name-header">#{idx + 1} - {trail.name}</h2> */}
    //             <h2 className="trail-name-header">#1 - Sykes Hot Springs</h2>
    //             {/* <div className="trail-park-name">{park.name}</div> */}
    //             <div className="trail-park-name">Big Sur</div>
    //             {/* <div className="trail-difficulty">{trail.difficulty}</div> */}
    //             <div className="trail-difficulty">strenuous</div>
    //             <div className="review-stars">{reviewStars}</div>
    //             {/* <div className="review-stars">{reviewStars}</div> */}
    //             <div className="review-count">reviews</div>
    //             <div className="trail-length">10.2 mi</div>
    //             {/* <div className="trail-length">{trail.length}</div> */}
    //             {/* <div className="trail.summary">{trail.summary}</div> */}
    //             <div className="trail.summary">
    //               Sykes Hot Springs via Pine Ridge Trail is a 19.5 mile heavily
    //               trafficked out and back trail located near Big Sur, California
    //               that features hot springs and is rated as difficult.
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //   );
    // })

    return (
      <>
        <div className="trail-el-wrapper">
          <div className="trail-el">
            <div className="trail-cover-photo">
              <img
                src="https://cdn-assets.alltrails.com/uploads/photo/image/14098180/extra_large_9e205f73af5a6ed7c42a1a19d29a80e1.jpg"
                alt=""
              ></img>
            </div>
            <div className="trail-info-wrapper">
              <div className="trail-info">
                <h2 className="trail-name">#1 - Sykes Hot Springs</h2>

                <div className="trail-park-name">Big Sur</div>
                <div className="trail-info-sub">
                  <div className="trail-difficulty">moderate</div>
                  <div className="review-stars">{reviewStars}</div>

                  <div className="review-count">(102)</div>
                </div>
                <div className="trail-length">Length: 10.2 mi</div>

                <p className="trail-summary">
                  Sykes Hot Springs via Pine Ridge Trail is a 19.5 mile heavily
                  trafficked out and back trail located near Big Sur, California
                  that features hot springs and is rated as difficult.
                </p>
                <span className="show-more">Show more</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TrailIndexItem;
