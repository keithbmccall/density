import React from "react";
import { AppRegistry, StatusBar, SafeAreaView } from "react-native";
import Root from "./src/Root";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { rootStore, persistor } from "./src/store";
import LoadingView from "./src/containers/loading-view";

const ReduxWrapper = () => {
  return (
    <Provider store={rootStore}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Root />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxWrapper);
