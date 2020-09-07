import { Action as ReduxAction } from "redux";
import { Maybe } from "../types";

export interface SpacePayload {
  count: number;
  space_id: string;
  timestamp: string;
}

export interface Action extends ReduxAction {
  payload?: Maybe<SpacePayload>;
}

export interface AppState {
  isLoading: boolean;
}

// type SpaceId =
//   | "spc_733504183600152833"
//   | "spc_733503971003466724"
//   | "spc_733503588973675015"
//   | "spc_733504069376671849"
//   | "spc_733503808893616914"
//   | "spc_733504334595097080";

export type SpacePair = {
  [id: string]: Maybe<Space>;
};

export interface Space {
  id: string;
  count: number;
  timeStamp: string | undefined;
}

export interface SpacesState {
  spaces: SpacePair;
}
