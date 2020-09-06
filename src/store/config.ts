import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { composeMiddleware } from "./middleware";
import { createPersistStore } from "./persistor";
import { Persistor } from "redux-persist/es/types";

const initialState = {};

const middleware = composeMiddleware();

const { persistStore, persistedReducer } = createPersistStore(rootReducer);

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor: Persistor = persistStore(rootStore);
