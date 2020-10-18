import * as ParkAPIUtil from "../utils/park_api_util";

export const RECEIVE_PARK = "RECEIVE_PARK";
// export const RECEIVE_PARK_TRAILS = "RECEIVE_PARK_TRAILS";

const receivePark = park => {
    return {
        type: RECEIVE_PARK,
        park
    }
}

// const receiveParkTrails = trails => {
//     return {
//         type: RECEIVE_PARK_TRAILS,
//         trails
//     }
// }

// thunk action creators

export const fetchPark = parkId => {
    return dispatch => {
        return ParkAPIUtil.fetchPark(parkId)
            .then(park => {
                return dispatch(receivePark(park))
            });
    };
};

// export const fetchParkTrails = parkId => {
//     return dispatch => {
//         return ParkAPIUtil.fetchParkTrails(parkId)
//             .then(trails => {
//                 return dispatch(receiveParkTrails(trails))
//             })
//     }
// }

