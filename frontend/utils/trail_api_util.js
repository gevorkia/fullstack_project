import { $CombinedState } from "redux"

export const fetchTrail = (trailId) => {
    return $.ajax({
        method: "GET",
        url: `/api/trails/${trailId}`
    })
}