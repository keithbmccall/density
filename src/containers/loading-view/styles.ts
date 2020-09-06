import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors, globalStyle } from "../../styles-global";
import { ViewColor } from "../../types";

interface Styles {
  loadingView: ViewStyle;
  loadingAnimation: ViewColor;
}
export default StyleSheet.create<Styles>({
  loadingView: {
    ...globalStyle.absolute,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    width: "100%",
    ...globalStyle.flexCenter,
    backgroundColor: colors.white,
    zIndex: 10
  },
  loadingAnimation: {
    color: colors.loadingAnimation
  }
});
