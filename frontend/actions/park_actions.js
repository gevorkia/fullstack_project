import * as ParkAPIUtil from "../utils/park_api_util";

export const RECEIVE_PARK = "RECEIVE_PARK";
export const RECEIVE_PARKS = "RECEIVE_PARKS";
export const RECEIVE_PARK_TRAILS = "RECEIVE_PARK_TRAILS";

const receivePark = payload => {
    return {
        type: RECEIVE_PARK,
        payload
    }
}

const receiveParks = (payload) => {
  return {
    type: RECEIVE_PARKS,
    payload
  };
};

const receiveParkTrails = payload => {
    return {
        type: RECEIVE_PARK_TRAILS,
        payload
    }
}

// thunk action creators

export const fetchPark = parkId => {
    return dispatch => {
        // debugger
        return ParkAPIUtil.fetchPark(parkId)
            .then(park => {
                // debugger
                return dispatch(receivePark(park))
            });
    };
};

export const fetchParks = () => {
    return dispatch => {
        return ParkAPIUtil.fetchParks()
            .then(parks => {
                return dispatch(receiveParks(parks))
            });
    };
};

export const fetchParkTrails = parkId => {
    return dispatch => {
        return ParkAPIUtil.fetchParkTrails(parkId)
            .then(trails => {
                return dispatch(receiveParkTrails(trails))
            })
    }
}

