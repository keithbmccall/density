import React, { FC } from "react";
import { RefreshControl, ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useSpaces } from "./hooks";
import { refreshingSelector, spacesSelector } from "../../store/selectors";
import { initSpaceSocket } from "./utils";
import { beginRefreshing, endRefreshing } from "../../store/actions";
import styles from "./styles";
import SpacesList from "./spaces-list";

const Spaces: FC = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(refreshingSelector);
  const spaces = useSelector(spacesSelector);

  useSpaces();

  const onRefresh = async () => {
    dispatch(beginRefreshing());
    await initSpaceSocket(dispatch);
    dispatch(endRefreshing());
  };

  return (
    <ScrollView
      contentContainerStyle={styles.spacesWrapper}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
    >
      <Text style={styles.spacesCompanyName}>ACME AIR</Text>
      <SpacesList spaces={spaces} />
    </ScrollView>
  );
};

export default Spaces;
