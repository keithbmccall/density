import { combineReducers } from "redux";
import appReducer from "./app";
import doorwayReducer from "./doorway";

const rootReducer = combineReducers({
  app: appReducer,
  doorway: doorwayReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
