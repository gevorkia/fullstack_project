import React from "react";
import { connect } from "react-redux";
import { fetchParks } from "../../actions/park_actions";

const mSTP = (state, ownProps) => {
  // debugger

  // console.log("mtstp", state.entities.parks);
  return {
    parks: state.entities.parks.parks,
    trails: state.entities.parks.trails,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchParks: () => dispatch(fetchParks()),
  };
};

class SearchSuggestions extends React.Component {
  constructor(props) {
    super(props);
    // this.changeFocus = this.changeFocus.bind(this)

    this.state = {
      focus: this.props.focus
    };
  }

  componentDidMount() {
    this.props.fetchParks();
  }

  // changeFocus() {
  //   console.log("change focus")
  //   this.setState({ focus: false });
  // }

  render() {
    // console.log(this.props);
    const { parks, trails, searchText, focus } = this.props;
    // console.log(searchText);


    if (!parks || !trails ) return null;

    const suggestions = [];
    
    // console.log("parks", parks)

    parks
      .filter((park) => park.name.toLowerCase().includes(searchText))
      .forEach((park) => {
        suggestions.push(
          <li key={`park-${park.id}`} className="park-suggestions">
            <a href={`#/parks/${park.id}`} className="suggestions-list">
              {park.name}
            </a>
          </li>
        );
      });

    trails
      .filter((trail) => trail.name.toLowerCase().includes(searchText))
      .forEach((trail) => {
        suggestions.push(
          <li key={`trail-${trail.id}`} className="trail-suggestions">
            <a
              href={`#/trails/${trail.id}`}
              className="suggestions-list"
              // onClick={this.changeFocus}
            >
              {trail.name}
            </a>
          </li>
        );
      });

      // console.log(suggestions);

    return (
      // <div className="suggestions-list-wrapper">
        <ul className="sugg-list">{suggestions}</ul>
      // </div>
    );
  }
}

export default connect(mSTP, mDTP)(SearchSuggestions);