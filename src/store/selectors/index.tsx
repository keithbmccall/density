import { RootState } from "../reducers";
import { Space } from "../types";

export const spacesSelector = (state: RootState): Space[] => state.spaces.spaces;

export const refreshingSelector = (state: RootState): boolean => state.app.isRefreshing;
