import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../styles-global";

interface Styles {
  spacesWrapper: ViewStyle;
  spacesCompanyName: TextStyle;
  spacesListWrapper: ViewStyle;
  spacesListHeader: TextStyle;
  spaceTileWrapper: ViewStyle;
  spaceTileHeader: TextStyle;
  spaceTileCount: TextStyle;
}

export default StyleSheet.create<Styles>({
  spacesWrapper: {
    paddingHorizontal: 10,
    paddingTop: 20
  },
  spacesCompanyName: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  spacesListWrapper: {
   flex:1
  },
  spacesListHeader: { fontSize: 18, fontWeight: "bold", paddingVertical: 20 },
  spaceTileWrapper: {
    height: 90,
    backgroundColor: colors.secondary,
    marginVertical: 10,
    padding: 10
  },
  spaceTileHeader: {
    fontSize: 20,
    fontWeight: "bold"
  },
  spaceTileCount: {
    fontSize: 30,
    fontWeight: "bold",
    flexDirection: "row",
    textAlign: "right",
    width: "100%"
  }
});
