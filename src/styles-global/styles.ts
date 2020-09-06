import { Dimensions, ViewStyle } from "react-native";
//
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");

export const layoutGrid = {
  // height split on grid
  halfEight: {
    height: DEVICE_HEIGHT * 0.06125
  },
  halfQuarter: {
    height: DEVICE_HEIGHT * 0.125
  },
  quarter: {
    height: DEVICE_HEIGHT * 0.25
  },
  half: {
    height: DEVICE_HEIGHT * 0.5
  },
  threeFourth: {
    height: DEVICE_HEIGHT * 0.75
  }
};

export const globalStyle = {
  debug: {
    borderColor: "red",
    borderWidth: 2
  },
  flex1: {
    flex: 1
  },
  flexRow: {
    flexDirection: "row"
  },
  flexColumn: {
    flexDirection: "column"
  },
  justifyCenter: {
    justifyContent: "center"
  },
  alignCenter: {
    alignItems: "center"
  },
  flexCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  justifySpaced: {
    justifyContent: "space-evenly"
  },
  textAlignCenter: {
    textAlign: "center"
  },
  bold: {
    fontWeight: "bold"
  }
};
