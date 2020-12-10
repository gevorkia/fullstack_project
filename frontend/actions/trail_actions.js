import * as TrailAPIUtil from "../utils/trail_api_util";

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";

const receiveTrail = (payload) => {
    // debugger
    return {
        type: RECEIVE_TRAIL,
        payload
    }
}

// thunk action creators

export const fetchTrail = trailId => {
    return dispatch => {
        return TrailAPIUtil.fetchTrail(trailId)
            .then(trail => {
                // debugger
                console.log('GOT MY TRAIL', trail);
                return dispatch(receiveTrail(trail));
            });
    };
};

