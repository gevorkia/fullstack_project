import React from "react";
import { Link } from "react-router-dom";
import SearchSuggestionsContainer from "../search/search_suggestions_container";
// import Layout from "../layout/layout"

// const HomePage = () => {
//   // react hook for functional components only
//   // array destructuring assignment similar to object destructuring
//   // searchText is a getter (like this.state), setSearchText is a setter (like this.setState)
//   // React.useState is a react state hook for a single piece of state
//   const [searchText, setSearchText] = React.useState('');

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: "",
      id: "dont-display-list"
    }

    this.setSearchText = this.setSearchText.bind(this)
  }

  setSearchText(e) {
    return e => this.setState({
      searchText: e.target.value,
      id: "display-search-list"
    });
    // this.setState = {
    //   id: "display-search-list"
    // }
  }

  

  render() {
    return (
      // <Layout>
      <>
        <div className="home-content">
          {/* <div className="home-page"> */}
          <div className="home-page-background">
            <div className="banner-container">
              <div className="banner-text">Find your next favorite trail</div>
              {/* <div className="input-holder-border"> */}
              <div className="input-holder">
                <div className="magnifying-glass">
                  <img
                    alt="logo"
                    src="https://cdn-assets.alltrails.com/assets/icons/search-gray-086ffadf121a7eb1f0487dcd1d7279b4.svg"
                  />
                </div>
                <input
                  className="home-search-bar"
                  type="text"
                  placeholder="Enter a park or trail name"
                  autoComplete="off"
                  aria-label="text search input"
                  onChange={this.setSearchText()}
                  // onChange={(e) => setSearchText(e.target.value)}
                  // event handler that sets state to whatever user enters
                />
                <div className="search-suggestions">
                  <div className="suggestions-list-wrapper" id={this.state.id}>

                  {/* passing in the value of the state as a prop */}
                    <SearchSuggestionsContainer searchText={this.state.searchText} />
                  </div>
                </div>
                <button className="search-button">Search</button>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="text-body">
            <h2>100,000+ trails. 20 million explorers. Endless memories.</h2>
            <p>
              The beauty of nature doesn’t need to be hard to find. Our goal is
              simple - build the largest collection of hand-curated trail guides,
              so you can explore the outdoors with confidence. Anytime. Anywhere.
            </p>
            <Link className="bottom-signup" to="/signup">
              Sign up for free
            </Link>
          </div>
          {/* </div> */}
        </div>

        {/* </div> */}
      </>
    // </Layout>
    )
  } 
};

export default HomePage

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