import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
  layoutWrapper: ViewStyle;
}

export default StyleSheet.create<Styles>({
  layoutWrapper: {
    flex:1
  }
});
