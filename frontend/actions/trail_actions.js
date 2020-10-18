import * as TrailAPIUtil from "../utils/trail_api_util";

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";

const receiveTrail = (trail) => {
    return {
        type: RECEIVE_TRAIL,
        trail
    }
}


// thunk action creators

export const fetchTrail = trailId => {
    return dispatch => {
        return TrailAPIUtil.fetchTrail(trailId)
            .then(trail => {
                return dispatch(receiveTrail(trail))
            });
    };
};