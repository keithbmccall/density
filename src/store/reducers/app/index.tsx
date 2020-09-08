import { Action, AppState } from "../../types";
import { BEGIN_REFRESHING, END_REFRESHING } from "../../actions";

const initialState: AppState = {
  isRefreshing: false
};

export default (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {
    case BEGIN_REFRESHING:
      return {
        ...state,
        isRefreshing: true
      };
    case END_REFRESHING:
      return {
        ...state,
        isRefreshing: false
      };
    default:
      return state;
  }
};
