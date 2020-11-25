import React from "react";
import SearchSuggestions from '../search/search_suggestions'
import { Link } from "react-router-dom";

class SecNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     //  this.props.fetchPark(this.props.match.params.parkId);
    // }

    render() {
        const { park } = this.props;

        if (!park) return null;


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
                    ></input>
                    <button className="secNav-search-button">
                      <div className="secNav-magnifying-glass"></div>
                    </button>
                    <div className="secNav-search-suggestions">
                      <div className="secNav-suggestions-list-wrapper">
                        <SearchSuggestions />
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