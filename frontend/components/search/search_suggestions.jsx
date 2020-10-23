import React from "react";

class SearchSuggestions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchParks();
  }

  render() {
    // console.log(this.props.searchText);
    const { parks, trails, searchText } = this.props;
    if (!parks || !trails ) return null;

    const suggestions = [];

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
            <a href={`#/trails/${trail.id}`} className="suggestions-list">
              {trail.name}
            </a>
          </li>
        );
      });

    return (
      // <div className="suggestions-list-wrapper">
        <ul className="sugg-list">{suggestions}</ul>
      // </div>
    );
  }
}

export default SearchSuggestions;