import { combineReducers } from "redux";
import appReducer from "./app";
import spacesReducer from "./spaces";

const rootReducer = combineReducers({
  app: appReducer,
  spaces: spacesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
