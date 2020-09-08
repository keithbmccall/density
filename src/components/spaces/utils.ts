import { getDensitySocket, getDensitySpaces } from "../../api";
import { InitSpaceList, InitSpaceSocket } from "./types";
import { setCount, setSpaces } from "../../store/actions";

export const initSpaceList: InitSpaceList = async dispatch => {
  const response = await getDensitySpaces();
  if (response) {
    dispatch(setSpaces(response.results));
  }
};

export const initSpaceSocket: InitSpaceSocket = async dispatch => {
  const response = await getDensitySocket();

  if (response) {
    const ws = new WebSocket(response.url);

    ws.onmessage = e => {
      dispatch(setCount(e));
    };

    ws.onerror = e => {
      console.log("error", { e });
    };

    ws.onclose = e => {
      console.log("close", { e });
    };
  }
};
