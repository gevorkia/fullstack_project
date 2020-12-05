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
    this.removeSearchText = this.removeSearchText.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  // componentDidMount() {
  //     //  this.props.fetchPark(this.props.match.params.parkId);
  // }

  setSearchText(e) {
    // console.log("secNavsearchtxt");
    e.preventDefault();
    this.setState({
      searchText: e.target.value,
      id: "display-search-list",
    });
  };

  removeSearchText(e) {
    this.setState({
      searchText: e.target.value,
      id: "dont-display-list",
    });
  };

  handleFocus(e) {
    // onFocus(e)
    e.preventDefault();

    if (this.state.focus) return;

    this.setState({ focus: true });
    this.setSearchText(e);
    console.log("focus");
  }

  handleBlur(e) {
    // console.log(e.currentTarget);
    // console.log(e.target);
    // console.log(e.relatedTarget);

    e.preventDefault();

    if (!this.state.focus) {
      return;
    }

    if (e.relatedTarget) {
      const path = e.relatedTarget.getAttribute("href");
      this.props.history.push(path);
    } else {
      this.setState({ focus: false });
      this.removeSearchText(e);
      console.log("blur");
    }
  }

  render() {
    const { park } = this.props;

    if (!park) return null;
    // console.log(this.state.id)
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
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                />
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