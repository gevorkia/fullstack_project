export const defaultActivity = (state) => {
  const activity = Object.values(state.entities.tags)
  activity.find((tag) => {
      tag.name === "hiking"
  });
  return activity.id;
};

export const filteredTagsByType = (state, tagType) => {
  const tags = Object.values(state.entities.tags);
  const filteredTags = tags.filter((tag) => {
    // console.log(tag)

    return tag.tagType === tagType;
  });
  
  return filteredTags;
  // like so [ { id: 2, name: 'nature', tagType: 'feature' } ]
};

export const avgTrailRating = (reviews) => {
  if (!reviews) return 0;
  // console.log(reviews)
  let sumRatings = 0;
  
  reviews.forEach(review => (sumRatings += review.rating));
  
  const avg = sumRatings/(reviews.length)
  return avg
}

export const avgParkRating = (reviews) => {
  if (!reviews) {
    return 0;
  } else {
    let sumRatings = 0;
    reviews.forEach((review) => (sumRatings += review.rating));
    const avg = sumRatings / reviews.length;
    // console.log(avg)
    return avg;
  }
}

export const sortedTrailReviews = (state) => {
  const reviews = Object.values(state.entities.reviews);
  // console.log("selector", reviews)

  const sortedReviews = reviews.sort((a, b) => {
    if (a.activityDate > b.activityDate) return -1;
    if (a.activityDate < b.activityDate) return 1;
    return 0;
  });
  // console.log("sortedReviews", sortedReviews);
  return sortedReviews;
}