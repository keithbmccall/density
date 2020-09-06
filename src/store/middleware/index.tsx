import thunk from "redux-thunk";
import { Middleware } from "redux";

type Middlewares = Middleware[];

export const composeMiddleware = (): Middlewares => {
  return [thunk];
};
