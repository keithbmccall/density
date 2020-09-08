import { Dispatch } from "redux";
import { Space } from "../../store/types";

export interface SpacesProps {
  spaces: Space[];
}

export type InitSpaceSocket = (dispatch: Dispatch) => Promise<void>;

export type InitSpaceList = (dispatch: Dispatch) => Promise<void>;
