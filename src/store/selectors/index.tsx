import { RootState } from "../reducers";
import { SpacePair } from "../types";

export const spacesSelector = (state: RootState): SpacePair => state.spaces.spaces;
