import React, { FC } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import styles from "./styles";

const Layout: FC = ({ children }) => {
  return (
    <View style={styles.layoutWrapper}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default Layout;
