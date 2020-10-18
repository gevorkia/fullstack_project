import React from "react";


class ParkShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
    }

    render() {
        return (
          <>
            <div className="sec-nav-wrapper">
              <div className="sec-nav">
                <div className="left-wrapper">
                  <div className="left-content">
                    NAV LINKS
                  </div>
                </div>
                <div className="right-wrapper">
                    <div className="right-content">
                        SEARCH BAR
                    </div>
                </div>
              </div>
              <div className="park-content-wrapper">
                <div className="park-content">    
                    <div className="photo-carousel-wrapper">
                        <div className="photo-carousel">
                            PHOTO CAROUSEL
                        </div>
                    </div> 
                    <div className="title-wrapper">
                        
                        <div className="title">
                            Best Trails in Pfeiffer Big Sur State park 
                        </div> 
                    </div>
                    <div className="ratings-wrapper">
                        <div className="ratings">
                        
                        </div>
                    </div>   
                </div>
              </div>
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