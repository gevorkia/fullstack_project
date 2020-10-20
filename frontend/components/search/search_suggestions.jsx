import React from "react";

class SearchSuggestions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchParks();
  }

  render() {
    const { parks, trails } = this.props;
    if (!parks || !trails) return null;

    const suggestions = [];

    parks.forEach((park) => {
      suggestions.push(
        <li key={`park-${park.id}`}>
          <a href={`#/parks/${park.id}`} className="suggestions-list">
            {park.name}
          </a>
        </li>
      );
    });

    trails.forEach((trail) => {
      suggestions.push(
        <li key={`trail-${trail.id}`}>
          <a href={`#/trails/${trail.id}`} className="suggestions-list">
            {trail.name}
          </a>
        </li>
      );
    });

    return (
      <div className="suggestions-list-wrapper">
        <ul>{suggestions}</ul>
      </div>
    );
  }
}

export default SearchSuggestions;