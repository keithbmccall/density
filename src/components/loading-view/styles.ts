import { StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../styles-global";
import { ViewColor } from "../../types";

interface Styles {
  loadingView: ViewStyle;
  loadingAnimation: ViewColor;
}

export default StyleSheet.create<Styles>({
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    zIndex: 10
  },
  loadingAnimation: {
    color: colors.primary
  }
});
