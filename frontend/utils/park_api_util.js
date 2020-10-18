export const fetchPark = (parkId) => {
    return $.ajax({
        method: "GET",
        url: `/api/parks/${parkId}`
    })
}

// nested route, fetch all trails(index) for a specific park 
// export const fetchParkTrails = (parkId) => {
//     return $.ajax({
//         method: "GET",
//         url: `/api/parks/${parkId}/trails`
//     })
// }