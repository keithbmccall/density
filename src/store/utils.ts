import { SpacePair, SpacePayload } from "./types";
import { Maybe } from "../types";

// const spaceEnum= {
//   spc_733504183600152833: "Room A",
//   spc_733503971003466724: "Room B",
//   spc_733503588973675015: "Room C",
//   spc_733504069376671849: "Room D",
//   spc_733503808893616914: "Room E",
//   spc_733504334595097080: "Room F"
// };

export const transformSpaces = (payload: Maybe<SpacePayload>, spaces: SpacePair): SpacePair => {
  if (payload) {
    const { count, space_id: id, timestamp: timeStamp } = payload;
    return {
      ...spaces,
      [id]: {
        id,
        count,
        timeStamp
      }
    };
  }
  return spaces;
};
