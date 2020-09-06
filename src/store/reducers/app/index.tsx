import { BEGIN_LOADING, END_LOADING } from "../../actions";
import { Action, AppState } from "../../types";



const initialState: AppState = {
  isLoading: false
};

export default (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {
    case BEGIN_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
