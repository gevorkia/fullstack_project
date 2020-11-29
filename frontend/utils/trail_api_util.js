import { $CombinedState } from "redux"

export const fetchTrail = (trailId) => {
    return $.ajax({
        method: "GET",
        url: `/api/trails/${trailId}`
    })
};

// nested route, fetch  all reviews(index) for a specific trail 
export const fetchTrailReviews = (trailId) => {
  // console.log('hiihihi');
  return $.ajax({
    method: "GET",
    url: `/api/trails/${trailId}/reviews`
  });
};