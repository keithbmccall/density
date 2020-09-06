import { Action as ReduxAction } from "redux";

export interface Action extends ReduxAction {
  payload?: any;
}

export interface AppState {
  isLoading: boolean;
}

export interface DoorwayCount {
  count: number;
  timeStamp: string | undefined;
}
export interface DoorwayState {
  doorwayCount: DoorwayCount
}
