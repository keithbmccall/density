import { SET_COUNT, SET_SPACES } from "../../actions";
import { Action, SpacesState } from "../../types";
import { parseCount, parseSpaces } from "../../utils";

const initialState: SpacesState = {
  spaces: []
};

export default (state: SpacesState = initialState, action: Action): SpacesState => {
  switch (action.type) {
    case SET_COUNT:
      return {
        spaces: parseCount(action.payload, state.spaces)
      };
    case SET_SPACES:
      return {
        spaces: parseSpaces(action.payload, state.spaces)
      };

    default:
      return state;
  }
};
