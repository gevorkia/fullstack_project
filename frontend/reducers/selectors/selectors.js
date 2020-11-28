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
  if (!reviews) return 0;
  // console.log(reviews)
  let sumRatings = 0;
  reviews.forEach(review => (sumRatings += review.rating));
  const avg = sumRatings/(reviews.length)
  return avg
}