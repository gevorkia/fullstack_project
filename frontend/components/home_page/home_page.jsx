import React from "react";
import { Link } from "react-router-dom";
// import Layout from "../layout/layout"


const HomePage = () => (
  // <Layout>
  <>
    <div className="content">
      {/* <div className="home-page"> */}
      <div className="home-page-background">
        <div className="banner-container">
          <div className="banner-text">Find your next favorite trail</div>
          {/* <div className="input-holder-border"> */}
            <div className="input-holder">
              <div className="magnifying-glass">
                <img
                  alt="logo"
                  src="https://rainbowpiecollective.files.wordpress.com/2013/12/1462599_10201858095712591_1476539769_o.jpg"
                />
              </div>
              <input
                className="home-search-bar"
                type="text"
                placeholder="Enter a park or trail name"
                autoComplete="off"
                aria-label="text search input"
              ></input>
              <button className="search-button">Search</button>
            </div>
          {/* </div> */}
        </div>
      </div>
      <div className="text-body">
        <h2>100,000+ trails. 20 million explorers. Endless memories.</h2>
        <p>
          The beauty of nature doesn’t need to be hard to find. Our goal is
          simple - build the largest collection of hand-curated trail guides, so
          you can explore the outdoors with confidence. Anytime. Anywhere.
        </p>
        <Link className="bottom-signup" to="/signup">
          Sign up for free
        </Link>
      </div>
      {/* </div> */}
    </div>

    {/* </div> */}
  </>
  //{" "}
  // </Layout>
);


// images
    // <img
    //   className="home-page-img"
    //   src="https://www.travelweekly.com/uploadedImages/All_TW_Art/2018/0108/T0101PATAGONIA1_C_AA.jpg?n=4554"
    // />
    // <img
    //   className="home-page-img"
    //   src="https://ultimateadventures.com/wp-content/uploads/2018/10/Ultimate-Patagonia-Hiking-Camping-Holiday.jpg"
    // />

    // <img
    //   className="home-page-img"
    //   src="https://bookatrekking.com/data/images/2018/09/w-trek-patagonia-torres-del-paine-trekking-hiking__header.jpg"
    // />


export default HomePage






// const HomePage = ({curentUser, logoutUser}) => {
//       const sessionLinks = () => (
//         <nav className="login-signup">
//           <Link to="/login">Login</Link>
//           &nbsp;or&nbsp;
//           <Link to="/signup">Sign up!</Link>
//         </nav>
//       );
//       const personalGreeting = () => (
//         <hgroup className="header-group">
//           <h2 className="header-name">Hi, {currentUser.username}!</h2>
//           <button className="header-button" onClick={logout}>
//             Log Out
//           </button>
//         </hgroup>
//       );

//     return (
//         <div>
            
//         </div>
//     )
// }

// export default HomePage