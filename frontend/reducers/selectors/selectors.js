export const defaultActivity = (state) => {
  const activity = Object.values(state.entities.tags)
  activity.find((tag) => {
      tag.name === "hiking"
  });
  return activity.id;
};

export const filteredTagsByType = (state, tagType) => {
  const tags = Object.values(state.entities.tags);
  const filteredTags = tags.filter((tag) => tag.tagType === tagType);

  return filteredTags;
  // like so [ { id: 2, name: 'nature', tagType: 'feature' } ]
};