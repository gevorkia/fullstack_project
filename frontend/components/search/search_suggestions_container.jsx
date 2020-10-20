import React from "react";
import { connect } from "react-redux";
import SearchSuggestions from "./search_suggestions";
import { fetchParks } from "../../actions/park_actions";

const mSTP = (state, ownProps) => {
  // debugger

  // console.log("mtstp", state.entities.parks);
  return {
    parks: state.entities.parks.parks,
    trails: state.entities.parks.trails
  };
};

const mDTP = (dispatch) => {
  return {
    fetchParks: () => dispatch(fetchParks()),
  };
};

export default connect(mSTP, mDTP)(SearchSuggestions);