import { RootState } from "../reducers";
import { DoorwayCount } from "../types";

export const doorwayCountSelector = (state: RootState): DoorwayCount => state.doorway.doorwayCount;
