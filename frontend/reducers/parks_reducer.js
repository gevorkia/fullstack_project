import { 
  RECEIVE_PARK, 
  RECEIVE_PARKS, 
  // RECEIVE_PARK_TRAILS 
} from "../actions/park_actions";

// const state = {
//   parks: [],
//   trails: [],
//   4: { parkInfo },
// }

const parksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    // debugger
    switch (action.type) {
      case RECEIVE_PARK:
        // debugger
        nextState[action.payload.park.id] = action.payload.park;
        return nextState;


      case RECEIVE_PARKS:

        let trails = [];
        action.payload.parks.forEach((park) => {
          trails = trails.concat(park.trails);
          
          // SPOOKY EXPERIMENTAL TODO:
          nextState[park.id] = park;
        })

        nextState['parks'] = action.payload.parks;
        nextState["trails"] = trails;
        return nextState;

      default:
        return state;
    }
}

export default parksReducer;