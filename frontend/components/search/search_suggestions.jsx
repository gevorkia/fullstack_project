import React from "react";
import { connect } from "react-redux";
import { fetchParks } from "../../actions/park_actions";

const mSTP = (state, ownProps) => {
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
  }

  componentDidMount() {
    this.props.fetchParks();
  }

  render() {
    const { parks, trails, searchText } = this.props;

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
            >
              {trail.name}
            </a>
          </li>
        );
      });

      // console.log(suggestions);

    return (
        <ul className="sugg-list">{suggestions}</ul>
    );
  }
}

export default connect(mSTP, mDTP)(SearchSuggestions);