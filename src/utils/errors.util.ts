import AsyncStorage from "@react-native-community/async-storage";

type WrapGlobalHandler = (error: Error, isFatal: boolean | undefined) => Promise<void>;

const errorHandler = ErrorUtils.getGlobalHandler();

const wrapGlobalHandler: WrapGlobalHandler = async (error, isFatal) => {
  // If the error kills our app in Release mode, make sure we don't rehydrate
  if (isFatal && !__DEV__) AsyncStorage.clear();

  //Once finished, make sure react-native also gets the error
  if (ErrorUtils) {
    errorHandler(error, isFatal);
  }
};

export const setGlobalHandler = (): void => {
  ErrorUtils.setGlobalHandler(wrapGlobalHandler);
};
