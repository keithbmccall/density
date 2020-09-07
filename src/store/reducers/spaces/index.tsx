import { SET_SPACES } from "../../actions";
import { Action, SpacesState } from "../../types";
import { transformSpaces } from "../../utils";

const initialState: SpacesState = {
  spaces: {}
};

export default (state: SpacesState = initialState, action: Action): SpacesState => {
  switch (action.type) {
    case SET_SPACES:
      return {
        spaces: { ...transformSpaces(action.payload, state.spaces) }
      };

    default:
      return state;
  }
};
