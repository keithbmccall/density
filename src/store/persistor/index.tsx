import AsyncStorage from "@react-native-community/async-storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";
import { Reducer, Store } from "redux";
import { Persistor, PersistorOptions } from "redux-persist/es/types";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["app"],
  stateReconciler: autoMergeLevel2
};

type PersistStore = (
  store: Store,
  persistorOptions?: PersistorOptions | null | undefined,
  callback?: (() => any) | undefined
) => Persistor;

type CreatePersistStore = (
  rootReducer: Reducer
) => {
  persistStore: PersistStore;
  persistedReducer: Reducer;
};

export const createPersistStore: CreatePersistStore = rootReducer => ({
  persistStore,
  persistedReducer: persistReducer(persistConfig, rootReducer)
});
