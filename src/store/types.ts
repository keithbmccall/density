import { Action as ReduxAction } from "redux";

export interface SpacePayload {
  count: number;
  space_id: string;
  timestamp: string;
  type: string;
}

export interface SpacesPayload {
  id: string;
  name: string;
  updated_at: string;
  current_count: number;
}

export interface Action extends ReduxAction {
  payload?: any;
}

export interface AppState {
  isRefreshing: boolean;
}

export interface Space {
  id: string;
  name: string;
  count: number;
  timeStamp: string | undefined;
}

export interface SpacesState {
  spaces: Space[];
}
