import React from "react";
import { AppRegistry } from "react-native";
import Root from "./src/Root";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, rootStore } from "./src/store";
import LoadingView from "./src/components/loading-view";

const ReduxWrapper = () => {
  return (
    <Provider store={rootStore}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxWrapper);
