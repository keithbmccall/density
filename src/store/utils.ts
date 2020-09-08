import { Space, SpacePayload, SpacesPayload } from "./types";
import { Maybe } from "../types";

export const parseCount = (payload: Maybe<SpacePayload>, spaces: Space[]): Space[] => {
  if (payload && payload.type === "count") {
    const { count, space_id: id, timestamp: timeStamp } = payload;

    return spaces.map(space => {
      if (space.id === id) {
        return {
          ...space,
          count,
          timeStamp
        };
      }

      return space;
    });
  }

  return spaces;
};

export const parseSpaces = (payload: Maybe<SpacesPayload[]>, spaces: Space[]): Space[] => {
  if (payload) {
    return payload
      .map(result => {
        const { id, name, updated_at: timeStamp, current_count: count } = result;
        return { id, name, timeStamp, count };
      })
      .sort((a, b) => b.count - a.count);
  }

  return spaces;
};
