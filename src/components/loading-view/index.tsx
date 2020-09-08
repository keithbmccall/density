import React, { FC } from "react";
import { View, ViewStyle } from "react-native";
import Spinner from "react-native-spinkit";
import defaultStyle from "./styles";

interface LoadingViewProps {
  blank?: boolean;
  style?: ViewStyle;
}

const LoadingView: FC<LoadingViewProps> = ({ blank = false, style }) =>
  blank ? (
    <View style={{ ...defaultStyle.loadingView, ...style }} />
  ) : (
    <View style={{ ...defaultStyle.loadingView, ...style }}>
      <Spinner isVisible color={defaultStyle.loadingAnimation.color} size={75} type="9CubeGrid" />
    </View>
  );

export default LoadingView;
