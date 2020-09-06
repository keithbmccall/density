import { SET_COUNT } from "../../actions";
import { Action, DoorwayState } from "../../types";

const initialState: DoorwayState = {
  doorwayCount: {
    count: 0,
    timeStamp: undefined
  }
};

export default (state: DoorwayState = initialState, action: Action): DoorwayState => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        doorwayCount: {
          count: action.payload.count,
          timeStamp: action.payload.timestamp
        }
      };

    default:
      return state;
  }
};
