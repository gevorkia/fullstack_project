import React from "react";
import TrailIndexItem from "./trail_index_item";

const TrailIndex = ({ trails, parkName }) => {
  return (
    <ul>
      {trails.map((trail) => (
        <TrailIndexItem
          key={trail.id}
          trail={trail}
          parkName={parkName}
        />
      ))}
    </ul>
  );
};

export default TrailIndex;