import React from "react";


class ParkShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      // debugger
      this.props.fetchPark(this.props.match.params.parkId);
      
      // // debugger;
      // console.log(this.props)
      
    }

    render() {
      // debugger
      // console.log(this.props)

      // const { pokemon, loading } = this.props;

      // if (loading) {
        // return <LoadingIcon />;
      // }

      // const { park } = this.props;
      

      // let toRender;

      // if (this.props.parks) {
      //   toRender = this.props.park;
      //   // toRender = this.props.parks.map((park) => (<h1>my park is {park.name}</h1>));
      // } else {
      //   toRender = <h1>loading</h1>;
      // }
        // if (!this.props.park) return "loading";

        const tagsArr = ["hiking", "forest", "nature-trips", "river"]

        const tags = tagsArr.map((tag,idx) => {
          return <ul className="park-tag" key={idx}>{tag}</ul>
        })   

        const parkInfoTitlesArr = ["Acreage", "Contact", "Link"]
        const parkInfoResArr = ["1,006 acres", "831-667-1112", "website"]

        
        const parkInfoTitles = parkInfoTitlesArr.map((title, idx) => {
          return <ul className="park-info-title" key={idx}>{title}</ul>
        })
        
        
        const parkInfoRes = parkInfoResArr.map((res, idx) => {
          return <ul className="park-info-res" key={idx}>{res}</ul>
        })
        

        return (
          <>
            {/* {toRender} */}
            <section className="sec-nav-wrapper">
              <div className="sec-nav">
                <div className="left-wrapper">
                  <div className="left-content">NAV LINKS</div>
                </div>
                <div className="right-wrapper">
                  <div className="right-content">
                    {/* SEARCH BAR */}
                    <div className="secNav-input-holder">
                      <input
                        className="secNav-home-search-bar"
                        type="text"
                        placeholder="Enter a park or trail name"
                        autoComplete="off"
                        aria-label="text search input"
                      ></input>
                      <button className="secNav-search-button">
                        <div className="secNav-magnifying-glass">
                          <img
                            alt="logo"
                            src="https://toppng.com/public/uploads/preview/search-magnifying-glass-icon-png-grey-1156361611872u4ycd60h.png"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="park-content-wrapper">
              <section className="park-content">
                <div className="photo-carousel-wrapper">
                  <div className="photo-carousel">PHOTO CAROUSEL</div>
                </div>
                <div className="title-wrapper">
                  <div className="title">
                    <h1>Best Trails in Pfeiffer Big Sur State Park</h1>
                    {/* <h1>Best Trails in {this.props.park.name}</h1> */}
                    {/* {toRender} */}
                    {/* {this.props.park ? (
                      <h1>Best Trails in {this.props.park.name}</h1>
                    ) : (
                      <h1>Loading</h1>
                      // ""
                    )} */}
                  </div>
                </div>
                <div className="ratings-wrapper">
                  <div className="ratings-star">Ratings</div>
                  <div className="ratings-num">1,045 Reviews</div>
                </div>
                <div className="park-text-wrapper">
                  <div className="park-summary">
                    Looking for a great trail in Pfeiffer Big Sur State Park,
                    California? AllTrails has 10 great hiking trails, forest
                    trails, river trails and more, with hand-curated trail maps
                    and driving directions as well as detailed reviews and
                    photos from hikers, campers, and nature lovers like you.
                    Just looking to take a quick stroll? We've got 5 easy trails
                    in Pfeiffer Big Sur State Park ranging from 0.8 to 2.5 miles
                    and from 216 to 616 feet above sea level. Start checking
                    them out and you'll be out on the trail in no time!
                  </div>
                  <div className="park-desc-header">Description</div>
                  <div className="park-desc">
                    There are many scenic trails in Pfeiffer Big Sur State Park.
                    Enjoy the wildlife and many different trees in the park.
                  </div>
                </div>
                <section className="park-tags">{tags}</section>
                <div className="park-map">MAP</div>
                <div className="park-links-wrapper">
                  <h3 className="park-links">DIRECTIONS</h3>
                </div>
                <div className="park-info-wrapper">
                  <h3 className="park-info-header">Park Information</h3>
                  <div className="park-info">
                    <div className="park-info-titles">{parkInfoTitles}</div>
                    <div className="park-info-results">{parkInfoRes}</div>
                  </div>
                </div>
              </section>
              <section className="filters-trails-list-wrapper">
                <div className="filters-trails-list">
                  <div className="filters-wrapper">
                    <div className="filters"></div>
                  </div>
                </div>
              </section>
            </div>
          </>

          //   <>
          //     <div className="park-content">
          //       <div className="park-content-wrapper">
          //         <div className="sec-nav">
          //           <div className="sec-nav-location-left-wrapper">
          //             <div className="sec-nav-search-right-wrapper">
          //           {/* <form className="text-search-right">
          //             <div className="sec-nav-input-holder">
          //               <div className="sec-nav-magnifying-glass">
          //                 <img
          //                   alt="logo"
          //                   src="https://rainbowpiecollective.files.wordpress.com/2013/12/1462599_10201858095712591_1476539769_o.jpg"
          //                 />
          //               </div>
          //               <input
          //                 className="sec-nav-home-search-bar"
          //                 type="text"
          //                 placeholder="Enter a park or trail name"
          //                 autoComplete="off"
          //                 aria-label="text search input"
          //               ></input>
          //               <button className="sec-nav-search-button">Search</button>
          //             </div>
          //           </form>  */}
          //           </div>
          //         </div>
          //         </div>
          //       </div>
          //     </div>
          //   </>
        );
    }
}

export default ParkShow;