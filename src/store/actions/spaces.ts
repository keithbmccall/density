import { Action } from "../types";

export const SET_SPACES = "SET_SPACES";
export const SET_COUNT = "SET_COUNT";

export const setSpaces = (response: Response): Action => ({
  type: SET_SPACES,
  payload: response
});

export const setCount = (e: WebSocketMessageEvent): Action => ({
  type: SET_COUNT,
  payload: JSON.parse(e.data).payload
});
