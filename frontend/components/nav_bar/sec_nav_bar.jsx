import React from "react";
import SearchSuggestions from '../search/search_suggestions'
import { Link } from "react-router-dom";

class SecNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      id: "dont-display-list",
      focus: false,
    };

    this.setSearchText = this.setSearchText.bind(this);
  }

  // componentDidMount() {
  //     //  this.props.fetchPark(this.props.match.params.parkId);
  // }

  setSearchText(e) {
    console.log("secNavsearchtxt");
    e.preventDefault();
    this.setState({
      searchText: e.target.value,
      id: "display-search-list",
    });
  }

  render() {
    const { park } = this.props;

    if (!park) return null;
    console.log(this.state.id)
    return (
      <>
        <section className="sec-nav-wrapper">
          <div className="sec-nav">
            <div className="left-wrapper">
              <div className="left-content">
                <div className="location">United States of America > </div>
                <div className="location">California > </div>
                <Link
                  to={`/parks/${park.id}`}
                  className="location"
                  id="park-link"
                >
                  {park.name}
                </Link>
              </div>
            </div>
            <div className="right-wrapper">
              <div className="secNav-input-holder">
                <input
                  className="secNav-search-bar"
                  type="text"
                  placeholder="Enter a park or trail name"
                  autoComplete="off"
                  aria-label="text search input"
                  onChange={this.setSearchText}
                ></input>
                <button className="secNav-search-button">
                  <div className="secNav-magnifying-glass"></div>
                </button>
                <div className="secNav-search-suggestions">
                  <div
                    className="secNav-suggestions-list-wrapper"
                    id={this.state.id}
                  >
                    <SearchSuggestions searchText={this.state.searchText} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SecNavBar;