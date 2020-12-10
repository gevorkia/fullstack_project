import * as TrailAPIUtil from "../utils/trail_api_util";

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";
// export const RECEIVE_TRAIL_REVIEWS = "RECEIVE_TRAIL_REVIEWS";

const receiveTrail = (payload) => {
    // debugger
    return {
        type: RECEIVE_TRAIL,
        payload
    }
}

// const receiveTrailReviews = (payload) => {
//   return {
//     type: RECEIVE_TRAIL_REVIEWS,
//     payload,
//   };
// };


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

// export const fetchTrailReviews = (trailId) => (dispatch) => {
//   // console.log("hiihihi okk actionss");
//   return TrailAPIUtil.fetchTrailReviews(trailId).then((reviews) =>
//     dispatch(receiveTrailReviews(reviews))
//   );
// };