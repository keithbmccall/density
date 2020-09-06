import React, { FC } from "react";
import { View } from "react-native";
import Spinner from "react-native-spinkit";
import defaultStyle from "./styles";

interface LoadingViewProps {
  blank?: boolean;
}

const LoadingView: FC<LoadingViewProps> = ({ blank = false }) =>
  blank ? (
    <View style={defaultStyle.loadingView} />
  ) : (
    <View style={defaultStyle.loadingView}>
      <Spinner isVisible color={defaultStyle.loadingAnimation.color} size={75} type="9CubeGrid" />
    </View>
  );

export default LoadingView;
